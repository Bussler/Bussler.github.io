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
    command: () => window.open('https://github.com/Bussler/RL_With_Delayed_Reward', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/rl-delayed-reward/result_ppo_with_lstm.gif',
    thumbnailImageSrc: '/images/rl-delayed-reward/result_ppo_with_lstm.gif',
    description:
      'LSTM integration in value function showing better temporal understanding and target prioritization',
    title: 'LSTM Integration',
  },
  {
    itemImageSrc: '/images/rl-delayed-reward/result_ppo_no_lstm.gif',
    thumbnailImageSrc: '/images/rl-delayed-reward/result_ppo_no_lstm.gif',
    description: 'Traditional feedforward networks for both policy and value functions',
    title: 'Traditional Feedforward Networks',
  },
  {
    itemImageSrc: '/images/rl-delayed-reward/result_urgency_bonus.gif',
    thumbnailImageSrc: '/images/rl-delayed-reward/result_urgency_bonus.gif',
    description: 'Agent trained with intermediate urgency bonuses demonstrating improved targeting',
    title: 'Urgency Bonuses',
  },
  {
    itemImageSrc: '/images/rl-delayed-reward/result_only_completion.gif',
    thumbnailImageSrc: '/images/rl-delayed-reward/result_only_completion.gif',
    description:
      'Agent trained with purely delayed rewards showing slower convergence and suboptimal target prioritization',
    title: 'Purely Delayed Rewards',
  },
])

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>RL Delayed Reward</template>
    <template #content>
      <ProjectInfoComponent
        :images="images"
        :about="[
          `This project investigates reinforcement learning in environments with delayed rewards through a 3D target-catching simulation.`,
          `The experiments demonstrate that traditional delayed reward structures significantly hinder learning performance, while introducing intermediate reward signals and LSTM-enhanced value functions dramatically improves training convergence and agent effectiveness.`,
          `The simulation environment is implemented in Rust for performance optimization with a Python interface for RL training.`,
        ]"
        :goal="[
          'Explore the challenges of delayed rewards in reinforcement learning and practice Rust development.',
          'Evaluate the impact of intermediate reward signals on learning efficiency.',
          'Assess the benefits of LSTM networks in handling temporal dependencies within RL agents.',
        ]"
        :background="[
          `The simulation environment consists of:`,
          `- A 3D free-moving player agent that can navigate in all directions`,
          `- Multiple enemy targets with predefined velocities or trajectory functions`,
          `- Sparse reward structure where rewards are only given upon target capture or episode completion`,
          `- Time pressure component where targets may expire if not caught within their flight time`,
        ]"
        :results="[
          `A more thorough analysis of the results can be found in the project's GitHub repository.`,
          `In summary, the combination of intermediate rewards and LSTM-enhanced value functions outperformed the baseline delayed reward structure resulted in a faster and more stable training convergence. These results highlight the importance of:`,
          `1. Reward Function Design`,
          `Delayed vs. Intermediate Rewards: The experiments demonstrate that purely delayed reward structures hinder learning performance. Introducing intermediate reward signals showed faster convergence and higher final performance compared to the delayed-only baseline.`,
          `2. Network Architecture Impact`,
          `Incorporating Long Short-Term Memory (LSTM) networks into the value function of the Proximal Policy Optimization (PPO) algorithm yielded faster policy convergence and training acceleration:`,
        ]"
        :github="'https://github.com/Bussler/RL_With_Delayed_Reward'"
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
