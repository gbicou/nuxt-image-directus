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

2. Add `@bicou/nuxt-image-directus` to the `image.providers` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    "@nuxt/image-edge"
  ],
  image: {
    provider: "directus", // optionally set directus as default provider  
    providers: {
      directus: {
        provider: "@bicou/nuxt-image-directus",
        options: {
          baseURL: "https://directushost:8055/assets"  
        }  
      }  
    }  
  }  
})
```

That's it! You can now use `<nuxt-img />` or `<nuxt-picture />` with your Directus assets in your Nuxt app ✨

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
