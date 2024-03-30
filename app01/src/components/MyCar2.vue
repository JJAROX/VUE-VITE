<template>
  <div class="cars-container">
    <div v-for="car in cars" class="car-div">
      <div class="car-color" :style="{ backgroundColor: car.hex_color }">
        <p class="car-p" v-text="color_info"></p>
      </div>
      <div :class="getClass(car.damaged)">
        <p>{{ isDamaged(car.damaged) }}</p>
      </div>
      <img class="car-img" :src="car.image" alt="robocik">
      <p class="car-id" style="color: black;">id: {{ car.id }}</p>
      <p class="car-name" style="color: black;">name: {{ car.car_name }}</p>
      <p class="car-year" style="color: black;">year: {{ car.car_year }}</p>
      <button @click="displayInfo(car)" class="car-info-btn">info</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    },
    displayInfo(car) {
      alert(JSON.stringify(car, null, 5))
    }
  },
  components: {
  },
  props: ['cars']
};
</script>
<style scoped></style>
