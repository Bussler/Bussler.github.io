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
    command: () => window.open('https://github.com/Bussler/PythonSodokuSolver', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/sodoku-solver/sod1.png',
    thumbnailImageSrc: '/images/sodoku-solver/sod1.png',
    description: '',
    title: 'Sodoku Solver',
  },
  {
    itemImageSrc: '/images/sodoku-solver/sod4.png',
    thumbnailImageSrc: '/images/sodoku-solver/sod4.png',
    description: 'Progress of solving.',
    title: 'Sodoku Solver',
  },
  {
    itemImageSrc: '/images/sodoku-solver/sod3.png',
    thumbnailImageSrc: '/images/sodoku-solver/sod3.png',
    description: 'Parse sodoku state.',
    title: 'Sodoku Solver',
  },
])

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>Python Sudoku Solver</template>
    <template #content>
      <ProjectInfoComponent
        :images="images"
        :about="[
          'A simple program that generates solutions to the famous Sudoku games with the help of recursive backtracking. The user can either play the Sudoku – make notes and place numbers to submit a solution, or generate and show the corresponding solution in one go.',
          'A sample Sudoku problem for solving comes with the project. Own Sudoku Problems have to be converted to .csv files (like shown in the sample file) and can then be imported. Furthermore, the program can also create random Sudoku problems.',
        ]"
        :goal="[
          'The goal of this project was to experiment with the python programming language and learn how to create simply GUIs with the pygame library.',
        ]"
        :background="null"
        :results="null"
        :github="'https://github.com/Bussler/PythonSodokuSolver'"
        :paper="null"
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
