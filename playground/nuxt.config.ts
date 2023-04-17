export default defineNuxtConfig({
  modules: ["@bicou/nuxt-image-directus", "@nuxt/image-edge"],
  image: {
    providers: {
      directus: {
        provider: "#image-directus",
        options: {
          baseURL: "http://test/assets",
        },
      },
    },
  },
});
