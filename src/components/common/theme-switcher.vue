<template>
  <div class="flex items-center space-x-4">
    <!-- Dark Mode Toggle -->
    <button
      @click="themeStore.toggleDarkMode()"
      class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      :title="themeStore.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    >
      <font-awesome-icon
        :icon="themeStore.isDark ? 'sun' : 'moon'"
        class="text-xl"
        :class="themeStore.isDark ? 'text-yellow-400' : 'text-gray-600'"
      />
    </button>

    <!-- Font Size Selector -->
    <div class="relative">
      <button
        @click="isOpen = !isOpen"
        class="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <font-awesome-icon icon="text-height" class="text-gray-600 dark:text-gray-300" />
        <span class="text-sm text-gray-700 dark:text-gray-200">{{ themeStore.fontSize }}</span>
      </button>

      <!-- Dropdown Menu -->
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
      >
        <div class="py-1">
          <button
            v-for="size in ['small', 'medium', 'large']"
            :key="size"
            @click="selectFontSize(size as 'small' | 'medium' | 'large')"
            class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            :class="{ 'bg-gray-100 dark:bg-gray-700': themeStore.fontSize === size }"
          >
            {{ size.charAt(0).toUpperCase() + size.slice(1) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from '@/stores/theme-store'

const themeStore = useThemeStore()
const isOpen = ref(false)

const selectFontSize = (size: 'small' | 'medium' | 'large') => {
  themeStore.setFontSize(size)
  isOpen.value = false
}

// Initialize theme when component is mounted
themeStore.initializeTheme()
</script>
