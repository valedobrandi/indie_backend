FROM node:18-slim

WORKDIR /app-backend

COPY package*.json ./

RUN npm ci --omit=dev && npm cache clean --force

COPY . .

RUN useradd -m appuser
RUN chown -R appuser:appuser /app-backend
USER appuser

EXPOSE 3001

CMD  [ "npm", "run", "start" ]

