<script setup>
import MyCar from './components/MyCar.vue'
</script>

<template>
  <h1 class="vue-title" v-text="title"></h1>
  <h2 class="vue-message" v-text="message"></h2>
  <MyCar></MyCar>
</template>
<script>
export default {
  data() {
    return {
      title: "03:Cars => template in component",
      message: 'data from JSON file',
    };
  },
  methods: {
  },
  components: {
    MyCar: MyCar
  }
};
</script>
<style scoped></style>
