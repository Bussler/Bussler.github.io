<script setup lang="ts">
import { computed } from 'vue'
import type { MenuItem } from 'primevue/menuitem'
import { menu, currentPage } from '@/router'

const isActive = (item: MenuItem) => computed(() => item.key === currentPage.value)
</script>

<template>
  <div class="card">
    <Menubar :model="menu" class="sidebar-container">
      <template #start>
        <span class="sidebar-header" style="color: white">Maarten Bussler</span>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <div :class="{ active: isActive(item).value }">
          <a v-ripple class="flex items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <i
              v-if="hasSubmenu"
              :class="[
                'pi pi-angle-down',
                { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
              ]"
            ></i>
          </a>
        </div>
      </template>
      <template #end>
        <div class="sidebar-footer">
          <img alt="Vue logo" class="small-logo" src="/LogoOwl.png" />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-container {
  background-color: var(--primary-color);
  color: var(--primary-color-lighter-text);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 95px;
}

.active {
  background-color: var(--primary-color-darker);
}

.sidebar-footer {
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  //   background-color: var(--primary-color-darker);

  .small-logo {
    margin-left: auto;
    width: 15%;
    height: auto;
  }
}
</style>
