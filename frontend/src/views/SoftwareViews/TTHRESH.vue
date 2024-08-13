<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import { type ImageItem } from '@/components/common/ImageGalleria.vue'
import ProjectInfoComponent from '@/components/ProjectInfoComponent.vue'

const titlebar = useToolbarStore()

const toolbarComponents = [
  {
    label: 'Github',
    icon: 'pi pi-fw pi-github',
    command: () => window.open('https://github.com/Bussler/bachelorTTHRESH', '_blank'),
  },
  {
    label: 'Paper',
    icon: 'pi pi-fw pi-file',
    command: () =>
      window.open('/pdfs/Bachelor_Thesis_Volume_Data_Compression_Maarten_Bussler.pdf', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/tthresh/Hybrid0.png',
    thumbnailImageSrc: '/images/tthresh/Hybrid0.png',
    description: '0% error, 24.578KB',
    title: 'Stagbeetle',
  },
  {
    itemImageSrc: '/images/tthresh/Hybrid01.png',
    thumbnailImageSrc: '/images/tthresh/Hybrid01.png',
    description: '0.03% error, 11.087KB',
    title: 'Stagbeetle',
  },
  {
    itemImageSrc: '/images/tthresh/Hybrid1.png',
    thumbnailImageSrc: '/images/tthresh/Hybrid1.png',
    description: 'additional truncation, 9.928KB',
    title: 'Stagbeetle',
  },
])

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>Bachelor Thesis: TTHRESH</template>
    <template #content>
      <ProjectInfoComponent
        :images="images"
        :about="[
          'Software Project for my Bachelor’s Thesis with the topic of volume data compression.',
          'Despite extensive research in the field of volume data compression, modern volume visualization faces the challenge to handle both memory and network bottlenecks when visualizing high resolution volume data at a smooth visual feedback rate. The implemented algorithm offers an efficient solution for compression and decompression of volume data while still providing high and smooth compression ratios on flexible target errors.',
        ]"
        :goal="[
          'The goal of the Bachelor’s Thesis is to further improve the TTHRESH compression algorithm by R. Ballester Ripoll, while preventing a drop in compression quality.',
        ]"
        :background="[
          'Tucker decomposition is a popular tensor tool for dimensionality reduction that approximates a given input volume data set and functions as a basis of TTHRESH. The algorithm then applies adaptive bit-plane coding followed up by run length encryption and arithmetic coding on the volume data and compresses the data by thresholding core coefficients and accuracy of less importance.',
        ]"
        :results="null"
        :github="'https://github.com/Bussler/bachelorTTHRESH'"
        :paper="'/pdfs/Bachelor_Thesis_Volume_Data_Compression_Maarten_Bussler.pdf'"
      />
    </template>
  </Card>
</template>

<style scoped>
.image-galleria-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.panel-margin {
  margin-top: 3ch; /* Adjust the value as needed */
}
</style>
