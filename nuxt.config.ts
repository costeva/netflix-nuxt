// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],
  supabase: {
    redirect: false,
  },
  colorMode: {
    classSuffix: "",
  },
});
