<script setup>
import MyCar from './components/MyCar2.vue'
import carsFull from './json/cars_full.json'
</script>

<template>
  <h1 class="vue-title" v-text="title"></h1>
  <h2 class="vue-message" v-text="message"></h2>
  <MyCar :cars="filterCars"></MyCar>
  <button @click="increaseNOC" class="fancy-ds-button" style="margin-left: 1.25rem; margin-top: 0.938rem;">POKAŻ
    WIĘCEJ</button>
</template>
<script>
export default {
  data() {
    return {
      title: "04:Cars => button 'more'",
      message: 'filtrowanie danych',
      numberOfCars: 5,
      cars: carsFull
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
      return this.cars.filter((car) => car.id < this.numberOfCars)
    }
  }
};
</script>
<style scoped></style>
