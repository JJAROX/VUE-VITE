<template>
  <div class="cars-container-2">
    <div v-for="car in cars" class="car-div-3">
      <div class="cars-btns-div">
        <button @click="del(car)" class="car-info-btn-2" style="margin-left: 6rem; width: 5rem;">usuń</button>
      </div>
      <img class="car-img-3" :src="car.image" alt="robocik">
      <p class="car-id-3" style="color: black;">id: {{ car.id }}</p>
      <p class="car-name-3" style="color: black;">name: {{ car.car_name }}</p>
      <p class="car-year-3" style="color: black;">year: {{ car.car_year }}</p>
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
    del(car) {
      this.deletedCar(car)
    }
  },
  components: {
  },
  props: ['cars', 'deletedCar']
};
</script>
<style scoped></style>
