<script setup lang="ts">
import ToolBar from '@/components/ToolBar.vue'
import SideMenu from '@/components/SideMenu.vue'
import Toast from 'primevue/toast'
import { RouterView } from 'vue-router'
</script>

<template>
  <SideMenu />

  <div class="content-wapper">
    <div class="main">
      <div class="main-container px-5 pt-3">
        <ToolBar />
        <RouterView />
      </div>
      <header>
        <Toast />
      </header>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-wapper {
  transition: margin-left 0.3s;
  margin-left: 250px;
  display: flex;

  .main {
    display: flex;
    flex-direction: column-reverse;
    flex-grow: 1;
    flex-shrink: 0;
    height: 100vh;
    max-width: 100%;
    min-width: 420px;
    width: 0;

    .main-container {
      display: block;
      height: 100%;
      // overflow-y: auto;
      width: 100%;
    }
  }
}

/* Media query for small screens */
@media (max-width: 950px) {
  .content-wapper {
    margin-left: 110px;
  }
}
</style>
