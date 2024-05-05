<script setup>
import { computed, inject, onMounted, reactive } from 'vue'

const http = inject('http')

const state = reactive({})

const name = computed(() => {
  const str = state.name
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
})

onMounted(() => {
  http
    .get('/api/user')
    .then(({ data }) => {
      state.name = data.name
      state.email = data.email
    })
    .catch(({ response }) => {
      console.error(response.status, response.data.message)
    })
})
</script>

<template>
  <div class="greetings">
    <h1 v-if="name" class="green">Hello, {{ name }}!</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
