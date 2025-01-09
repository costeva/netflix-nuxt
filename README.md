🍿 Netflix UI Clone con Nuxt + Docker

¡Bienvenidos a este clon de la interfaz de Netflix usando Nuxt.js y Docker!

📃 Descripción

Proyecto que recrea la interfaz de Netflix para fines educativos.
Este clon está construido utilizando Nuxt 3 y emplea TailwindCSS para el diseño y estilos. ¡Ideal para aprender y experimentar con nuevas tecnologías!

🚀 Requisitos

Docker y Docker Compose instalados

Node.js (opcional, si deseas ejecutarlo localmente sin Docker)

⚙️ Instalación y configuración

1. Clonar el repositorio

2. Levantar el contenedor con Docker

Ejecuta el siguiente comando para construir y correr el contenedor en segundo plano:

docker compose up -d

Esto creará y correrá la aplicación en tu entorno local.

3. Acceso a la aplicación

Abre tu navegador y visita:

http://localhost:3000

📂 Estructura del Proyecto

.nuxt/ # Archivos generados por Nuxt
app/ # Directorio principal de la aplicación
assets/ # Archivos estáticos como imágenes y estilos
components/ # Componentes reutilizables de Vue
composables/ # Composables
layouts/ # Diseños base para las páginas
middleware/ # Middleware para rutas
pages/ # Vistas y rutas principales
app.vue # Archivo principal de la aplicación
public/ # Archivos estáticos públicos
server/ # Configuración del backend (si aplica)
.env # Variables de entorno
nuxt.config.ts # Configuración principal de Nuxt

📦 Dependencias

Producción

@nuxt/content: Gestor de contenido para Nuxt.

@nuxt/icon: Sistema de iconos.

@nuxt/ui: Componentes predefinidos para interfaz.

@vueuse/core: Utilidades de Vue.

lodash-es: Utilidades adicionales de JavaScript.

Desarrollo

@nuxt/eslint: Integración de ESLint con Nuxt.

@nuxtjs/tailwindcss: Soporte para Tailwind CSS en Nuxt.

eslint-config-prettier: Configuración para evitar conflictos entre ESLint y Prettier.

🛠 Scripts Disponibles

npm run dev: Inicia el servidor de desarrollo.

npm run build: Genera la versión de producción.

npm run start: Inicia la aplicación en modo producción.

npm run generate: Genera un sitio estático.

npm run lint: Ejecuta ESLint para comprobar errores.

npm run lint:fix: Corrige errores de ESLint automáticamente.

✨ Características

Diseño adaptable: Compatible con dispositivos móviles y escritorio.

Componentes reutilizables: Diseñados para ser fácilmente modificables.

Integración con Docker: Rápido despliegue en cualquier entorno.

TailwindCSS: Estilos modernos y eficientes.

📌 Notas adicionales

Si no deseas usar Docker, puedes correr el proyecto localmente:

npm install
npm run dev

🖥 Tecnologías utilizadas

Nuxt 3.15.0

TailwindCSS

Docker

Vue.js
