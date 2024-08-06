<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import Linker from '@/components/common/Linker.vue'

const titlebar = useToolbarStore()

onMounted(async () => {
  titlebar.clearToolbarComponents()
})
</script>

<template>
  <Card>
    <template #title>Get in Touch</template>
    <template #content>
      <h2>Email</h2>
      <span><i class="pi pi-envelope"></i> maarten.bussler@gmail.com</span>

      <h2>Github</h2>
      <Linker
        text="github.com/Bussler"
        reference="https://github.com/Bussler"
        icon="pi pi-github"
      />

      <h2>Social</h2>
      <Linker
        text="LinkedIn: Maarten Bussler"
        reference="https://www.linkedin.com/in/maarten-bussler-0a4a21194/"
        icon="pi pi-linkedin"
      />
    </template>
  </Card>
</template>

<style scoped>
.no-underline {
  text-decoration: none; /* Remove underline from text */
  color: inherit; /* Inherit the color from the parent element */
}

span i {
  margin-right: 0px; /* Add some space between the icon and the text */
}

.hover-text {
  transition: color 0.3s ease; /* Smooth transition for color change */
}

.hover-text:hover {
  color: var(--primary-color-light); /* Change to your desired hover color */
}
</style>
