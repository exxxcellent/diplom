# --- ЭТАП 1: Установка зависимостей ---
# Используем псевдоним 'dependencies' для этого этапа
FROM node:20-alpine AS dependencies
WORKDIR /app
COPY package*.json ./
# Устанавливаем ВСЕ зависимости, включая devDependencies, которые нужны для сборки
RUN npm install

# --- ЭТАП 2: Сборка приложения ---
# Используем псевдоним 'build'
FROM node:20-alpine AS build
WORKDIR /app
# Копируем зависимости с предыдущего этапа для экономии времени
COPY --from=dependencies /app/node_modules ./node_modules
# Копируем весь исходный код
COPY . .
# Генерируем Prisma Client. Он будет создан внутри node_modules/.prisma/client
RUN npx prisma generate
# Собираем NestJS приложение
RUN npm run build
# На этом этапе у нас есть папки:
# - /app/dist (собранное приложение)
# - /app/node_modules (со всеми зависимостями, включая сгенерированный клиент)
# - /app/prisma (схема)

# --- ЭТАП 3: Финальный образ для production ---
# Начинаем с чистого базового образа
FROM node:20-alpine AS production
WORKDIR /app
# Копируем package.json, чтобы установить ТОЛЬКО production зависимости
COPY package*.json ./
# Устанавливаем только production зависимости. Это значительно уменьшит размер образа.
RUN npm ci --only=production

# Копируем собранное приложение из этапа 'build'
COPY --from=build /app/dist ./dist

# **КЛЮЧЕВОЙ ШАГ:** Копируем сгенерированный Prisma Client из этапа 'build'
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma

# Prisma также может требовать файл схемы во время выполнения для некоторых функций
COPY --from=build /app/prisma/schema.prisma ./prisma/schema.prisma

# Команда для запуска приложения
# Предполагается, что в package.json есть скрипт "start:prod": "node dist/main"
CMD ["npm", "run", "start:prod"]