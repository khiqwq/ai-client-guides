<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ImageLightbox from './ImageLightbox.vue'
import UiEnhancements from './UiEnhancements.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <ImageLightbox />
      <UiEnhancements />
    </template>
  </Layout>
</template>
