FROM node:14

RUN mkdir /work
WORKDIR /work
COPY package.json .
RUN npm install
COPY . .

EXPOSE 3000

RUN npm run build
CMD npm run start
