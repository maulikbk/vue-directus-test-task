import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import directus from '../plugins/directus'
console.log('directusdirectus', directus)

const app = createApp(App)

app.use(directus)
app.use(router)

app.mount('#app')
