import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import http from './plugins/http'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(http)
app.mount('#app')
