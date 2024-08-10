<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import ImageGalleria from '@/components/common/ImageGalleria.vue'

const titlebar = useToolbarStore()

const images = ref([
  {
    itemImageSrc: '/images/deformed/deformed3-1536x866.png',
    thumbnailImageSrc: '/images/deformed/deformed3-1536x866.png',
    description: 'Description for Item 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: '/images/deformed/deformed3-1536x866.png',
    thumbnailImageSrc: '/images/deformed/deformed3-1536x866.png',
    description: 'Description for Item 2',
    title: 'Title 2',
  },
])

onMounted(async () => {
  titlebar.clearToolbarComponents()
})
</script>

<template>
  <Card>
    <template #title>Latent Feature Grid Compression</template>
    <template #content>
      <div class="image-galleria-container">
        <ImageGalleria :images="images" />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.image-galleria-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
