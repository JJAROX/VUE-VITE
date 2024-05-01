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
    <SelectYear :array="cars" />
    <SelectColor :array="cars" />
    <SelectName :array="cars" />
  </div>
  <div class="cars-btns-container">
    <button class="cars-btn">dodaj auto testowe</button>
    <button class="cars-btn">obecny stan store</button>
    <button class="cars-btn">zapisz zmiany w store</button>
    <button class="cars-btn">pobierz oryginalne dane</button>
  </div>
  <div class="cars-container">
    <Car :array="cars" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '03 Vuex: Getters and Mutations',
      message: 'store Vuex objects in seperate files (store, getters, mutations, actions)'
    }
  },
  mounted() {
    this.$store.dispatch("CARS_ACTION");
  },
  computed: {
    cars() {
      return this.$store.getters.GET_CARS
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
