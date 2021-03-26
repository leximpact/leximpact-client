FROM node:12

WORKDIR /opt
RUN git clone https://github.com/leximpact/leximpact-client.git
WORKDIR /opt/leximpact-client

RUN echo "API_URL=https://api.leximpact.an.fr/" > .env
# Clean just to be sure
RUN rm -rf node_modules build
# Install dependencies
RUN npm install
RUN npm run test
RUN npm run code:check
RUN npm run build
EXPOSE 9001
CMD ["npm", "run", "dev"]
