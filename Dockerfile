# This Dockerfile is used to build base image

FROM node:16.13.1

WORKDIR usr/src/app

COPY . .

RUN yarn install

CMD ["echo", "Base image built successfully"]