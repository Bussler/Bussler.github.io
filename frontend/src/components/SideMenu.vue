<script setup lang="ts">
import { computed, ref } from 'vue'
import type { MenuItem, MenuItemCommandEvent } from 'primevue/menuitem'
import type { Ref } from 'vue'
import { menu } from '@/router'

const selectedItem: Ref<MenuItem | null> = ref(null)

const sidebarElement: Ref<HTMLElement | null> = ref(null)

function selectItem(item: MenuItem, event: Event) {
  selectedItem.value = item
  if (item.command) {
    const menuItemCommandEvent: MenuItemCommandEvent = {
      originalEvent: event,
      item,
    }
    item.command(menuItemCommandEvent)
  }
}
function getItemKey(item: MenuItem): string | number {
  if (typeof item.label === 'function') {
    return item.label()
  }
  return item.label || 'DefaultLabel'
}

function getLabel(item: MenuItem): string {
  if (typeof item.label === 'string') {
    return item.label
  }
  if (typeof item.label === 'function') {
    return item.label()
  }
  return 'Button'
}

function getIcon(item: MenuItem): string | undefined {
  return item.icon
}

const isActive = (item: MenuItem) => computed(() => item.label === selectedItem.value?.label)
</script>

<template>
  <div class="sidebar-wrapper">
    <div ref="sidebarElement" :class="['sidebar-container']">
      <div class="sidebar-header">
        <span style="color: white">Maarten Bussler</span>
      </div>
      <div class="sidebar-body">
        <ul class="sidebar-nav">
          <template v-for="item in menu" :key="getItemKey(item)">
            <li v-if="!item.items" class="menu-item">
              <Button
                rounded
                :class="{ active: isActive(item).value, 'text-left': true }"
                :label="getLabel(item)"
                :icon="getIcon(item) ?? 'bi bi-chevron-right'"
                icon-pos="right"
                @click="(event) => selectItem(item, event)"
              />
            </li>
            <li v-else class="parent-menu-item">
              <div
                class="parent-menu-label"
                style="color: white; border: 0 1px solid rgba(255, 255, 255, 0.3)"
              >
                {{ getLabel(item) }}
              </div>
              <ul class="child-menu">
                <li v-for="subItem in item.items" :key="getItemKey(subItem)">
                  <Button
                    size="small"
                    rounded
                    :class="{ active: isActive(subItem).value, 'text-left': true, 'pl-5': true }"
                    icon-pos="right"
                    :icon="subItem.icon ?? 'bi bi-chevron-right'"
                    severity="primary"
                    :label="getLabel(subItem)"
                    @click="(event) => selectItem(subItem, event)"
                  />
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
      <div class="sidebar-footer">
        <img alt="Vue logo" class="small-logo" src="/LogoOwl.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-wrapper {
  .sidebar-container {
    display: flex;
    flex-direction: column;
    transition: width 0.3s;
    width: 250px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    overflow: hidden;
    background-color: var(--primary-color);
    color: var(--primary-color-lighter-text);

    .sidebar-header,
    .sidebar-footer {
      background-color: var(--primary-color-darker);
      color: var(--primary-color-darker-text);
    }

    .sidebar-header {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: x-large;
      font-weight: 900;
      border-bottom: 1px solid var(--primary-color);

      span {
        margin-left: 1rem;
      }
    }

    .sidebar-footer {
      margin-top: auto;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        width: 100%;
        height: auto;
      }
      .small-logo {
        width: 50%;
        height: auto; /* Maintain aspect ratio */
      }
    }

    .sidebar-body {
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          padding: 1rem;
        }
      }

      .sidebar-nav {
        button {
          width: 100%;
          height: 50px;

          &.active {
            background-color: var(--primary-color-darker);
          }
        }

        .parent-menu-item {
          .parent-menu-label {
            border: 1px solid var(--primary-color);
            display: flex;
            padding-left: 1.25rem;
            font-size: 16px;
            align-items: center;
            height: 50px;
            font-weight: 600;
          }

          button {
            height: 40px;
          }
        }
      }
    }
  }
}
</style>
