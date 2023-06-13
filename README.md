# NextJS POC

[Design Doc](https://docs.google.com/document/d/19tD3mo6f5YGsQryaqLwhG8QIMnADp3g3NdtDHIImIyY/edit?usp=sharing)

This repo is set up with yarn workspaces and consists of 3 packages

1. client - a NextJS application created with create next app
2. server - an express server used to proxy requests between backend-web and the Next server
3. shared - a library for sharing code betwen 1 & 2

## Getting Started

1. After cloning the repo, run `yarn` to install all dependencies.
2. Run `yarn build` to build the shared package first and then the client & server packages
3. Run `yarn start` to run the express server and a "simulated" backend-web
4. Visit http://localhost:4000
