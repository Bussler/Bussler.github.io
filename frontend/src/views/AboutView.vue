<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import InfoDialog from '@/components/InfoComponent.vue'
import router from '@/router'

const titlebar = useToolbarStore()

const toolbarComponents = [
  {
    label: 'Contact',
    icon: 'pi pi-fw pi-envelope',
    command: () => router.push({ name: 'contact' }),
  },
]

const showInfoDialog = ref(false)

const loremIpsumText = ref(
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
)

function showInformation() {
  showInfoDialog.value = true
}

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>About Me</template>
    <template #content>
      <div class="about-container">
        <img src="/images/profile_picture.jpg" alt="Maarten Bussler" class="about-image">
        <div class="about-text">
          <span>Hey there! I am Maarten Bussler, a Computer Science & Games Engineering graduate from TUM, currently working in the R&D department at IABG.</span>
          <br>
          <span>I often participate in Gamejams and other local meetups and am interested in the topics of computer vision and machine learning.</span>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.about-container {
  display: flex;
  align-items: center; /* Center items vertically */
  gap: 20px; /* Add space between the image and text */
  flex-wrap: wrap; 
}

.about-image {
  width: 100%; /* Set the image width to 100% of its container */
  max-width: 350px;
  height: auto; /* Maintain the aspect ratio */
  border-radius:30%; /* Optional: Make the image circular */
}

.about-text {
  flex: 1; /* Allow the text to take up the remaining space */
}
</style>