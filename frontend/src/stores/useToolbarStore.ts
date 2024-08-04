// stores/useToolbarStore.ts
import { defineStore } from 'pinia'
import type { MenuItem } from 'primevue/menuitem'

export const useToolbarStore = defineStore('toolbar', {
  state: () => ({
    components: [] as MenuItem[],
  }),
  actions: {
    setToolbarComponents(components: MenuItem[]) {
      this.components = components
    },
    clearToolbarComponents() {
      this.components = []
    },
    updateComponentCommand(label: string, command: () => void) {
      const component = this.components.find((c) => c.label === label)
      if (component) {
        component.command = command
      }
    },
  },
})
