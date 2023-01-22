FROM node:16-alpine

RUN apk add --no-cache bash

WORKDIR /home/node/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm start
