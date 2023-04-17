import { createResolver, defineNuxtModule } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "image-directus",
    configKey: "imageDirectus",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url);
    nuxt.options.alias["#image-directus"] = resolver.resolve("./runtime");
  },
});
