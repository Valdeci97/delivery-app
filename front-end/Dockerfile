FROM node:16-alpine

RUN apk add --no-cache bash

WORKDIR /home/node/app

RUN chown -R node:node /home/node/app

COPY --chown=node:node package.json ./

RUN npm install

COPY --chown=node:node . .

USER node

ENTRYPOINT [ "npm", "start" ]
