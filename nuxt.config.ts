// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // With default plugin options
    // "vue-toastification/nuxt",
  ],
  devtools: {
    enabled: true,
    pages:true
   },
// @ts-ignore
   css: ['~/assets/css/main.css'],
   postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
