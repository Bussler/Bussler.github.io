<script setup lang="ts">
import { onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'

const titlebar = useToolbarStore()

const toolbarComponents = [
  {
    label: 'Create',
    icon: 'pi pi-fw pi-plus',
    command: () => console.log('BUTTON'),
  },
  {
    label: 'Import',
    icon: 'pi pi-fw pi-cloud-upload',
    command: () => console.log('BUTTON'),
  },
]

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>Home</template>
    <template #content> Welcome! 😀</template>
  </Card>
</template>
