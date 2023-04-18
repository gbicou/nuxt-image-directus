import ImageDirectusModule from "../../../src/module";

export default defineNuxtConfig({
  modules: [ImageDirectusModule, "@nuxt/image-edge"],
  image: {
    provider: "directus",
    providers: {
      directus: {
        provider: "#image-directus",
        options: {
          baseURL: "http://directus:port/assets",
        },
      },
    },
  },
});
