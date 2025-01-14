export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  app: {
    pageTransition: false,
  },
  eslint: {
    checker: true,
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxt/eslint",
  ],
  tailwindcss: {
    viewer: false,
  },
  colorMode: {
    classSuffix: "",
  },
  typescript: {
    typeCheck: true,
  },
});
