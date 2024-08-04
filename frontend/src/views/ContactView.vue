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
    <template #title>Contact</template>
    <template #content> </template>
  </Card>
</template>
