import { createRouter, createWebHistory } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'

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
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export const menu: MenuItem[] = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push({ name: 'home' })
    },
  },
  {
    label: 'About Me',
    icon: 'pi pi-user',
    command: () => {
      router.push({ name: 'about' })
    },
  },
  {
    label: 'Projects',
    icon: 'pi pi-heart',
    items: [
      {
        label: 'Software',
        icon: 'pi pi-desktop',
        command: () => {
          router.push({ name: 'about' })
        },
      },
      {
        label: 'Games',
        icon: 'pi pi-prime',
        command: () => {
          router.push({ name: 'about' })
        },
      },
      {
        label: 'Paper',
        icon: 'pi pi-file',
        command: () => {
          router.push({ name: 'about' })
        },
      },
    ],
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    command: () => {
      router.push({ name: 'about' })
    },
  },
]

export default router
