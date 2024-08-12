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
    command: () => window.open('https://github.com/Bussler/DSNeRF', '_blank'),
  },
  {
    label: 'Paper',
    icon: 'pi pi-fw pi-file',
    command: () =>
      window.open('/pdfs/3D_Machine_Learning_DSNERF_Project_Final_Report.pdf', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/horns/Horns_Basic.gif',
    thumbnailImageSrc: '/images/horns/Horns_Basic.gif',
    description: 'Horns scene encoded with positional encoding.',
    title: 'Positional Encoding',
  },
  {
    itemImageSrc: '/images/horns/Horns_Gauss.gif',
    thumbnailImageSrc: '/images/horns/Horns_Gauss.gif',
    description: 'Horns scene encoded with gauss encoding.',
    title: 'Gauss Encoding',
  },
  {
    itemImageSrc: '/images/horns/Horns_SINONE.gif',
    thumbnailImageSrc: '/images/horns/Horns_SINONE.gif',
    description: 'Horns scene encoded with sinone encoding.',
    title: 'SINONE Encoding',
  },
  {
    itemImageSrc: '/images/horns/Horns_SIREN.gif',
    thumbnailImageSrc: '/images/horns/Horns_SIREN.gif',
    description: 'Horns scene encoded with siren encoding.',
    title: 'SIREN Encoding',
  },
  {
    itemImageSrc: '/images/horns/Hotdog_Basic.gif',
    thumbnailImageSrc: '/images/horns/Hotdog_Basic.gif',
    description: 'Hotdog scene encoded with positional encoding.',
    title: 'Positional Encoding',
  },
  {
    itemImageSrc: '/images/horns/Hotdog_Gauss.gif',
    thumbnailImageSrc: '/images/horns/Hotdog_Gauss.gif',
    description: 'Hotdog scene encoded with gaussian encoding.',
    title: 'Gauss Encoding',
  },
])

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>Realtime capabilities of DSNeRF</template>
    <template #content>
      <ProjectInfoComponent
        :images="images"
        :about="[
          'Software Project for the TUM course “Machine Learning for 3D Geometry”',
          'Depth-supervised NeRF (DSNeRF) is a state of the art deep neural network method for implicit 3D scenes representation from multi-view inputs.',
          'Recent research has show that passing input points through high-frequency functions before feeding the data to the network enables the network to accurately depict highfrequency regions of a scene. We investigate the performance of different such embeddings on the quality of the final output. Specifically, we analyse gaussian fourier feature mappings, and approaches that leverage periodic activation functions like SIREN and SINONE.',
          'Furthermore, we want to examine the possibility to enhance DSNeRF’s real time capabilities by implementing the concepts of FastNeRF.',
        ]"
        :goal="[
          'The overall goal is to produce a DSNeRF based application that is more applicable to real world use by trying to get closer to realtime rendering performance, achieving higher quality reconstruction of difficult scenes and needing less viewpoints.',
        ]"
        :background="[
          'Neural networks are biased to learn lower frequency functions easier than higher frequency functions. Consequently, most scene representation networks, such as NeRF, have a hard time capturing the high frequency variations in color and geometry of a scene and thus produce blurry scene renderings. To counteract this issue, the authors of the original NeRF algorithm propose to leverage high frequency functions to map the original input to a higher dimensional space before passing it to the network. We are interested in comparing the quality of the Fourier feature mapping approaches of Positional Encoding and Gauss Mapping, as well as networks that mimic this high-frequency mapping by introducing periodic activation functions, like SIREN and SINONE.',
          'Gauss Mapping produces smoother renderings with fewer artifacts and captures the overall object shapes better than the original Positional Encoding. The periodic activation functions of SIREN and SINONE behave unstable during training in combination with DSNeRF and are unable to capture the original 3D scene well.',
          'FastNeRF proposes a network split that separates the original DSNeRF into two networks. This new network architecture requires a three-dimensional and a two-dimensional input instead of a five-dimensional one and thereby enables feasible caching. Since a volume renderer is able to fall back on the cache and does not have to query the network at rendering time, interactive rendering speeds at 30fps can be achieved.',
        ]"
        :results="null"
        :github="'https://github.com/Bussler/DSNeRF'"
        :paper="'/pdfs/3D_Machine_Learning_DSNERF_Project_Final_Report.pdf'"
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
