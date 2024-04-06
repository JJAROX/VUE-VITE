<template>
  <div class="cars-container-2">
    <div v-for="car in cars" class="car-div-2">
      <div class="car-color-2" :style="{ backgroundColor: car.hex_color }">
        <p class="car-p-2" v-text="color_info"></p>
      </div>
      <div :class="getClass(car.damaged)">
        <p>{{ isDamaged(car.damaged) }}</p>
      </div>
      <div class="cars-btns-div">
        <button @click="buy(car)" class="car-info-btn-2" style="background-color: blue;">kup</button>
        <button @click="displayInfo(car)" class="car-info-btn-2" style="  margin-left: 0.625rem;">info</button>
      </div>

      <img class="car-img-2" :src="car.image" alt="robocik">
      <p class="car-id-2" style="color: black;">id: {{ car.id }}</p>
      <p class="car-name-2" style="color: black;">name: {{ car.car_name }}</p>
      <p class="car-year-2" style="color: black;">year: {{ car.car_year }}</p>
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
    },
    buy(car) {
      this.buyFunc(car)
    }
  },
  components: {
  },
  props: ['cars', 'buyFunc']
};
</script>
<style scoped></style>
