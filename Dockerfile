FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm update
RUN npm install
COPY . .

EXPOSE 9000

RUN npm run build
CMD npm run serve
