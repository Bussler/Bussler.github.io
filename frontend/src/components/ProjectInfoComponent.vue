<script setup lang="ts">
import ImageGalleria, { type ImageItem } from '@/components/common/ImageGalleria.vue'
import InfoComponent from '@/components/common/InfoComponent.vue'

const props = defineProps<{
  /**
   * @param headline The headline to be displayed
   * @param text The text to be displayed
   */
  images: ImageItem[] | null
  about: string[] | null
  goal: string[] | null
  background: string[] | null
  results: string[] | null
}>()
</script>

<template>
  <div v-if="props.images" class="image-galleria-container">
    <ImageGalleria :images="props.images" />
  </div>
  <InfoComponent v-if="props.about" :headline="'About'" :text="props.about" />
  <InfoComponent v-if="props.goal" :headline="'Goal'" :text="props.goal" />
  <InfoComponent
    v-if="props.background"
    :headline="'Theoretical Background'"
    :text="props.background"
  />
  <InfoComponent v-if="props.results" :headline="'Results'" :text="props.results" />
</template>

<style scoped>
.image-galleria-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
