import ImageDirectusModule from "../../../src/module";

export default defineNuxtConfig({
  modules: [ImageDirectusModule, "@nuxt/image-edge"],
  imageDirectus: {
    baseURL: "http://directus:port/assets",
    accessToken: "xxx",
  },
  image: {
    provider: "directus",
    providers: {
      directus: {
        provider: "#image-directus",
      },
    },
  },
});
