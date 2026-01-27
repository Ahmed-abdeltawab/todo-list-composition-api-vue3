import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.directive('tooltip', {
  mounted(el, binding) {
    el.setAttribute('title', binding.value)
    el.style.cursor = 'help'
  },
})
app.mount('#app')
