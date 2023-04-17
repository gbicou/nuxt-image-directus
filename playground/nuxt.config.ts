export default defineNuxtConfig({
  modules: ["@nuxt/image-edge"],
  image: {
    providers: {
      directus: {
        provider: '@bicou/nuxt-image-directus',
        options: {
          baseURL: "http://test/assets"
        }
      }
    }
  }
});
