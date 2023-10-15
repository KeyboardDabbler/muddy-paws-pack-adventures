// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      number: process.env.PUBLIC_NUMBER,
      id: process.env.MESSENGER_ID,
    }
  },
  modules: [
    'nuxt-windicss',
    'nuxt-icon',
],
  css: ['~/resources/scrollbar.css'],
})