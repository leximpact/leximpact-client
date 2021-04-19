FROM node:12

WORKDIR /opt
RUN git clone https://github.com/leximpact/leximpact-client.git
WORKDIR /opt/leximpact-client

COPY ./docker/docker-local.env /opt/leximpact-client/.env
# Clean just to be sure
RUN rm -rf node_modules build
# Install dependencies
RUN npm install
EXPOSE 9001

# For production
# RUN npm run test
# RUN npm run code:check
# RUN npm run build
# CMD ["npm", "start"]

# For dev
CMD ["npm", "run", "dev"]

# For debug : to keep the container running doing nothing
#CMD tail -f /dev/null

