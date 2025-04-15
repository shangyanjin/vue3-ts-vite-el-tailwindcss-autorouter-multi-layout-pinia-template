import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import fontawesome from './plugins/fontawesome'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(fontawesome)

app.mount('#app')
