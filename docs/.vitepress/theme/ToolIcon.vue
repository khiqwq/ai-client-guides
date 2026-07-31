<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <svg v-if="name === 'claude'" class="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M7.5 4.2l9 15.6M16.5 4.2l-9 15.6" />
  </svg>
  <svg v-else-if="name === 'codex'" class="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 7 4.5 12 9 17M15 7l4.5 5-4.5 5M13.5 4.5 10.5 19.5" />
    <circle cx="12" cy="12" r="9" class="icon-soft-circle" />
  </svg>
  <svg v-else-if="name === 'switch'" class="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 7h13M15 4l3 3-3 3M19 17H6M9 14l-3 3 3 3" />
  </svg>
  <svg v-else-if="name === 'cursor'" class="tool-logo tool-logo-fill" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 3 14 9-6.2 1.2L9.5 19 5 3Z" />
    <path d="m13 13 4 6" />
  </svg>
  <svg v-else-if="name === 'cherry'" class="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 9c0-3 2.2-5.4 5.5-6M12 9c0-2-1.2-3.7-3-4.8M12 9c1.1 1.1 1.8 2.5 1.8 4" />
    <circle cx="8" cy="16" r="4" /><circle cx="16" cy="16" r="4" />
    <path d="M15.5 4c1.5-.2 3 .2 4 1.2-1.4.9-3 1.1-4.5.5" />
  </svg>
  <svg v-else-if="name === 'kilo'" class="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 4v16M17.5 4 9 12l8.5 8M13 8l4-4M13 16l4 4" />
  </svg>
  <svg v-else-if="name === 'opencode'" class="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="m7 9 3 3-3 3M12.5 15H17" />
  </svg>
  <svg v-else class="tool-logo tool-logo-fill" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.2 10.3c-1.5-2.1-1.6-4.2-.4-5.3 1.3-1.1 3.2.1 4 2.5M12 8c0-2.7 1-4.5 2.5-4.5S17 5.3 17 8M16.8 10.3c1.5-2.1 1.6-4.2.4-5.3-1.3-1.1-3.2.1-4 2.5" />
    <path d="M5.5 15.4C5.5 11.8 8.4 9 12 9s6.5 2.8 6.5 6.4c0 3.3-2.5 5.1-6.5 5.1s-6.5-1.8-6.5-5.1Z" />
    <path d="M9.5 15.3h.1M14.4 15.3h.1" />
  </svg>
</template>
