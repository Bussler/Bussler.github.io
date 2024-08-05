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
    <template #title>Hello there!</template>
    <template #content>
      <span
        >I am Maarten Bussler, a Computer Science & Games Engineering graduate from the Technical
        University Munich.</span
      >
      <br />
      <span
        >I use this site to showcase my projects that amassed over the years. If you are interested
        in something, feel free to contact me 😄</span
      >

      <div class="panel-margin">
        <h2 class="important-heading">New</h2>
        <div class="card-container">
          <LinkCard
            link="contact"
            title="SRN Compression"
            image="/images/deformed/deformed3-1536x866.png"
          />
          <LinkCard link="contact" title="DSNeRF" image="/images/deformed/deformed3-1536x866.png" />
          <LinkCard
            link="contact"
            title="Vectorstorage LLM"
            image="/images/deformed/deformed3-1536x866.png"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.background-card {
  background-image: url('/images/deformed/deformed3-1536x866.png');
  background-size: cover; /* Adjust to cover the entire card */
  background-position: center; /* Center the image */
  color: var(--primary-color-text); /* Optional: Adjust text color for better readability */
  height: 96.5vh; /* Set the desired height */
}

.panel-margin {
  margin-top: 4ch; /* Adjust the value as needed */
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
