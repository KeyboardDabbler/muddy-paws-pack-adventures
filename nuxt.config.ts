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
  app: {
    head: {
      script: [
        {
          src: 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0',
          async: true,
          defer: true,
          crossorigin: 'anonymous',
          nonce: 'MC3jL7ag',
        },
      ],
    }
  }
})