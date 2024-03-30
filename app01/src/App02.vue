<script setup>
import cars from './json/cars.json'
</script>

<template>
  <h1 class="vue-title" v-text="title"></h1>
  <h2 class="vue-message" v-text="message"></h2>
  <div class="cars-container">
    <div v-for="car in cars" class="car-div">
      <div class="car-color" :style="{ backgroundColor: car.hex_color }">
        <p class="car-p" v-text="color_info"></p>
      </div>
      <div :class="getClass(car.damaged)">
        <p>{{ isDamaged(car.damaged) }}</p>
      </div>
      <img class="car-img" :src="car.image" alt="robocik">
      <p class="car-id">id: {{ car.id }}</p>
      <p class="car-name">name: {{ car.car_name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "02:Cars => template in App",
      message: 'json from file',
      cars: cars,
      color_info: 'kolor auta'
    };
  },
  methods: {
    isDamaged(val) {
      if (val === true) {
        return 'Uszkodzony'
      } else if (val === false) {
        return 'Sprawny'
      }
    },
    getClass(val) {
      if (val === true) {
        return 'car-damaged'
      } else if (val === false) {
        return 'car-not-damaged'
      }
    }
  },
  components: {
  }
};
</script>
<style scoped></style>
