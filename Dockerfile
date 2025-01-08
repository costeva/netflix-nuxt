# Usa la imagen base de Node
FROM node:20.18.0-slim
# Crea una carpeta para tu app
WORKDIR /app
# Copia package.json y package-lock.json
COPY package*.json ./
RUN npm install
# Copia el resto del código
COPY . .
# Expone el puerto
EXPOSE 3000
# Ejecuta tu app
CMD ["npm", "run", "dev"]