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
    command: () => window.open('https://github.com/Bussler/HPC-Abalone', '_blank'),
  },
  {
    label: 'Paper',
    icon: 'pi pi-fw pi-file',
    command: () => window.open('/pdfs/MSaS_Final_Assignment.pdf', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/hpc-abalone/AbaloneStart.png',
    thumbnailImageSrc: '/images/hpc-abalone/AbaloneStart.png',
    description: '',
    title: 'Abalone Starting Position',
  },
  {
    itemImageSrc: '/images/hpc-abalone/AbaloneMidgame.png',
    thumbnailImageSrc: '/images/hpc-abalone/AbaloneMidgame.png',
    description: '',
    title: 'Abalone Midgame Position',
  },
  {
    itemImageSrc: '/images/hpc-abalone/AbaloneEndgame.png',
    thumbnailImageSrc: '/images/hpc-abalone/AbaloneEndgame.png',
    description: '',
    title: 'Abalone Endgame Position',
  },
])

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>High Performance Computing (HPC): Abalone</template>
    <template #content>
      <ProjectInfoComponent
        :images="images"
        :about="[
          'Project for the TUM master’s course on high performance computing in the summer term 2021. Implemented is the Abalone game and a parallelized strategy to efficiently search the game tree and compute the next best move with the help of OpenMp.',
          'The general implementation for the Abalone game was given to us by the chair of Computer Architecture and Parallel Systems. Our own implementation is the parallelized game-tree search strategy.',
          'The implementation is based on the Alpha-Beta pruning search algorithm with additional optimization using parallelization, move caching, and iterative deepening.',
        ]"
        :goal="[
          'As part of a practical course from university, the main goal of this project was to get practical experience with parallelization concepts and popular libraries, such as OpenMp and MPI.',
        ]"
        :background="[
          'The theoretical background of the implemented parallelization strategies can be found in the attached report.',
        ]"
        :results="null"
        :github="'https://github.com/Bussler/HPC-Abalone'"
        :paper="'/pdfs/MSaS_Final_Assignment.pdf'"
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
