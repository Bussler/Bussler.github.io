<script setup lang="ts">
import { onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import router from '@/router'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Panel from 'primevue/panel'

const titlebar = useToolbarStore()

const toolbarComponents = [
  {
    label: 'Contact',
    icon: 'pi pi-fw pi-envelope',
    command: () => router.push({ name: 'contact' }),
  },
]

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
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
      <span>I use this site to showcase my projects that amassed over the years.</span>

      <div class="panel-margin">
        <h2 class="important-heading">New</h2>
        <div class="card-container">
          <router-link to="/contact" class="no-underline">
            <Card class="see-through-panel">
              <template #title>SRN Compression</template>
              <template #content>
                <img
                  src="/images/deformed/deformed3-1536x866.png"
                  class="card-image"
                  alt="Image 3"
                />
              </template>
            </Card>
          </router-link>
          <router-link to="/contact" class="no-underline">
            <Card class="see-through-panel">
              <template #title>DSNeRF</template>
              <template #content>
                <img
                  src="/images/deformed/deformed3-1536x866.png"
                  class="card-image"
                  alt="Image 3"
                />
              </template>
            </Card>
          </router-link>
          <router-link to="/contact" class="no-underline">
            <Card class="see-through-panel">
              <template #title>Vectorstorage LLM</template>
              <template #content>
                <img
                  src="/images/deformed/deformed3-1536x866.png"
                  class="card-image"
                  alt="Image 3"
                />
              </template>
            </Card>
          </router-link>
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
  height: 90vh; /* Set the desired height */
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

.see-through-panel {
  background-color: rgb(255, 255, 255, 0.1); /* White background with 50% opacity */
  color: var(--primary-color-text);
}

.card-image {
  width: 100%; /* Set the image width to 100% of the card's width */
  height: auto; /* Maintain the aspect ratio */
}

.important-heading {
  color: var(--primary-accent-color); /* Set your desired text color */
}

.no-underline {
  text-decoration: none; /* Remove underline from text */
  color: inherit; /* Inherit the color from the parent element */
}
</style>
