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
    command: () =>
      window.open('https://github.com/Bussler/LudumDare2018-RunningOutOfSpace', '_blank'),
  },
  {
    label: 'Itch-Io Download',
    icon: 'pi pi-fw pi-globe',
    command: () => window.open('https://gilgusmaximus.itch.io/voxelhell', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/Games/voxelhell/VoxelhellCover.png',
    thumbnailImageSrc: 'frontend/public/images/Games/voxelhell/VoxelhellCover.png',
    description: '',
    title: 'Cover',
  },
  {
    itemImageSrc: '/images/Games/voxelhell/voxelhell1.png',
    thumbnailImageSrc: '/images/Games/voxelhell/voxelhell1.png',
    description: '',
    title: 'Gameplay',
  },
  {
    itemImageSrc: '/images/Games/voxelhell/voxelhell2.png',
    thumbnailImageSrc: '/images/Games/voxelhell/voxelhell2.png',
    description: '',
    title: 'Gameplay',
  },
])

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>Voxelhell</template>
    <template #content>
      <ProjectInfoComponent
        :images="images"
        :about="[
          'Project for the 2018 Ludum Dare Gamejam. Voxelhell is a bullethell topdown arena shooter, in which the player has to hunt for the highscore. Numerous enemy types and different weapons are implemented. The game offers a dynamic difficulty curve with random and intensifying enemy waves as well as modifications of the arena by meteor impacts.',
        ]"
        :goal="[
          'The topic of the Gamejam was “Running out of space”, which we interpreted as gradually shrinking the game world. We implemented this feature by developing Voxelhll as a bullethell arena game, in which randomly spawned meteors are occupying the players space little by little.',
        ]"
        :background="null"
        :results="null"
        :github="'https://github.com/Bussler/LudumDare2018-RunningOutOfSpace'"
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
