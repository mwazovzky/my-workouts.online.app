<script setup>
import { inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const http = inject('http')

const router = useRouter()

function submit() {
  http
    .post('/logout')
    .then(() => router.push({ name: 'home' }))
    .catch((error) => console.log(error))
}

onMounted(() => submit())
</script>

<template>
  <div class="logout">
    <div class="logout-header">
      <h1 class="green">Logout</h1>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .logout {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.logout-header {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
</style>
