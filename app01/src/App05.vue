<script setup>
import MyCar from './components/MyCar2.vue'
import carsFull from './json/cars_full.json'
</script>

<template>
  <h1 class="vue-title" v-text="title"></h1>
  <h2 class="vue-message" v-text="message"></h2>
  <h3 class="exercise">rocznik : {{ year }}</h3>
  <input type="range" min="1981" max="2013" v-model="year">
  <MyCar :cars="filterCars"></MyCar>
</template>
<script>
export default {
  data() {
    return {
      title: "05:Cars => range",
      message: 'filtrowanie danych',
      numberOfCars: 5,
      cars: carsFull,
      year: '1981'
    };
  },
  methods: {
    increaseNOC() {
      this.numberOfCars += 10
    },
  },
  components: {
    MyCar: MyCar
  },
  computed: {
    filterCars() {
      return this.cars.filter((car) => car.car_year == this.year)
    }
  }
};
</script>
<style scoped></style>
