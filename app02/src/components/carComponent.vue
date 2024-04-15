<template>
  <div v-for="item in array" class="car-container">
    <div class="car-color" :style="{ 'background-color': item.hex_color }">
      <p>kolor auta</p>
    </div>
    <div :class="getClass(item.damaged)">
      <p v-text="getName(item.damaged)"></p>
    </div>
    <img class="car-image" :src="item.image" alt="autko">
    <div class="car-info-div">
      <p>id: {{ item.id }}</p>
      <p>name: {{ item.car_name }}</p>
      <p>year: {{ item.car_year }}</p>
    </div>
    <div class="cars-buttons">
      <button @click="displayInfo(item)" class="state-button">info</button>
      <button @click="changeState(item.id)" class="state-button">zmień stan auta</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    add() {
      this.$store.commit("plus")
    },
    ded() {
      this.$store.commit("minus")
    },
    getClass(damaged) {
      if (damaged === true) {
        return 'car-status-2'
      } else if (damaged === false) {
        return 'car-status-1'
      }
    },
    getName(damaged) {
      if (damaged === true) {
        return 'uszkodzony'
      } else if (damaged === false) {
        return 'nieuszkodzony'
      }
    },
    changeState(id) {
      this.$store.commit("changeState", (id - 1))
    },
    displayInfo(item) {
      alert(JSON.stringify(item, null, 5))
    }
  },
  computed: {
    count() {
      return this.$store.state.c
    },

  },
  props: ['array']
};
</script>

<style scoped>
.car-container {
  position: relative;
  height: 425px;
  width: 195px;
  border-radius: 5px;
  background-color: lightgray;
}
</style>
