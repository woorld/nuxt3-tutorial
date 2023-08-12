// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: [ '/assets/css/style.css' ],
  app: {
    head: {
      title: 'Nuxt3 Tutorial',
      meta: [
        {
          name: 'description',
          content: 'Nuxt3 Tutorial Page',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/icon.png',
        }
      ],
    }
  }
});
