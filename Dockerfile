FROM node:alpine

WORKDIR /app

COPY package.json .

RUN apk add --update --no-cache build-base python3-dev python3 libffi-dev libressl-dev bash git gettext curl \
 && curl -O https://bootstrap.pypa.io/get-pip.py \
 && python3 get-pip.py \
 && pip install --upgrade six awscli awsebcli

RUN npm update
RUN npm install
COPY . .

EXPOSE 9000

RUN npm run build
CMD npm run serve
