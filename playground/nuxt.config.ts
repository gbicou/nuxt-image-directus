import ImageDirectusModule from "../src/module";

export default defineNuxtConfig({
  modules: [ImageDirectusModule, "@nuxt/image-edge"],
  imageDirectus: {
    baseURL: "http://localhost:8055/assets",
    // accessToken: "xxx",
  },
  image: {
    providers: {
      directus: {
        provider: "#image-directus",
        options: {
          // baseURL: "http://localhost:8055/assets",
        },
      },
    },
  },
});
