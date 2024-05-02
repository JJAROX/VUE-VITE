<script setup>
import SelectYear from './components/SelectYear.vue';
import SelectColor from './components/SelectColor.vue';
import SelectName from './components/SelectName.vue';
import Car from './components/Car.vue';
</script>

<template>
  <h1 class="vue-title" v-text="title"></h1>
  <h2 class="vue-message" v-text="message"></h2>
  <div class="selects-container">
    <SelectYear :yearFun="yearFun" :array="appCars" />
    <SelectColor :colorFun="colorFilter" :array="appCars" />
    <SelectName :nameFun="nameFun" :array="appCars" />
  </div>
  <div class="cars-btns-container">
    <button @click="addCar" class="cars-btn">dodaj auto testowe</button>
    <button @click="storeStateCheck" class="cars-btn">obecny stan store</button>
    <button @click="saveChanges" class="cars-btn">zapisz zmiany w store</button>
    <button @click="getOriginalData" class="cars-btn">pobierz oryginalne dane</button>
  </div>
  <div class="cars-container">
    <div class="damaged-cars">
      <p>uszkodzone</p>
      <div class="damaged-cars-container">
        <Car :array="damagedCars" />
      </div>
    </div>
    <div class="functional-cars">
      <p>sprawne</p>
      <div class="functional-cars-container">
        <Car :array="functionalCars" />
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    console.log(this.$store.getters.GET_CARS);
    return {
      title: '03 Vuex: Getters and Mutations',
      message: 'store Vuex objects in seperate files (store, getters, mutations, actions)',
      appCars: []
    }
  },
  methods: {
    addCar() {
      const newCar = {
        id: parseInt(this.appCars[this.appCars.length - 1].id + 1),
        car_name: "Test",
        car_type: "Test",
        car_year: 2021,
        damaged: false,
        hex_color: "#FF0000",
      }
      this.appCars.push(newCar)
    },
    storeStateCheck() {
      console.log(this.$store.getters.GET_CARS);
      console.log(this.appCars);
      this.appCars = [...this.$store.getters.GET_CARS]
    },
    saveChanges() {
      console.log(this.appCars);
      this.$store.state.cars = this.appCars
    },
    getOriginalData() {
      this.$store.dispatch("CARS_ACTION").then(data => this.appCars = data);
    },
    colorFilter(e) {
      this.appCars = this.appCars.filter(element => element.hex_color === e.target.value)
      console.log(this.appCars);
    },
    nameFun(e) {
      this.appCars = this.appCars.filter(element => element.car_name === e.target.value)
      console.log(this.appCars);
    },
    yearFun(e) {
      this.appCars = this.appCars.filter(element => element.car_year === parseInt(e.target.value))
      console.log(this.appCars);
    }
  },
  mounted() {
    this.$store.dispatch("CARS_ACTION").then(data => this.appCars = data);
  },
  computed: {
    cars() {
      return this.appCars
    },
    damagedCars() {
      return this.appCars.filter((element) => element.damaged !== true)
    },
    functionalCars() {
      return this.appCars.filter((element) => element.damaged === true)
    }
  },
  components: {
    SelectYear: SelectYear,
    SelectColor: SelectColor,
    SelectName: SelectName,
    Car: Car
  }

}
</script>

<style scoped></style>
