import './assets/main.css'

import { createApp } from 'vue'
import store from './store/store'

import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'




const app = createApp(App)


const vuetify = createVuetify({
    components,
    directives,
  })

app.use(router).use(vuetify).use(store).mount('#app')



