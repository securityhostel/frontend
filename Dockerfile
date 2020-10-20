FROM node:14.14.0-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD [ "npm", "start" ]
