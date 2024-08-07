<script setup lang="ts">
import { onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import Linker from '@/components/common/Linker.vue'

const titlebar = useToolbarStore()

onMounted(async () => {
  titlebar.clearToolbarComponents()
})
</script>

<template>
  <Card>
    <template #title>Latent Feature Grid Compression</template>
    <template #content> </template>
  </Card>
</template>

<style scoped></style>
