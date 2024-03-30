<script setup>
import component00 from './components/component00.vue'
</script>

<template>
  <h1 class="vue-title" v-text="title"></h1>
  <h2 class="vue-message" v-text="message"></h2>
  <div class="app-container">
    <h1 class="vue-title">to jest aplikacja</h1>
    <div style="display: inline-flex;">
      <component00></component00>
      <component00></component00>
      <component00></component00>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      title: "00:Vue + Vite",
      message: 'podział na komponenty, import-export',
    };
  },
  components: {
    component00: component00
  }
};
</script>
<style scoped></style>
