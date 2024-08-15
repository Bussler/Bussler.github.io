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
    command: () => window.open('https://github.com/GilgusMaximus/SemesterGameJam-W18', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/Games/treasurecave/treasureCave1.png',
    thumbnailImageSrc: '/images/Games/treasurecave/treasureCave1.png',
    description: '',
    title: 'Start Menu',
  },
  {
    itemImageSrc: '/images/Games/treasurecave/treasureCave4.png',
    thumbnailImageSrc: '/images/Games/treasurecave/treasureCave4.png',
    description: '',
    title: 'Scene selection',
  },
  {
    itemImageSrc: '/images/Games/treasurecave/treasureCave2.jpg',
    thumbnailImageSrc: '/images/Games/treasurecave/treasureCave2.jpg',
    description: '',
    title: 'Scanning for treasures',
  },
  {
    itemImageSrc: '/images/Games/treasurecave/treasureCave3.jpg',
    thumbnailImageSrc: '/images/Games/treasurecave/treasureCave3.jpg',
    description: '',
    title: 'Digging for treasures',
  },
])

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>Treasure Cave</template>
    <template #content>
      <ProjectInfoComponent
        :images="images"
        :about="[
          'Project for the TUM Semestergamejam 2018. After very positive positive feedback, we implemented additional mechanics (rising water, fire …) and levels for the game.',
          'Treasure Cave is an AR smartphone game that takes place in a mine. The player has to locate rare ores and diamonds in order to increase his wealth, but beware of deadly traps! ',
        ]"
        :goal="[
          'The idea of treasure cave was sparked from a recent lecture, in which various AR mechanics of smartphones, like gyroscopes and gesture recognition, were discussed. As the Unity Engine provides excellent support for these AR mechanics, we decided to experiment with game development for smartphones contrary to our previous projects that were solely based on the PC.',
        ]"
        :background="null"
        :results="null"
        :github="'https://github.com/GilgusMaximus/SemesterGameJam-W18'"
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
