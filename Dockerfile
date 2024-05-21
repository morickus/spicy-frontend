# Используем официальный образ Node.js 18
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Устанавливаем переменные окружения
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# Создаем сборку приложения
RUN npm run build

# Запускаем Next.js приложение
CMD ["npm", "start"]
