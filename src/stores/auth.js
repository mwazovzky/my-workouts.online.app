import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      name: null
    }
  },
  getters: {
    getName: (state) => {
      const str = state.name
      return str ? str.charAt(0).toUpperCase() + str.slice(1) : null
    }
  },
  actions: {
    setName(name) {
      this.name = name
    }
  }
})
