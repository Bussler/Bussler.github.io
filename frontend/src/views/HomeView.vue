<script setup lang="ts">
import { onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import router from '@/router'
import LinkCard from '@/components/common/LinkCard.vue'

const titlebar = useToolbarStore()

const toolbarComponents = [
  {
    label: 'Contact',
    icon: 'pi pi-fw pi-envelope',
    command: () => router.push({ name: 'contact' }),
  },
]

onMounted(async () => {
  titlebar.clearToolbarComponents()
  // titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card class="background-card">
    <template #title></template>
    <template #content>
      <div class="center-content">
        <h1>Hello there!</h1>
        <h4 class="limited-width">
          I am Maarten Bussler, a Computer Science & Games Engineering graduate from TUM, currently
          working in the R&D department at IABG.
        </h4>
      </div>
    </template>
  </Card>
  <Card>
    <template #title><h2 class="important-heading">New</h2></template>
    <template #content>
      <div class="card-container">
        <LinkCard
          link="latentfeaturegridcompression"
          title="SRN Compression"
          image="/images/latent_feature_grid/Neurcomp_mhdp_100.png"
        />
        <LinkCard link="dsnerf" title="DSNeRF" image="/images/horns/Horns_Basic.gif" />
        <LinkCard
          link="rag-chatbot"
          title="Vectorstorage LLM"
          image="/images/rag_chatbot/chatbot-example.png"
        />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.background-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/deformed/deformed3-upscaled.png');
  background-size: cover; /* Adjust to cover the entire card */
  background-position: center; /* Center the image */
  color: var(--primary-color-text); /* Optional: Adjust text color for better readability */
  height: 75vh; /* Set the desired height */
}

.background-card .center-content {
  text-align: center;
}

.limited-width {
  width: 30vw; /* 30% of the viewport width */
  margin: 0 auto; /* Center the element */
}

.card-container {
  display: flex;
  justify-content: space-between; /* Distribute space between cards */
  gap: 10px; /* Optional: Add gap between cards */
}

.card-container > Card {
  flex: 1; /* Make each card take equal space */
}

.important-heading {
  color: var(--primary-accent-color); /* Set your desired text color */
}
</style>
