<script setup lang="ts">
const props = defineProps<{
  /**
   * @param headline The headline to be displayed
   * @param text The text to be displayed
   */
  headline: string
  text: string[]
}>()
</script>

<template>
  <Card class="panel-margin">
    <template #content>
      <div class="info-container">
        <h2 class="headline">
          {{ props.headline }}
        </h2>
        <ul class="text">
          <li v-for="(item, index) in props.text" :key="index">
            {{ item }}
          </li>
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
  align-items: baseline; /* Center items vertically */
  width: 80%;
}

.headline {
  flex: 1 1 35.5%; /* Take up one-third of the container */
  padding-right: 10px; /* Add some space between headline and text */
  color: var(--primary-accent-color); /* Set your desired text color */
}

.text {
  flex: 1 1 75%; /* Take up the remaining two-thirds of the container */
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove default padding */
}

.text li {
  margin-bottom: 15px; /* Add space between list items */
}
</style>
