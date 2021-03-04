FROM node:12-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /opt/leximpact-client

COPY package.json .
# Install dependencies
RUN npm update
RUN npm install
# Copy everything
COPY . .
EXPOSE 9001
CMD ["npm", "run", "dev"]
#ENTRYPOINT ["watch", "-n", "60", "echo 'Client is in debug...'"]