import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import cars from './json/cars.json'
import App from './App06.vue'

const store = createStore({
  state: {
    c: 0,
    jsonData: cars
  },

  mutations: {
    plus(state) {
      state.c++
    },
    minus(state) {
      if (state.c <= 0) {
        alert('wartość nie można być mniejsza od 0')
      } else {
        state.c--
      }
    },
    changeState(state, id) {
      if (state.jsonData[id].damaged === true) {
        state.jsonData[id].damaged = false
      } else if (state.jsonData[id].damaged === false) {
        state.jsonData[id].damaged = true
      }
      // this.jsonData[id].damaged ? true : false;
    }
  }
})


createApp(App).use(store).mount('#app')
