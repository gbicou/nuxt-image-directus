import ImageDirectusModule from "../src/module";

export default defineNuxtConfig({
  modules: [ImageDirectusModule, "@nuxt/image-edge"],
  image: {
    providers: {
      directus: {
        provider: "#image-directus",
        options: {
          baseURL: "http://localhost:8055/assets",
        },
      },
    },
  },
});
