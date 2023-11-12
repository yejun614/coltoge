// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content"
  ],
  content: {
    highlight: {
      theme: {
        default: "github-light",
        dart: "github-dark",
        sepia: "monokai"
      },
      preload: [
        "python"
      ]
    }
  },
  app: {
    head: {
      "link": [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: ""
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
        }
      ],
    }
  },
  css: [
    "@/assets/css/main.scss",
  ],
  components: [
    "@/components",
    {
      path: "@/components/content",
      pathPrefix: false
    }
  ]
})