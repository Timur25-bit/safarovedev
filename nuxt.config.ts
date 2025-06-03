// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  devtools: { enabled: true },
  nitro: {
    preset: 'static',
    static: {
      fallback: '200.html'
    }
  },
  app: {
    baseURL: '/safarovedev/'
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    'nuxt-quasar-ui'
  ],
})