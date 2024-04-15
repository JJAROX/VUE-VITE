<script setup>
import grandChildComponent02 from './grandchild-components/grandchild-component02.vue'
</script>
<template>
  <div class="blue-component">
    <h3 class="exercise" v-text="componentName"></h3>
    <div class="buttons-div">
      <button @click="add" class="vuex-button" style="background-color: blue;">+</button>
      <button @click="ded" class="vuex-button" style="background-color: blue;">-</button>
    </div>
    <h2 class="vue-message" v-text="count"></h2>
    <div class="circles-container">
      <button v-for="item in getCircles" class="vuex-button" style="background-color: blue;"></button>
    </div>
    <div class="childs-component-container">
      <grandChildComponent02 style="  margin-right: 0.938rem;"></grandChildComponent02>
      <grandChildComponent02></grandChildComponent02>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      componentName: "child component"
    };
  },
  methods: {
    add() {
      this.$store.commit("plus")
    },
    ded() {
      this.$store.commit("minus")
    }
  },
  computed: {
    count() {
      return this.$store.state.c
    },
    getCircles() {
      return Math.floor(this.$store.state.c / 2)
    }
  },
  components: {
    grandChildComponent02: grandChildComponent02
  }
};
</script>

<style scoped></style>
