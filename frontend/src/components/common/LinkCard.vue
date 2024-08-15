<script setup lang="ts">
const props = defineProps<{
  /**
   * @param link The link to be opened when the card is clicked
   * @param title The title to be displayed
   * @param image The image to be displayed
   */
  link: string
  title: string
  image: string
}>()
</script>

<template>
  <router-link :to="props.link" class="no-underline">
    <Card class="see-through-panel card-quarter-width">
      <template #title>
        <span class="hover-text">{{ props.title }}</span>
      </template>
      <template #content>
        <img :src="props.image" class="card-image" alt="Image 3" />
      </template>
    </Card>
  </router-link>
</template>

<style scoped>
.hover-text {
  transition: color 0.3s ease; /* Smooth transition for color change */
}

.hover-text:hover {
  color: var(--primary-color-light); /* Change to your desired hover color */
}

.no-underline {
  text-decoration: none; /* Remove underline from text */
  color: inherit; /* Inherit the color from the parent element */
}

.see-through-panel {
  background-color: rgb(255, 255, 255, 0.1); /* White background with 50% opacity */
}

.card-quarter-width {
  width: 25vw; /* Set the width to 1/4 of the viewport width */
}

.card-image {
  width: 100%; /* Set the image width to 100% of the card's width */
  height: auto; /* Maintain the aspect ratio */
}
</style>
