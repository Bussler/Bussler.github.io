<script setup lang="ts">
const props = defineProps<{
  /**
   * @param headline The headline to be displayed
   * @param listItems The list items to be displayed
   */
  headline: string
  listItems: listItem[]
}>()

interface listItem {
  headline: string | null
  textItems: string[]
}
</script>

<template>
  <Card class="panel-margin">
    <template #content>
      <div class="info-container">
        <h2 class="headline">
          {{ props.headline }}
        </h2>
        <ul class="text">
          <div class="info-list-container">
            <div class="info-column" v-for="(list, index) in props.listItems" :key="index">
              <h3 v-if="list.headline">{{ list.headline }}</h3>
              <ul class="info-list">
                <li v-for="(item, lindex) in list.textItems" :key="lindex">{{ item }}</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.panel-margin {
  margin-top: 3ch; /* Adjust the value as needed */
}

.info-list-container {
  display: flex;
  justify-content: space-between; /* Distribute space between the lists */
  gap: 20px; /* Add space between the lists */
  width: 80%;
}

.info-column {
  flex: 1; /* Allow each column to take up equal space */
}

.info-list {
  flex: 1; /* Allow each list to take up equal space */
}

.info-list li {
  margin-bottom: 5px; /* Add space between list items */
}

.info-container {
  display: flex;
  align-items: baseline; /* Center items vertically */
}

.headline {
  flex: 1 1 30%; /* Take up one-third of the container */
  padding-right: 10px; /* Add some space between headline and text */
  color: var(--primary-accent-color); /* Set your desired text color */
}

.text {
  flex: 1 1 100%; /* Take up the remaining two-thirds of the container */
}

@media (max-width: 950px) {
  .info-container {
    flex-direction: column; /* Stack headline and text vertically */
    align-items: center; /* Center items horizontally */
  }

  .headline,
  .text {
    flex: 1 1 100%; /* Each takes up the full width of the container */
    padding-right: 0; /* Remove padding on small screens */
  }

  .text {
    margin-top: 15px; /* Add some space between headline and text */
  }

  .info-list-container {
    flex-direction: column; /* Stack columns vertically */
    align-items: baseline; /* Center columns horizontally */
  }

  .info-column {
    flex: 1 1 100%; /* Each column takes up the full width of the container */
    margin-bottom: 15px; /* Add some space between columns */
  }
}
</style>
