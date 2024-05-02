<template>
  <div class="car-div" v-for="item in array">
    <div class="car-color" :style="{ 'background-color': item.hex_color }">
      <p>kolor auta</p>
    </div>
    <div class="car-color-body">
      <h1>id: {{ item.id }}</h1>
      <p>name: {{ item.car_name }}</p>
      <p>year: {{ item.car_year }}</p>
    </div>
    <div class="cars-btns-container-2">
      <button @click="displayInfo(item)" class="cars-btn-2">info</button>
      <button @click="repairOrBrokeCar(item)" class="cars-btn-2">{{ buttonTextInfo(item) }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: ['array'],
  methods: {
    displayInfo(car) {
      alert(JSON.stringify(car, null, 5))
    },
    buttonTextInfo(car) {
      if (car.damaged === true) {
        return 'zepsuj auto'
      } else {
        return 'napraw auto'
      }
    },
    repairOrBrokeCar(car) {
      car.damaged === true ? car.damaged = false : car.damaged = true
    }
  },


};
</script>

<style scoped></style>
