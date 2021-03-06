FROM node:9.7.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install

EXPOSE 3002

CMD [ "yarn", "docker" ]
