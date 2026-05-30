FROM node:20-alpine

WORKDIR /the-aussie-outfit-product-service

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 5007

CMD ["npm", "start"]