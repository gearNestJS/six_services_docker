FROM node:20-alpine
LABEL MusoVerda <https://github.com/gearmobile>
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]