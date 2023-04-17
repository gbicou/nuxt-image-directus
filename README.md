# Directus provider for NuxtImage

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Provides [Directus](https://directus.io/) assets source for [Nuxt Image](https://v1.image.nuxtjs.org/).

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Quick Setup

1. Add `@bicou/nuxt-image-directus` dependency to your project

```bash
# Using pnpm
pnpm add -D @bicou/nuxt-image-directus

# Using yarn
yarn add --dev @bicou/nuxt-image-directus

# Using npm
npm install --save-dev @bicou/nuxt-image-directus
```

2. Add `@bicou/nuxt-image-directus` to the `modules` section of `nuxt.config.ts` **before** `@nuxt/image-edge`

```js
export default defineNuxtConfig({
  modules: [
    // must be listed before @nuxt/image-edge
    "@bicou/nuxt-image-directus",
    "@nuxt/image-edge"
  ]
})
```

3. Add the alias `#image-directus` to the list of providers for nuxt image and pass `baseURL` option :

```js
export default defineNuxtConfig({
  modules: [
    "@bicou/nuxt-image-directus",
    "@nuxt/image-edge"
  ],
  image: {
    providers: {
      directus: {
        // need to use runtime alias
        provider: "#image-directus",
        options: {
          // path to your directus assets
          baseURL: "https://directushost:8055/assets" 
        }  
      }  
    }  
  }  
})
```

That's it! You can now use `<nuxt-img provider="directus" src="..." />` or `<nuxt-picture provider="directus" src="..." />` with your Directus assets in your Nuxt app ✨

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run build

# Run ESLint
pnpm run lint
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@bicou/nuxt-image-directus/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@bicou/nuxt-image-directus

[npm-downloads-src]: https://img.shields.io/npm/dm/@bicou/nuxt-image-directus.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@bicou/nuxt-image-directus

[license-src]: https://img.shields.io/npm/l/@bicou/nuxt-image-directus.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@bicou/nuxt-image-directus

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
