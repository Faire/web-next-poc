FROM node:16 AS base

# Install dependencies only when needed
FROM base AS deps

ARG VERDACCIO_TOKEN
ENV VERDACCIO_TOKEN=$VERDACCIO_TOKEN

COPY package.json yarn.lock .npmrc ./
RUN --mount=type=secret,id=npm,target=/root/.npmrc yarn

# Rebuild the source code only when needed
FROM base AS builder
COPY --from=deps /node_modules ./node_modules
COPY pages ./pages
COPY src ./src
COPY public ./public
COPY tsconfig.json package.json next.config.js ./

RUN yarn build

# Production image, copy files and run next
FROM base AS runner

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=deps /node_modules ./node_modules
COPY --from=builder /public ./public
COPY server ./server

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /.next/static ./.next/static

USER nextjs

EXPOSE 8080
ENV PORT 8080

CMD ["npx", "ts-node", "--project", "server/tsconfig.json", "server/server.ts"]