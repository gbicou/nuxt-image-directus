import { parseURL, withBase, encodeQueryItem } from "ufo";
import { createOperationsGenerator } from "#image";
import { useRuntimeConfig } from "#app";
import type { ProviderGetImage } from "@nuxt/image-edge";

const operationsGenerator = createOperationsGenerator({
  formatter: encodeQueryItem,
  keyMap: {},
  joinWith: "&",
});

export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL } = {}) => {
  const options = useRuntimeConfig().public.imageDirectus;

  // @ts-ignore
  const operations = operationsGenerator({
    access_token: options.accessToken || undefined,
    ...modifiers,
  });

  const { pathname, search } = parseURL(src);
  const path = pathname + search + (operations ? (search ? "&" : "?") + operations : "");
  const url = withBase(path, baseURL ?? options.baseURL);

  return { url };
};
