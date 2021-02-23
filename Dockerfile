FROM node:12-alpine
WORKDIR /opt
# TODO : use a multistage build
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN git clone https://github.com/leximpact/leximpact-client.git
WORKDIR /opt/leximpact-client
COPY .env.dev .env
RUN npm update
RUN npm install

EXPOSE 9001
CMD ["npm", "run", "dev"]