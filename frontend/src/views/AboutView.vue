<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import router from '@/router'
import Linker from '@/components/common/Linker.vue'
import InfoComponent from '@/components/common/InfoComponent.vue'
import InfoListComponent from '@/components/common/InfoListComponent.vue'

const titlebar = useToolbarStore()

const toolbarComponents = [
  {
    label: 'Contact',
    icon: 'pi pi-fw pi-envelope',
    command: () => router.push({ name: 'contact' }),
  },
]

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>About Me</template>
    <template #content>
      <div class="about-container">
        <img src="/images/profile_picture.jpg" alt="Maarten Bussler" class="about-image" />
        <div class="about-text">
          <span
            >Hey there! I am Maarten Bussler, a Computer Science & Games Engineering graduate from
            TUM, currently working in the R&D department at IABG.</span
          >
          <br />
          <span
            >I often participate in Gamejams and other local meetups and am interested in the topics
            of computer vision and machine learning.</span
          >

          <div class="interests-container panel-margin-small">
            <div class="interests-column">
              <h3>Bio</h3>
              <span>I grew up in Cuxhaven, northern Germany. </span>
              <div class="extended-space"></div>
              <span
                >In highschool, I developed an interest for programming and computer science. After
                the Abitur, I moved to Munich in order to study Informatics with a focus on Games
                Engineering at the TUM.</span
              >
              <div class="extended-space"></div>
              <span
                >While at TUM, I became increasingly engaged in the exploration of integrating
                machine learning with computer vision tasks.</span
              >
            </div>
            <div class="interests-column">
              <h3>CV</h3>
              <Linker
                text="Curriculum Vitae Maarten Bussler"
                reference="/pdfs/CVMaartenBussler.pdf"
                icon="pi pi-paperclip"
              />
            </div>
          </div>
        </div>
      </div>

      <InfoListComponent
        headline="Interests"
        :list-items="[
          {
            headline: 'Computer Science',
            textItems: [
              'Machine Learning',
              'Computer Vision',
              'Visual data analytics and data visualization, especially the possibilities of volume data',
              'Efficient and parallel programming',
              'Exploring and testing new technologies, attending Hackathons',
            ],
          },
          { headline: 'Freetime', textItems: ['Guitar', 'Tennis', 'Bouldering'] },
        ]"
      />

      <InfoListComponent
        headline="Technical Skills"
        :list-items="[
          {
            headline: '',
            textItems: [
              'Python, Pytorch',
              'C/ C++',
              'C#',
              'Fullstack (Vuejs, Fastapi, Sqalchemy)',
              'Docker, Kubernetes',
              'Unity Game Development',
              'Autodesk 3d',
            ],
          },
        ]"
      />

    </template>
  </Card>
</template>

<style scoped>
.about-container {
  display: flex;
  align-items: center; /* Center items vertically */
  gap: 20px; /* Add space between the image and text */
  flex-wrap: wrap;
}

.extended-space {
  margin: 15px 0; /* Adjust the margin to extend the space */
}

.about-image {
  width: 100%; /* Set the image width to 100% of its container */
  max-width: 300px;
  height: auto; /* Maintain the aspect ratio */
  border-radius: 30%; /* Optional: Make the image circular */
}

.about-text {
  flex: 1; /* Allow the text to take up the remaining space */
}

a i {
  margin-right: 3px; /* Add some space between the icon and the text */
}

.panel-margin {
  margin-top: 3ch; /* Adjust the value as needed */
}

.panel-margin-small {
  margin-top: 2ch; /* Adjust the value as needed */
}

.important-heading {
  color: var(--primary-accent-color); /* Set your desired text color */
}

.interests-container {
  display: flex;
  justify-content: space-between; /* Distribute space between the lists */
  gap: 20px; /* Add space between the lists */
}

.interests-column {
  flex: 1; /* Allow each column to take up equal space */
}

.hover-text {
  transition: color 0.3s ease; /* Smooth transition for color change */
}

.hover-text:hover {
  color: var(--primary-color-light); /* Change to your desired hover color */
}

.no-underline {
  text-decoration: none; /* Remove underline from text */
  color: inherit; /* Inherit the color from the parent element */
}
</style>
