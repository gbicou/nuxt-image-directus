<template>
  <div>
    <p>Nuxt module playground!</p>
    <nuxt-img provider="directus" :src="fileID" width="300" format="auto" />
    <nuxt-img provider="directus" :src="fileID" width="300" format="avif" />
    <nuxt-img provider="directus" :src="fileID" width="300" quality="5" />
  </div>
</template>

<script setup lang="ts">
const fileID = "2c7ac3bb-063b-4080-afd9-2defbe84cc4b";
</script>
