import { createRouter, createWebHistory } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'
import { ref, type Ref } from 'vue'

export const currentPage: Ref<string> = ref('')

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/papers',
    name: 'papers',
    component: () => import('@/views/PapersView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
  },
  {
    path: '/latentfeaturegridcompression',
    name: 'latentfeaturegridcompression',
    component: () => import('@/views/SoftwareViews/LatentFeatureGridView.vue'),
  },
  {
    path: '/dsnerf',
    name: 'dsnerf',
    component: () => import('@/views/SoftwareViews/DSNeRF.vue'),
  },
  {
    path: '/rag-chatbot',
    name: 'ragchatbot',
    component: () => import('@/views/SoftwareViews/RAGChatbot.vue'),
  },
  {
    path: '/arap',
    name: 'arap',
    component: () => import('@/views/SoftwareViews/ARAP.vue'),
  },
  {
    path: '/tthresh',
    name: 'tthresh',
    component: () => import('@/views/SoftwareViews/TTHRESH.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export const menu: MenuItem[] = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    key: 'home',
    command: () => {
      router.push({ name: 'home' })
    },
  },
  {
    label: 'About Me',
    icon: 'pi pi-user',
    key: 'about',
    command: () => {
      router.push({ name: 'about' })
    },
  },
  {
    label: 'Projects',
    icon: 'pi pi-heart',
    key: 'projects',
    items: [
      {
        label: 'Software',
        icon: 'pi pi-desktop',
        key: 'software',
        command: () => {
          router.push({ name: 'about' })
        },
      },
      {
        label: 'Games',
        icon: 'pi pi-prime',
        key: 'games',
        command: () => {
          router.push({ name: 'about' })
        },
      },
      {
        label: 'Papers',
        icon: 'pi pi-file',
        key: 'papers',
        command: () => {
          router.push({ name: 'papers' })
        },
      },
    ],
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    key: 'contact',
    command: () => {
      router.push({ name: 'contact' })
    },
  },
]

router.beforeEach((to, from) => {
  currentPage.value = to.name as string
})

export default router
