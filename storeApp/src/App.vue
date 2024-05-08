<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { mapGetters } from 'vuex';
</script>

<template>
  <div id="app">
    <Header></Header>
    <RouterView :carsList="getCarsList" :loaderValue="getCarsLoading" :carsError="getCarsError" />
    <Footer></Footer>
  </div>
</template>
<script>
// console.log(this.$store.dispatch("FETCH_CARS"));
export default {
  data() {

    return {

    }
  },
  created() {
    this.$store.dispatch("FETCH_CARS");
  },
  computed: {
    ...mapGetters(
      {
        getCarsList: 'GET_CARS_LIST',
        getCarsLoading: 'GET_CARS_LOADING',
        getCarsError: 'GET_CARS_ERROR'
      }
    ),

  }


}
</script>

<style scoped></style>
