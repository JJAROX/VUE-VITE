<script setup>
</script>

<template>
  <h1 class="vue-title" v-text="title"></h1>
  <h2 class="vue-message" v-text="message"></h2>
  <div v-for="product in products">
    <p>{{ product.title }} , {{ product.price }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '01 Vuex: Getters',
      message: 'get local data from state by Getter'
    }
  },
  computed: {
    products() {
      return this.$store.getters.GET_PRODUCTS;
    }
  }
}
</script>

<style scoped></style>
