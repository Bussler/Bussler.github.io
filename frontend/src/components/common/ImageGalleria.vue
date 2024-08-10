<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'

const props = defineProps<{
  /**
   * @param images The images to be displayed
   */
  images: imageItem[]
}>()

interface imageItem {
  itemImageSrc: string | null
  thumbnailImageSrc: string | null
  description: string | null
  title: string | null
}

const galleria = ref()
const activeIndex = ref(0)
const showThumbnails = ref(false)
const fullScreen = ref(false)

const fullScreenIcon = computed(() => {
  return `pi ${fullScreen.value ? 'pi-window-minimize' : 'pi-window-maximize'}`
})

const onThumbnailButtonClick = () => {
  showThumbnails.value = !showThumbnails.value
}

const responsiveOptions = ref([
  {
    breakpoint: '1500px',
    numVisible: 4,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
  },
])

const toggleFullScreen = () => {
  if (fullScreen.value) {
    closeFullScreen()
  } else {
    openFullScreen()
  }
}
const onFullScreenChange = () => {
  fullScreen.value = !fullScreen.value
}
const openFullScreen = () => {
  let elem = galleria.value.$el

  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen()
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen()
  }
}
const closeFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
    // } else if (document.mozCancelFullScreen) {
    //   document.mozCancelFullScreen()
    // } else if (document.webkitExitFullscreen) {
    //   document.webkitExitFullscreen()
    // } else if (document.msExitFullscreen) {
    //   document.msExitFullscreen()
  }
}
const bindDocumentListeners = () => {
  document.addEventListener('fullscreenchange', onFullScreenChange)
  document.addEventListener('mozfullscreenchange', onFullScreenChange)
  document.addEventListener('webkitfullscreenchange', onFullScreenChange)
  document.addEventListener('msfullscreenchange', onFullScreenChange)
}
const unbindDocumentListeners = () => {
  document.removeEventListener('fullscreenchange', onFullScreenChange)
  document.removeEventListener('mozfullscreenchange', onFullScreenChange)
  document.removeEventListener('webkitfullscreenchange', onFullScreenChange)
  document.removeEventListener('msfullscreenchange', onFullScreenChange)
}

onMounted(async () => {
  bindDocumentListeners()
})
</script>

<template>
  <Galleria
    ref="galleria"
    v-model:activeIndex="activeIndex"
    :value="props.images"
    :numVisible="5"
    containerStyle="max-width: 900px"
    :showThumbnails="showThumbnails"
    :showItemNavigators="true"
    :circular="true"
    :transitionInterval="3000"
    :responsiveOptions="responsiveOptions"
    :pt="{
      root: {
        class: [{ 'flex flex-column': fullScreen }],
      },
      content: {
        class: ['relative', { 'flex-1 justify-content-center': fullScreen }],
      },

      thumbnailwrapper: 'absolute w-full left-0 bottom-0',
    }"
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item.itemImageSrc"
        :alt="slotProps.item.description"
        :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]"
        @click="toggleFullScreen"
      />
    </template>
    <template #thumbnail="slotProps">
      <img
        :src="slotProps.item.thumbnailImageSrc"
        :alt="slotProps.item.alt"
        style="width: 90px; height: 90px; object-fit: cover"
      />
    </template>
    <template #footer>
      <div class="flex align-items-center bg-black-alpha-90 text-white">
        <Button
          icon="pi pi-list"
          @click="onThumbnailButtonClick"
          :pt="{
            root: {
              class: 'border-none border-noround hover:bg-white-alpha-10 text-white',
              style: 'background: transparent',
            },
          }"
        />
        <span v-if="props.images" class="title-container">
          <span class="text-sm p-3">{{ activeIndex + 1 }}/{{ props.images.length }}</span>
          <span class="font-bold text-sm p-3">{{ props.images[activeIndex].title }}</span>
          <span class="text-sm p-3">{{ props.images[activeIndex].description }}</span>
        </span>
        <Button
          :icon="fullScreenIcon"
          @click="toggleFullScreen"
          :pt="{
            root: {
              class: 'border-none border-noround ml-auto hover:bg-white-alpha-10 text-white',
              style: 'background: transparent',
            },
          }"
        />
      </div>
    </template>
  </Galleria>
</template>

<style scoped></style>
