FROM ajoel24/quiver-base:0.0.1

WORKDIR /usr/src/app

COPY ./package.json ./package.json
COPY ./config/ ./config/
COPY ./database/ ./database/
COPY ./public/ ./public/
COPY ./src/ ./src/

RUN yarn install

EXPOSE 1337

CMD ["yarn", "start"]