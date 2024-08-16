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
    command: () => window.open('https://github.com/Bussler/ProjectHunters', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/projectHunters/inference.gif',
    thumbnailImageSrc: '/images/projectHunters/inference.gif',
    description: 'Inference of the trained agent in the mock environment.',
    title: 'Mock Environment',
  },
  {
    itemImageSrc: '/images/projectHunters/Gameplay.PNG',
    thumbnailImageSrc: '/images/projectHunters/Gameplay.PNG',
    description: 'Inference of the trained agent in Unity.',
    title: 'Gameplay in Unity',
  },
])

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>Project Hunters</template>
    <template #content>
      <ProjectInfoComponent
        :images="images"
        :about="[
          'This project combines my interests in deep reinforcement learning with game development.',
          'For this I developed an small game in Unity that works as an environment for the agent to play in. I then created a custom gym environment that relays observations and agent action to and from the Unity environment via UDP Sockets.',
          'Training is done with rllib, an open source library for reinforcement learning. To speed up training I created a script-abstraction of the Unity Environment that mocks the real Unity environment. The real Unity environment is then used by the trained agent during inference.',
        ]"
        :goal="[
          'The goal of this project is to train a deep reinforcement agent (PPO) on a custom top down VampireSurvivors Clone. Besides being an interesting problem, this could e.g. be used for the development of custom npc behaviours.',
        ]"
        :background="null"
        :results="[
          'The PPO agent is able to learn basic evasive behaviours of incoming enemies relatively quickly after about 1000 distributed training iterations (1h of training). The agent is able to successfully evade enemies, until they die automatically.',
        ]"
        :github="'https://github.com/Bussler/ProjectHunters'"
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
