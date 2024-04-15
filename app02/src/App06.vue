<script setup>
import carComponent from './components/carComponent.vue'
</script>

<template>
  <h1 class="vue-title" v-text="title"></h1>
  <h3 class="exercise">stan aut:</h3>
  <div class="states-container">
    <div :class="getClass(car.damaged)" v-for="car in cars">
      <p class="state-info" v-text="getClass(car.damaged)"></p>
      <button @click="changeState(car.id)" class="state-button">zmień stan auta</button>
    </div>
  </div>
  <h3 class="exercise">komponenty aut:</h3>
  <div class="cars-container">
    <carComponent :array="cars"></carComponent>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '05:Cars - Vuex Store',
      cars: this.$store.state.jsonData
    }
  },
  methods: {
    getClass(damaged) {
      return damaged ? 'bad' : 'ok'
    },
    changeState(id) {
      this.$store.commit("changeState", (id - 1))
    }
  },
  components: {
    carComponent: carComponent
  }
}
</script>

<style scoped>
.ok {
  width: 12.5rem;
  height: 7.813rem;
  background-color: rgb(0, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dotted blue;
}

.bad {
  width: 12.5rem;
  height: 7.813rem;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dotted blue;
}

.state-info {
  color: white;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
}

.state-button {
  background-color: rgb(81, 81, 81);
  color: white;
  height: fit-content;
  width: 75px;
  padding-inline: 10px;
  padding-block: 5px;
  border-radius: 4px;
  font-family: 'Inter';
  font-weight: 600;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
