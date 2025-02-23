FROM node:18-slim

WORKDIR /app-backend

COPY package*.json ./

RUN npm ci --omit=dev && npm cache clean --force

COPY . .

RUN useradd -m appuser
USER appuser

EXPOSE 3001

CMD  [ "npm", "run", "dev" ]

