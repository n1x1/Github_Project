# Creating a Dockerfile for a test project app

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./ 

RUN npm install

COPY . . 

CMD ["node", "server.js"]


