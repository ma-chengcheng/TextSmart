import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './main.css'
import './base.css'

import { basePath } from './env'
import routes from '~pages'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(basePath),
  routes,
})

app.use(router)
app.mount('#app')
