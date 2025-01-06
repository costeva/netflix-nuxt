// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  runtimeConfig: {
    omdbApiKey: process.env.NUXT_OMDB_API_KEY || "",
  },

  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],

  colorMode: {
    classSuffix: "",
  },
});