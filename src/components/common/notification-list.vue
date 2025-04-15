<template>
  <div
    v-if="notificationStore.hasNotifications"
    class="fixed top-4 right-4 z-50 space-y-2 min-w-[320px] max-w-md"
  >
    <div
      v-for="notification in notificationStore.notifications"
      :key="notification.id"
      class="flex items-start p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out"
      :class="{
        'bg-green-50 text-green-800': notification.type === 'success',
        'bg-red-50 text-red-800': notification.type === 'error',
        'bg-yellow-50 text-yellow-800': notification.type === 'warning',
        'bg-blue-50 text-blue-800': notification.type === 'info'
      }"
    >
      <div class="flex-shrink-0">
        <font-awesome-icon
          :icon="getNotificationIcon(notification.type)"
          class="text-lg"
          :class="{
            'text-green-400': notification.type === 'success',
            'text-red-400': notification.type === 'error',
            'text-yellow-400': notification.type === 'warning',
            'text-blue-400': notification.type === 'info'
          }"
        />
      </div>
      <div class="ml-3 flex-1">
        <p class="text-sm font-medium">{{ notification.message }}</p>
      </div>
      <div class="ml-4 flex-shrink-0 flex">
        <button
          @click="notificationStore.remove(notification.id)"
          class="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <span class="sr-only">Close</span>
          <font-awesome-icon icon="times" class="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNotificationStore } from '@/stores/notification-store'

const notificationStore = useNotificationStore()

const getNotificationIcon = (type: 'success' | 'error' | 'warning' | 'info') => {
  switch (type) {
    case 'success':
      return 'check-circle'
    case 'error':
      return 'exclamation-circle'
    case 'warning':
      return 'exclamation-triangle'
    case 'info':
      return 'info-circle'
  }
}
</script>
