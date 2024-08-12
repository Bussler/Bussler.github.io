<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import { type ImageItem } from '@/components/common/ImageGalleria.vue'
import ProjectInfoComponent from '@/components/ProjectInfoComponent.vue'

const titlebar = useToolbarStore()

const toolbarComponents = [
  {
    label: 'Github',
    icon: 'pi pi-fw pi-github',
    command: () => window.open('https://github.com/Bussler/llm_vectorstorarge_chatbot', '_blank'),
  },
]

const images: Ref<ImageItem[]> = ref([
  {
    itemImageSrc: '/images/rag_chatbot/chatbot-example.png',
    thumbnailImageSrc: '/images/rag_chatbot/chatbot-example.png',
    description: 'Example of using the chatbot.',
    title: '',
  },
])

onMounted(async () => {
  titlebar.setToolbarComponents(toolbarComponents)
})
</script>

<template>
  <Card>
    <template #title>RAG LLM Chatbot</template>
    <template #content>
      <ProjectInfoComponent
        :images="images"
        :about="[
          'This little chatbot enables you to summarize or chat with your own documents with the help of large language models!',
          'In the era of information overload, staying organized and keeping pace can be quite challenging. This AI bot lets you upload your own large textdocuments and effectively retrieve answers to your specific queries.',
          'Installation instructions and usage guides can be found on the github. This project uses langchain, chromadb, models from huggingface and provides docker integration for ease of use.',
        ]"
        :goal="[
          'The primary goal of this project was to get practice working with large language models and popular libraries, such as langchain and huggingface.',
          'Additionally I wanted to hone my skills with fullstack development (fastapi, vuejs) and get more experience in using and setting up a docker project.',
        ]"
        :background="[
          'User documents are embedded into a vector database. The database splits the documents into chunks and embedds each chunk as a high dimensional feature vector.',
          'When a user queries the bot, the query is given to the vector database, which searches its feature space and returns the most promising chunks. The chunks are then passed to a large language model as additional context.',
          'This allows the large language model to utilize information from the underlying documents to answer user questions, all without the necessity of fine-tuning on those documents.',
        ]"
        :results="null"
        :github="'https://github.com/Bussler/llm_vectorstorarge_chatbot'"
        :paper="null"
      />
    </template>
  </Card>
</template>

<style scoped>
.image-galleria-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.panel-margin {
  margin-top: 3ch; /* Adjust the value as needed */
}
</style>
