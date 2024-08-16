<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import router from '@/router'
import PreviewComponent from '@/components/common/PreviewComponent.vue'

const titlebar = useToolbarStore()

onMounted(async () => {
  titlebar.clearToolbarComponents()
})
</script>

<template>
  <Card>
    <template #title>Games</template>
    <template #content>
      <PreviewComponent
        headline="Gunmanacer"
        text="Gamejam project for the Ludum Dare 55. Play as a Gunmancer, a gun-slinging wizard with the ability to summon weapons."
        image="/images/gunmancer/GunmancerCover.png"
        route="gunmancer"
      />

      <PreviewComponent
        headline="Treasure Cave"
        text="Gamejam project with the goal to experiment with AR on smartphones."
        image="/images/Games/treasurecave/treasureCave1.png"
        route="treasure-cave"
      />

      <PreviewComponent
        headline="Nowhere to Hide"
        text="Make your way through the labyrinth, unlock secret passages and perform quick time events but beware the Slender Man!"
        image="/images/Games/nowheretohide/NWTHtitle.png"
        route="nowehere-to-hide"
      />

      <PreviewComponent
        headline="Voxelhell"
        text="Little bullethell gamejam project where space to maneuver is constantly changing."
        image="/images/Games/voxelhell/VoxelhellCover.png"
        route="voxelhell"
      />

      <PreviewComponent
        headline="The Bee'nDing of Insect"
        text="Lively Roguelike Shoot ‘Em Up inspired by “The Binding of Isaac”."
        image="/images/Games/beendingofisaac/beending-of-insect.png"
        route="the-beending-of-insect"
      />
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
  object-fit: cover; /* Ensures the image covers the div while maintaining aspect ratio */
}
</style>
