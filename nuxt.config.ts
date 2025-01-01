// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxthq/studio",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxt/fonts",
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-7WT9RR346M'
  },

  colorMode: {
    classSuffix: "",
  },

  // https://content.nuxt.com/
  content: {
    documentDriven: {
      injectPage: false,
    },
    highlight: false,
  },

  ogImage: {
    defaults: {
      component: "OgImage",
    },
  },

  runtimeConfig: {

    
    public: {
      // todo posthog re-enable
      // posthogPublicKey: 'phc_lIMunm30klpLvetBYKUR4tH8VWeIOJsVCLLnHB73AKA',
      // posthogHost: 'https://us.i.posthog.com',
      mdc: {
        useNuxtImage: true,
      },
    },
  },
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ["/", "/sitemap.xml"],
    },
  },
  site: {
    url: "https://example.com",
  },
  compatibilityDate: "2024-09-20",
});