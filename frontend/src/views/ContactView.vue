<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import InfoDialog from '@/components/InfoComponent.vue'

const titlebar = useToolbarStore()

const showInfoDialog = ref(false)

const loremIpsumText = ref(
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
)

function showInformation() {
  showInfoDialog.value = true
}

onMounted(async () => {
  titlebar.clearToolbarComponents()
})
</script>

<template>
  <Card>
    <template #title>Get in Touch</template>
    <template #content>

        <h2>Email</h2>
        <span><i class="pi pi-inbox"></i> maarten.bussler@gmail.com</span>

        <h2>Github</h2>
        <a href="https://github.com/Bussler" class="no-underline" target="_blank" rel="noopener noreferrer">
        <span class="hover-text"><i class="pi pi-github"></i> github.com/Bussler</span>
        </a>

        <h2>Social</h2>
        <a href="https://www.linkedin.com/in/maarten-bussler-0a4a21194/" class="no-underline" target="_blank" rel="noopener noreferrer">
        <span class="hover-text"><i class="pi pi-linkedin"></i> LinkedIn: Maarten Bussler</span>
        </a>

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
