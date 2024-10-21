FROM node:18-slim

WORKDIR /app-backend

COPY package*.json ./

RUN npm install --verbose

COPY . .

EXPOSE 3001

CMD  [ "npm", "run", "dev" ]

