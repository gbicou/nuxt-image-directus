import { createResolver, defineNuxtModule } from "@nuxt/kit";
import { defu } from "defu";

// Module options TypeScript interface definition
export interface ModuleOptions {
  // Base URL of directus assets
  baseURL?: string;
  // Static access token appended to assets' URL
  accessToken?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "image-directus",
    configKey: "imageDirectus",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    const runtimeDir = resolver.resolve("./runtime");
    nuxt.options.build.transpile.push(runtimeDir);
    nuxt.options.alias["#image-directus"] = runtimeDir;

    nuxt.options.runtimeConfig.public.imageDirectus = defu(
      nuxt.options.runtimeConfig.public.imageDirectus,
      {
        baseURL: options.baseURL,
        accessToken: options.accessToken,
      }
    );
  },
});
