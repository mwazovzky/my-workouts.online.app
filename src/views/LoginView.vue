<script setup>
import { inject, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Error from '../components/Error.vue'

const http = inject('http')

const user = reactive({
  email: '',
  password: ''
})

const error = reactive({
  message: ''
})

const router = useRouter()

function submit() {
  clearError()
  http.get('/sanctum/csrf-cookie').then((response) => {
    http
      .post('/login', { email: user.email, password: user.password })
      .then(() => router.push({ name: 'home' }))
      .catch(({ response }) => (error.message = response.data.message))
  })
}

function clearError() {
  error.message = ''
}
</script>

<template>
  <div class="login">
    <div class="login-header">
      <h1 class="green">Login</h1>
    </div>
    <form class="login-form" @submit.prevent>
      <div class="form-element">
        Email:
        <input type="text" placeholder="email" v-model="user.email" />
      </div>
      <div class="form-element">
        Password:
        <input type="password" placeholder="password" v-model="user.password" />
      </div>
      <div class="form-element">
        <button class="btn" @click="submit">Login</button>
      </div>
      <Error :message="error.message" />
    </form>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.login-header {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.login-form {
  margin: 0 auto;
  padding: 8px 24px;
  width: 400px;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 8px;
}
.form-element {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}
input {
  padding: 8px;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 4px;
}
.btn {
  padding: 8px;
  background-color: #42b983;
  color: #ffffff;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 4px;
}
</style>
