import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import http from './plugins/http'

const app = createApp(App)
app.use(router)
app.use(http)
app.mount('#app')
