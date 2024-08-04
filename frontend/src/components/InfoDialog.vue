<script setup lang="ts">
/**
 * Component dialog for displaying information
 */

defineProps<{
  /**
   * @param info The Info whose info is displayed
   * @param description The description of the Info
   */
  info: string
  description: string
}>()
const showDialog = defineModel<boolean>('showDialog', { required: true })
</script>

<template>
  <Dialog key="key" v-model:visible="showDialog" :draggable="false" modal>
    <template #header>
      <div class="flex flex-column">
        <span class="p-dialog-title" data-pc-section="title">{{ $props.info }}</span>
      </div>
    </template>
    <div id="container">
      <div class="flex flex-row align-items-center justify-content-between">
        <h4>{{ $props.description }}</h4>
      </div>
    </div>
  </Dialog>
</template>
