FROM node:latest
MAINTAINER Matheus Fidelis <msfidelis01@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

CMD ["node", "app.js"]
