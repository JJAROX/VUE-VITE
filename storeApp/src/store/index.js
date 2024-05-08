import { createStore } from 'vuex'
import cars from './cars.js'

console.log(cars);

const modules = {
  cars,

}

export default createStore({
  modules,
})