import './assets/main.css'

import { createApp } from 'vue'

import App from './App03.vue'
import store from "./store_cars/index.js"

createApp(App).use(store).mount('#app')

