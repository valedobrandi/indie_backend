FROM node:18-slim

WORKDIR /app-backend

COPY package*.json ./

RUN npm ci --omit=dev && npm cache clean --force
RUN npm install pm2 -g

COPY . .

RUN useradd -m appuser
RUN chown -R appuser:appuser /app-backend

RUN mkdir -p /app-backend/build && chown -R appuser:appuser /app-backend/build

USER appuser

EXPOSE 3001

CMD  [ "npm", "run", "start" ]

