import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { QueryClient } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'
import './global/styles/main.css'

const queryClient = new QueryClient()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin, { queryClient })

app.mount('#app')
