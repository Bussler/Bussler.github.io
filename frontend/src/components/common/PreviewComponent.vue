<script setup lang="ts">
import router from '@/router'

const props = defineProps<{
  /**
   * @param link The link to be opened when the card is clicked
   * @param title The title to be displayed
   * @param image The image to be displayed
   */
  headline: string
  text: string
  image: string
  route: string
}>()
</script>

<template>
  <Card class="panel-margin">
    <template #content>
      <div class="info-container">
        <div class="text">
          <h2 class="headline">{{ props.headline }}</h2>
          <h4>{{ props.text }}</h4>
          <Button
            label="Take a look"
            severity="primary"
            @click="router.push({ name: props.route })"
          />
        </div>
        <ul class="image">
          <img :src="props.image" class="card-image" @click="router.push({ name: props.route })" />
        </ul>
      </div>
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
  object-fit: contain; /* Ensures the image covers the div while maintaining aspect ratio */
  cursor: pointer;
}
</style>
