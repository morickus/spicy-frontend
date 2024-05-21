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

# Создаем сборку приложения
RUN npm run build

# Запускаем Next.js приложение
CMD ["npm", "start"]
