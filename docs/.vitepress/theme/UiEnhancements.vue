<script setup lang="ts">
import { onMounted } from 'vue'
import { installUiEnhancements } from './ui-enhancements'

onMounted(installUiEnhancements)
</script>

<template><span class="ui-enhancements-anchor" aria-hidden="true"></span></template>
