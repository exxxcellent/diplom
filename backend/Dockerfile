# --- ЭТАП 1: Установка зависимостей ---
FROM node:20-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm install

# --- ЭТАП 2: Сборка приложения ---
FROM node:20-alpine AS build

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

RUN npm run build

# --- ЭТАП 3: Финальный образ для production ---
FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=build /app/dist ./dist

CMD ["npm", "run", "start:prod"]