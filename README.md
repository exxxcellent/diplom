# News App 🚀

Это дипломный проект, представляющий собой веб-приложение на базе современных технологий, включая NextJS, NestJS.

## 📁 Структура проекта

Структура проекта организована в виде монорепозитория для удобного управления фронтендом, бэкендом и общими пакетами.

```
diplom/
├── backend/                # NestJS API сервер (Серверная часть)
│   ├── src/                # Исходный код NestJS приложения
│   └── package.json        # Зависимости бэкенда
├── frontend/               # React приложение (Клиентская часть)
│   ├── src/                # Исходный код React приложения
│   ├── public/             # Статические файлы
│   └── package.json        # Зависимости фронтенда
├── .env                    # Файл с переменными окружения
├── .gitignore              # Файл для исключения из Git
├── .prettierrc             # Настройки форматировщика кода Prettier
├── build.sh                # Скрипт для сборки проекта (например, для Docker)
├── docker-compose.yml      # Конфигурация для запуска через Docker Compose
└── README.md               # Этот файл
```

## 🚀 Быстрый старт

### Установка зависимостей и запуск проекта

Для установки всех зависимостей и запуска проекта выполните команду из корневой папки:

```bash
bash build.sh
```

## 🛠 Технологический стек

### **Frontend**

-   **React 19** с TypeScript
-   **NextJS** meta-фреймфорк для React
-   **Tailwind CSS** для стилизации UI
-   **Mantine UI** для компонентов

### **Backend**

-   **NestJS** с TypeScript для создания надежного API

### **Инфраструктура**

-   **TypeScript** для строгой типизации во всем проекте

## 📋 Основные команды

### **Общие команды**

```bash
npm install           # Установка всех зависимостей
npm run build         # Сборка всех пакетов и приложений для production
npm run dev           # Запуск всех сервисов в режиме разработки
npm run lint          # Проверка кода линтером
npm run format        # Автоматическое форматирование кода
```

## 🔧 Окружение

Создайте файлы `.env` в соответствующих директориях и заполните их по примеру ниже.

### `.env`

```env
# app conf
FRONTEND_PORT=3000
API_PORT=4000
FRONTEND_URL="http://localhost:3000"
SERVER_URL="http://103.74.93.252"
NEXT_PUBLIC_API_URL="http://localhost:4000"

# integration conf
NEWS_API_BASE_URL="https://newsapi.org/v2"
NEWS_API_KEY="ca3b539b720d493c9f5aca6872a0d5ec"

```

## 📄 Лицензия

Proprietary - Все права защищены.

Данное программное обеспечение является объектом авторского права. Использование, копирование и распространение допускается только с письменного разрешения правообладателя.
