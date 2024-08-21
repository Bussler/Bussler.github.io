<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import router from '@/router'
import Linker from '@/components/common/Linker.vue'
import InfoListComponent from '@/components/common/InfoListComponent.vue'
import InfoComponent from '@/components/common/InfoComponent.vue'

const titlebar = useToolbarStore()

const toolbarComponents = [
  {
    label: 'Contact',
    icon: 'pi pi-fw pi-envelope',
    command: () => router.push({ name: 'contact' }),
  },
]

onMounted(async () => {
  titlebar.clearToolbarComponents()
  // titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>About Me</template>
    <template #content>
      <div class="about-container">
        <img src="/images/profile_picture.jpg" alt="Maarten Bussler" class="about-image" />
        <div class="about-text">
          <h2>Hey there!</h2>
          <h4>
            I am Maarten Bussler, a Computer Science & Games Engineering graduate from TUM,
            currently working in the R&D department at IABG.
          </h4>
          <h4>
            I often participate in Gamejams and other local meetups and am interested in the topics
            of simulation development and machine learning.
          </h4>
          <h4>
            I use this site to showcase my projects that amassed over the years. If you are
            interested in something, feel free to contact me 😄
          </h4>
          <div class="contact-info">
            <Linker
              text="Curriculum Vitae Maarten Bussler"
              reference="/pdfs/CVMaartenBussler.pdf"
              icon="pi pi-paperclip"
            />
            <span><i class="pi pi-envelope"></i> maarten.bussler@gmail.com</span>
          </div>
        </div>
      </div>

      <InfoComponent
        headline="Bio"
        :text="[
          'I grew up in Cuxhaven, northern Germany.',
          'During highschool, I developed an interest in programming and computer science. After the Abitur, I moved to Munich to study Informatics with a focus on Games Engineering at the TUM.',
          'While at TUM, I became increasingly engaged in the exploration of integrating machine learning with computer vision tasks. My studies culminated in a thesis on the topic of efficient representation and compression of volumentric scene data using neural networks.',
          'After university, I began working at the Innovationszentrum of IABG, where I focus on simulation and reinforcement learning topics.',
        ]"
      />

      <InfoListComponent
        headline="Interests"
        :list-items="[
          {
            headline: 'Computer Science',
            textItems: [
              'Deep Machine Learning',
              'Game/ Simulation Development',
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.about-image {
  max-width: 300px;
  width: 100%; /* Set the image width to 100% of its container */
  margin-right: 20px;
  height: auto; /* Maintain the aspect ratio */
  border-radius: 30%; /* Optional: Make the image circular */
}

.about-text {
  max-width: 600px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (max-width: 950px) {
  .about-container {
    flex-direction: column;
    align-items: center;
  }

  .about-image {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .about-text {
    text-align: center;
  }

  .contact-info {
    align-items: center;
  }
}
</style>
