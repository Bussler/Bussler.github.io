<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import router from '@/router'
import PreviewComponent from '@/components/common/PreviewComponent.vue'

const titlebar = useToolbarStore()

onMounted(async () => {
  titlebar.clearToolbarComponents()
})
</script>

<template>
  <Card>
    <template #title>Software</template>
    <template #content>
      <PreviewComponent
        headline="Custom Reinforcement Learning"
        text="I developed an small game in Unity that works as an environment for a reinforcement learning agent to train and play in."
        image="/images/projectHunters/inference.gif"
        route="project-hunters"
      />

      <PreviewComponent
        headline="Master Thesis: SRN Compression"
        text="Software Project for my Master Thesis to research possibilities of compressing Scene Representation Networks with network pruning algorithms."
        image="/images/latent_feature_grid/Neurcomp_mhdp_100.png"
        route="latentfeaturegridcompression"
      />

      <PreviewComponent
        headline="Realtime capabilities of DSNeRF"
        text="Learn implicit scene representations with DsNRF and generate novel views from a sparse set of input images."
        image="/images/horns/Horns_Basic.gif"
        route="dsnerf"
      />

      <PreviewComponent
        headline="Vector Database LLM Chatbot"
        text="LLM to chat with your own documents with langchain, chromadb and models from huggingface!"
        image="/images/rag_chatbot/chatbot-example.png"
        route="ragchatbot"
      />

      <PreviewComponent
        headline="ARAP"
        text="Implementation of the As-Rigid-As-Possible Surface deformation algorithm by Sorkine and Alexa (2007)."
        image="/images/deformed/deformed3-1536x866.png"
        route="arap"
      />

      <PreviewComponent
        headline="Bachelor Thesis: TTHRESH"
        text="Project for my Bachelors Thesis. Implemented is an algorithm for efficient compression and decompression of volume data sets based on the TTHRESH-algorithm by R. Ballester-Ripoll."
        image="/images/tthresh/Bonsai-1024x682.png"
        route="tthresh"
      />

      <PreviewComponent
        headline="Python Sudoku Solver"
        text="Program to solve and generate Sudoku Problems with backtracking and learn GUI with pygame."
        image="/images/sodoku-solver/sod1.png"
        route="sodoku-solver"
      />

      <PreviewComponent
        headline="HPC: Abalone"
        text="Parallelization of a game-tree search algorithm for the game Abalone."
        image="/images/hpc-abalone/AbaloneStart.png"
        route="hpc-abalone"
      />
    </template>
  </Card>
</template>

<style scoped>
.panel-margin {
  margin-top: 3ch; /* Adjust the value as needed */
}

.info-container {
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: top;
  margin: 0 auto; /* Center horizontally */
}

.text {
  flex: 1 1 50%;
  padding-right: 0ch;
}

.text .headline {
  color: var(--primary-accent-color);
}

.image {
  flex: 1 1 50%;
  padding: 0px; /* Remove default padding */
}

.card-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover; /* Ensures the image covers the div while maintaining aspect ratio */
}
</style>
