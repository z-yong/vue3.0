import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
app.use(router)