// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
// import router from './routes/router'


// createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia' // 1. Importez Pinia
import './style.css'
import App from './App.vue'
import router from './routes/router'

// 2. Créez l'application et les plugins
const app = createApp(App)
const pinia = createPinia() // 3. Créez l'instance Pinia

// 4. Installez les plugins dans l'ordre
app.use(pinia) // IMPORTANT : Pinia doit être avant le router
app.use(router)

// 5. Montez l'application
app.mount('#app')