<script setup>
import { inject, reactive } from 'vue'
import { useRouter } from 'vue-router'

const http = inject('http')

const formData = reactive({
  email: '',
  password: ''
})

const router = useRouter()

function submit() {
  http.get('/sanctum/csrf-cookie').then((response) => {
    http
      .post('/login', { email: formData.email, password: formData.password })
      .then(() => router.push({ name: 'home' }))
      .catch((error) => console.log(error))
  })
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
        <input type="text" placeholder="email" v-model="formData.email" />
      </div>
      <div class="form-element">
        Password:
        <input type="password" placeholder="password" v-model="formData.password" />
      </div>
      <div class="form-element">
        <button class="btn" @click="submit">Login</button>
      </div>
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
