import { createRouter, createWebHashHistory } from 'vue-router'
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
    path: '/software',
    name: 'software',
    component: () => import('@/views/Software.vue'),
  },
  {
    path: '/games',
    name: 'games',
    component: () => import('@/views/Games.vue'),
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
  {
    path: '/hpc-abalone',
    name: 'hpc-abalone',
    component: () => import('@/views/SoftwareViews/HPCAbalone.vue'),
  },
  {
    path: '/sodoku-solver',
    name: 'sodoku-solver',
    component: () => import('@/views/SoftwareViews/SodokuSolver.vue'),
  },
  {
    path: '/project-hunters',
    name: 'project-hunters',
    component: () => import('@/views/SoftwareViews/Hunters.vue'),
  },
  {
    path: '/nowehere-to-hide',
    name: 'nowehere-to-hide',
    component: () => import('@/views/GameViews/NowhereToHide.vue'),
  },
  {
    path: '/the-beending-of-insect',
    name: 'the-beending-of-insect',
    component: () => import('@/views/GameViews/TheBeendingOfInsect.vue'),
  },
  {
    path: '/treasure-cave',
    name: 'treasure-cave',
    component: () => import('@/views/GameViews/TreasureCave.vue'),
  },
  {
    path: '/voxelhell',
    name: 'voxelhell',
    component: () => import('@/views/GameViews/Voxelhell.vue'),
  },
  {
    path: '/gunmancer',
    name: 'gunmancer',
    component: () => import('@/views/GameViews/Gunmancer.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
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
          router.push({ name: 'software' })
        },
      },
      {
        label: 'Games',
        icon: 'pi pi-prime',
        key: 'games',
        command: () => {
          router.push({ name: 'games' })
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
