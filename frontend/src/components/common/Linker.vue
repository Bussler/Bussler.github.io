<script setup lang="ts">
const props = defineProps<{
  /**
   * @param text The text to be displayed
   * @param reference The link to be opened
   * @param icon The icon to be displayed
   */
  text: string
  reference: string
  icon: string | null
}>()
</script>

<template>
  <a :href="props.reference" class="no-underline hover-text" target="_blank"
    ><i v-if="props.icon" :class="props.icon"></i>{{ props.text }}</a
  >
</template>

<style scoped>
a i {
  margin-right: 3px; /* Add some space between the icon and the text */
}

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
</style>
