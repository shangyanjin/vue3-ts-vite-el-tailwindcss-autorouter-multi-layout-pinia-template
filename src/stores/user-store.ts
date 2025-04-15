import { defineStore } from 'pinia'

interface UserState {
  id: string | null
  name: string | null
  email: string | null
  role: 'admin' | 'merchant' | 'user' | null
  isAuthenticated: boolean
}

interface LoginCredentials {
  email: string
  password: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    id: null,
    name: null,
    email: null,
    role: null,
    isAuthenticated: false
  }),

  getters: {
    isAdmin: (state) => state.role === 'admin',
    isMerchant: (state) => state.role === 'merchant',
    userProfile: (state) => ({
      id: state.id,
      name: state.name,
      email: state.email,
      role: state.role
    })
  },

  actions: {
    async login({ email, password }: LoginCredentials) {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock successful login
        this.id = '1'
        this.name = 'John Doe'
        this.email = email
        this.role = 'admin'
        this.isAuthenticated = true
        
        return true
      } catch (error) {
        console.error('Login failed:', error)
        return false
      }
    },

    logout() {
      this.id = null
      this.name = null
      this.email = null
      this.role = null
      this.isAuthenticated = false
    },

    async updateProfile(data: Partial<UserState>) {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Update user data
        Object.assign(this, data)
        
        return true
      } catch (error) {
        console.error('Profile update failed:', error)
        return false
      }
    }
  },

  persist: true
})
