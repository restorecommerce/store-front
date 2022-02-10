# syntax = docker/dockerfile:experimental

### Base
FROM node:15-alpine as base

USER node
ARG APP_HOME=/home/node/app
WORKDIR $APP_HOME

COPY package.json package.json
COPY package-lock.json package-lock.json


### Build
FROM base as build

RUN npm ci

COPY --chown=node:node . .

RUN npm run build:ssr


### Deployment
FROM base as deployment

RUN npm ci --only=production

COPY --chown=node:node . $APP_HOME
COPY --chown=node:node --from=build $APP_HOME/dist $APP_HOME/dist

EXPOSE 4000

HEALTHCHECK CMD ["wget", "--spider", "localhost:4000"]

CMD [ "npm", "run", "serve:ssr" ]
