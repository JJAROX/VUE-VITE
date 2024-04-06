<script setup>
import MyCar from './components/MyCar3.vue'
import carsFull from './json/cars_full.json'
import selectYear from './components/SelectYear.vue'
import BuyedCar from './components/BuyedCar.vue'
</script>

<template>
  <h1 class="vue-title" v-text="title"></h1>
  <h2 class="vue-message" v-text="message"></h2>
  <h3 class="exercise">rocznik z JSON-a:</h3>
  <selectYear :cars="sortCars" :func-1="updateYear"></selectYear>
  <div class="huge-container">
    <div class="car-left-side">
      <h3 class="exercise">lista aut:</h3>
      <MyCar :cars="filterCars" :buy-func="buyCar"></MyCar>
    </div>
    <div v-if="buyedCars.length > 0" class="car-right-side">
      <h3 class="exercise">kupione:</h3>
      <BuyedCar :cars="buyedCars" :deleted-car="deleteCar"></BuyedCar>
    </div>
    <h3 v-else class="exercise">kup że co</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "06:Cars - kup auto ",
      message: 'komunikacja child => parent',
      numberOfCars: 5,
      cars: carsFull,
      year: 1981,
      buyedCars: []
    };
  },
  methods: {
    increaseNOC() {
      this.numberOfCars += 10
    },
    updateYear(value) {
      this.year = value
    },
    buyCar(e) {
      console.log(this.cars.indexOf(e));
      if (this.cars.indexOf(e) !== -1) {
        this.cars.splice(this.cars.indexOf(e), 1);
      }
      this.buyedCars.push(e)
      console.log(this.buyedCars);
    },
    deleteCar(e) {
      console.log(this.buyedCars.indexOf(e));
      if (this.buyedCars.indexOf(e) !== -1) {
        this.buyedCars.splice(this.buyedCars.indexOf(e), 1);
      }
      this.cars.push(e)
    }
  },
  components: {
    MyCar: MyCar,
    selectYear: selectYear
  },
  computed: {
    filterCars() {
      return this.cars.filter((car) => car.car_year == this.year)
    },
    sortCars() {
      return this.cars.filter((car, index, self) =>
        index === self.findIndex(c => c.car_year === car.car_year))
        .sort((a, b) => a.car_year - b.car_year);

    }
  }
};
</script>
<style scoped></style>
