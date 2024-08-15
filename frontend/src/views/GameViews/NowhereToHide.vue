<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import { type ImageItem } from '@/components/common/ImageGalleria.vue'
import ProjectInfoComponent from '@/components/ProjectInfoComponent.vue'

const titlebar = useToolbarStore()

const toolbarComponents = [
  {
    label: 'Project Wiki',
    icon: 'pi pi-fw pi-folder',
    command: () =>
      window.open('https://collab.dvb.bayern/display/TUMgameslab2022/Team+DAMN', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/Games/nowheretohide/NWTHtitle.png',
    thumbnailImageSrc: '/images/Games/nowheretohide/NWTHtitle.png',
    description: '',
    title: 'Start Menu',
  },
  {
    itemImageSrc: '/images/Games/nowheretohide/NWTHcompass.png',
    thumbnailImageSrc: '/images/Games/nowheretohide/NWTHcompass.png',
    description: '',
    title: 'Dodge obstacles',
  },
  {
    itemImageSrc: '/images/Games/nowheretohide/NWTHitem1.png',
    thumbnailImageSrc: '/images/Games/nowheretohide/NWTHitem1.png',
    description: '',
    title: 'Escape from the labyrinth',
  },
  {
    itemImageSrc: '/images/Games/nowheretohide/NWTHEnd.png',
    thumbnailImageSrc: '/images/Games/nowheretohide/NWTHEnd.png',
    description: '',
    title: 'End Screen',
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
          'Final project for the “GamesLab” Master practical course of winter semester 2022.',
          'We designed “Nowhere To Hide” as a fast to pick up, casual mobile dungeon runner that instantly pulls players into a flow state. In the style of “Temple Run”, the core gameplay consists of crossing a randomly generated labyrinth, while evading the pursuing Slender Man. The player has to evade obstacles, orientate himself in the labyrinth, pick up items and perform various quick time events. ',
        ]"
        :goal="[
          'The goal of the the “GamesLab” Master practical course is to design, prototype, and develope a game to a given topic in teams of three to four people. In addition to fun gameplay or story, each game should implement a technical achievement as well as stunning visual effects.',
        ]"
        :background="null"
        :results="null"
        :github="'https://collab.dvb.bayern/display/TUMgameslab2022/Team+DAMN'"
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
