import { defineStore } from 'pinia'

interface ThemeState {
  isDark: boolean
  primaryColor: string
  fontSize: 'small' | 'medium' | 'large'
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    isDark: false,
    primaryColor: '#3B82F6', // Default blue
    fontSize: 'medium'
  }),

  getters: {
    currentTheme: (state) => ({
      isDark: state.isDark,
      primaryColor: state.primaryColor,
      fontSize: state.fontSize
    }),
    
    themeClasses: (state) => ({
      'dark': state.isDark,
      [`text-${state.fontSize}`]: true
    })
  },

  actions: {
    toggleDarkMode() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark', this.isDark)
    },

    setPrimaryColor(color: string) {
      this.primaryColor = color
      // You could update CSS variables here
      document.documentElement.style.setProperty('--primary-color', color)
    },

    setFontSize(size: 'small' | 'medium' | 'large') {
      this.fontSize = size
    },

    initializeTheme() {
      // Check system preference for dark mode
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.isDark = prefersDark
      document.documentElement.classList.toggle('dark', prefersDark)
      
      // Set initial CSS variables
      document.documentElement.style.setProperty('--primary-color', this.primaryColor)
    }
  },

  persist: true
})
