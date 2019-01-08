FROM node:11.6.0-alpine

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY src/ .
COPY angular.json .
COPY tsconfig.json .
COPY tslint.json .


CMD npm start
#ng serve
