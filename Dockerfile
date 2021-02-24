FROM node:12-alpine
WORKDIR /opt

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /opt/leximpact-client
# Copy sources from curent directory
#COPY . .
COPY package.json .
# Install dependencies
RUN npm update
RUN npm install

EXPOSE 9001
CMD ["npm", "run", "dev"]
#ENTRYPOINT ["watch", "-n", "60", "echo 'Client is in debug...'"]