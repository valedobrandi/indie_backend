FROM node:18-slim
WORKDIR /app-frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD  [ "npm", "run", "dev" ]
