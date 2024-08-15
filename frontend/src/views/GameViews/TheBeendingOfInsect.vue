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
    command: () => window.open('https://github.com/Bussler/MV-Gamejam', '_blank'),
  },
  {
    label: 'Itch-Io Download',
    icon: 'pi pi-fw pi-globe',
    command: () =>
      window.open('https://gamedevploration.itch.io/the-bee-n-ding-of-insect-mv-gamejam', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/Games/beendingofisaac/bee1.png',
    thumbnailImageSrc: '/images/Games/beendingofisaac/bee1.png',
    description: '',
    title: 'Cover',
  },
  {
    itemImageSrc: '/images/Games/beendingofisaac/bee2.png',
    thumbnailImageSrc: '/images/Games/beendingofisaac/bee2.png',
    description: '',
    title: 'Gameplay',
  },
  {
    itemImageSrc: '/images/Games/beendingofisaac/bee3.png',
    thumbnailImageSrc: '/images/Games/beendingofisaac/bee3.png',
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
    <template #title>The Beending of Insect</template>
    <template #content>
      <ProjectInfoComponent
        :images="images"
        :about="[
          'Gamejam project for the MV Gamejam 2020. The Bee’nding of Insect is a Roguelike Shoot’em Up inspired by “The Binding of Isaac”. The player has to explore the vast dungeons, pollinate flowers in order to unlock upgrades and overcome challenging enemies. With multiple different regions, randomly generated dungeons, a wide variety of enemies and upgrades each run offers a fresh experience.',
        ]"
        :goal="[
          'The topic of the Gamejam was “Bees” with the optional challenges to incorporate an Easter Egg into the game and to show how important bees are for our daily life. With the limited time of the Gamejam, we settled for the idea of a randomly generated dungeon fighting game that centers it’s upgrade mechanic around the typical and for our flora most important feature of bees: the pollination of various plants.',
        ]"
        :background="null"
        :results="null"
        :github="'https://github.com/Bussler/MV-Gamejam'"
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
