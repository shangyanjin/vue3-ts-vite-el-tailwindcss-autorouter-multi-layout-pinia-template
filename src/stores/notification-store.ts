import { defineStore } from 'pinia'

interface Notification {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  message: string
  timeout?: number
}

interface NotificationState {
  notifications: Notification[]
}

export const useNotificationStore = defineStore('notification', {
  state: (): NotificationState => ({
    notifications: []
  }),

  getters: {
    hasNotifications: (state) => state.notifications.length > 0,
    getNotificationById: (state) => {
      return (id: string) => state.notifications.find(n => n.id === id)
    }
  },

  actions: {
    add(notification: Omit<Notification, 'id'>) {
      const id = Math.random().toString(36).substring(2, 9)
      const newNotification = { ...notification, id }
      
      this.notifications.push(newNotification)

      if (notification.timeout !== undefined) {
        setTimeout(() => {
          this.remove(id)
        }, notification.timeout)
      }

      return id
    },

    remove(id: string) {
      const index = this.notifications.findIndex(n => n.id === id)
      if (index > -1) {
        this.notifications.splice(index, 1)
      }
    },

    clear() {
      this.notifications = []
    },

    // Helper methods for common notifications
    success(message: string, timeout = 3000) {
      return this.add({ type: 'success', message, timeout })
    },

    error(message: string, timeout = 5000) {
      return this.add({ type: 'error', message, timeout })
    },

    warning(message: string, timeout = 4000) {
      return this.add({ type: 'warning', message, timeout })
    },

    info(message: string, timeout = 3000) {
      return this.add({ type: 'info', message, timeout })
    }
  }
})
