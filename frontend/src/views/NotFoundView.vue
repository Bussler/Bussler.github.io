<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'

const titlebar = useToolbarStore()

onMounted(async () => {
  titlebar.clearToolbarComponents()
})
</script>

<template>
  <Card>
    <template #title>Path not found</template>
    <template #content>
      <span>Could not resolve the requested path 🐢</span>
    </template>
  </Card>
</template>
