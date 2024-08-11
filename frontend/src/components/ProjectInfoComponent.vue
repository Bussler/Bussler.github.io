<script setup lang="ts">
import ImageGalleria, { type ImageItem } from '@/components/common/ImageGalleria.vue'
import InfoComponent from '@/components/common/InfoComponent.vue'
import Linker from '@/components/common/Linker.vue'

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
  github: string | null
  paper: string | null
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

  <Card class="card">
    <template #content>
      <div class="footnote-info">
        <Linker v-if="props.github" text="Github" :reference="props.github" icon="pi pi-github" />
        <Linker v-if="props.paper" text="Paper" :reference="props.paper" icon="pi pi-file" />
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
.card {
  margin-top: 3ch; /* Adjust the value as needed */
  background-color: var(--primary-color);
  color: var(--primary-color-text);
}
.footnote-info {
  display: flex;
  align-items: center; /* Center items vertically */
  justify-content: center;
  gap: 15px; /* Add space between the Linker and the span */
}
</style>
