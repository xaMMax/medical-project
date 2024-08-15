# Вказуємо базовий образ для Node.js
FROM node:18-alpine

# Встановлюємо робочу директорію в контейнері
WORKDIR /app

# Копіюємо package.json та package-lock.json у робочу директорію
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проєкт у робочу директорію
COPY . .

# Збираємо Vue.js додаток для продакшн
RUN npm run build

# Встановлюємо базовий образ для nginx
FROM nginx:alpine

# Копіюємо зібрані файли у папку, яка обслуговує контент
COPY --from=0 /app/dist /usr/share/nginx/html

# Експортуємо порт 80
EXPOSE 80

# Запускаємо nginx
CMD ["nginx", "-g", "daemon off;"]
