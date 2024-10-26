FROM node:20-alpine

LABEL Muso Verda <https://github.com/gearmobile>

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .