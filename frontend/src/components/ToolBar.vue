<script setup lang="ts">
import { useToolbarStore } from '@/stores/useToolbarStore'
import Button from 'primevue/button'
import type { MenuItem } from 'primevue/menuitem'

const toolbar = useToolbarStore()

function getLabel(item: MenuItem) {
  return typeof item.label === 'string' ? item.label : 'Button'
}
</script>

<template>
  <div v-if="toolbar.components.length > 0" class="toolbar mb-3">
    <div v-if="toolbar.components" class="toolbar-actions gap-3">
      <Button
        v-for="(item, index) in toolbar.components"
        :key="index"
        :label="getLabel(item)"
        :icon="item.icon"
        severity="primary"
        @click="item.command"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  display: flex;

  .toolbar-actions {
    align-items: center;
    display: flex;

    button {
      min-width: 110px;
    }

    vertical-align: middle;

    .button-group {
      button {
        margin-right: 1rem;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  button {
    min-width: 70px;
  }
}
</style>
