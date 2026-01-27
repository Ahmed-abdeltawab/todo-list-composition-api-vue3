import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.directive('tooltip', {
  mounted(el, binding) {
    el.setAttribute('title', binding.value)
    el.style.cursor = 'help'
  },
})
app.mount('#app')
