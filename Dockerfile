FROM node:16 AS base

# Install dependencies only when needed
FROM base AS deps

ARG VERDACCIO_TOKEN
ENV VERDACCIO_TOKEN=$VERDACCIO_TOKEN

COPY package.json yarn.lock .yarnrc ./
COPY packages/*/package.json ./packages/*/package.json
COPY packages/*/yarn.lock ./packages/*/yarn.lock
COPY packages/*/.yarnrc ./packages/*/.yarnrc
RUN yarn

# Rebuild the source code only when needed
FROM base AS builder
COPY --from=deps /node_modules ./node_modules
COPY --from=deps /packages/client/node_modules ./packages/client/node_modules
COPY --from=deps /packages/server/node_modules ./packages/server/node_modules

COPY packages/client/src ./packages/client/src
COPY packages/client/public ./packages/client/public
COPY packages/client/tsconfig.json packages/client/package.json packages/client/next.config.js ./packages/client/

RUN yarn build:client

COPY packages/server/src ./packages/server/src
COPY packages/server/tsconfig.json packages/server/package.json ./packages/server/

RUN yarn build:server

# Production image, copy files and run next
FROM base AS runner

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=deps /node_modules ./node_modules
COPY --from=deps /packages/client/node_modules ./packages/client/node_modules
COPY --from=deps /packages/server/node_modules ./packages/server/node_modules

COPY --from=builder /packages/client/public ./packages/client/public
COPY --from=builder /packages/server/dist ./packages/server/dist

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /packages/client/.next/standalone ./packages/client
COPY --from=builder --chown=nextjs:nodejs /packages/client/.next/static ./packages/client/.next/static

USER nextjs

EXPOSE 8080
ENV PORT 8080

CMD ["node", "packages/server/dist/main.js"]