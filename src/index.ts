import {joinURL, encodeQueryKey, encodeQueryValue} from "ufo";
import {createOperationsGenerator} from "#image";
import type {ProviderGetImage} from "@nuxt/image-edge";

const operationsGenerator = createOperationsGenerator({
    keyMap: {},
    joinWith: "&",
    formatter: (key: string, val: string) =>
        encodeQueryKey(key) + "=" + encodeQueryValue(val),
});

export const getImage: ProviderGetImage = (
    src,
    {modifiers = {}, baseURL} = {}
) => {
    const params = operationsGenerator(modifiers);

    return {
        url: joinURL(baseURL, src + (params ? "?" + params : "")),
    };
};
