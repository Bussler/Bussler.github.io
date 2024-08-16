<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import { type ImageItem } from '@/components/common/ImageGalleria.vue'
import ProjectInfoComponent from '@/components/ProjectInfoComponent.vue'

const titlebar = useToolbarStore()

const toolbarComponents = [
  {
    label: 'zGitHub',
    icon: 'pi pi-fw pi-github',
    command: () =>
      window.open('https://github.com/Bussler/LudumDare55?tab=readme-ov-file', '_blank'),
  },
  {
    label: 'Itch-Io',
    icon: 'pi pi-fw pi-globe',
    command: () => window.open('https://maartenbussler.itch.io/gunmancer', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/gunmancer/GunmancerCover.png',
    thumbnailImageSrc: '/images/gunmancer/GunmancerCover.png',
    description: '',
    title: 'Start Menu',
  },
  {
    itemImageSrc: '/images/gunmancer/GunmancerGameplay.png',
    thumbnailImageSrc: '/images/gunmancer/GunmancerGameplay.png',
    description: '',
    title: 'Fight enemy hordes',
  },
  {
    itemImageSrc: '/images/gunmancer/GunmancerGameplay2.png',
    thumbnailImageSrc: '/images/gunmancer/GunmancerGameplay2.png',
    description: '',
    title: 'Summon powerful weapons',
  },
  {
    itemImageSrc: '/images/gunmancer/GunmancerMenu.png',
    thumbnailImageSrc: '/images/gunmancer/GunmancerMenu.png',
    description: '',
    title: 'Each summoned weapon has unique and random effects',
  },
])

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>Nowhere To Hide</template>
    <template #content>
      <ProjectInfoComponent
        :images="images"
        :about="[
          'Project for the Ludum Dare 55 Game Jam. The theme was `summoning`.',
          'Play as a Gunmancer, a gun-slinging wizard with the ability to summon weapons. Shoot enemies to get blood to draw summoning circles. If an enemy or a dropped item is in the summon circle, when you finish it, you summon a gun with effects depending on the enemies and items in it.',
          'The game is availible as a WebGL build on itch.io and as a Windows build on GitHub.',
        ]"
        :goal="null"
        :background="null"
        :results="null"
        :github="'https://github.com/Bussler/LudumDare55?tab=readme-ov-file'"
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
