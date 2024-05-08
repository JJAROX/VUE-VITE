<script setup>
import CarTile from '@/components/CarTile.vue'
import AppLoader from '@/components/AppLoader.vue'
import ServerError from '@/components/ServerError.vue'

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <AppLoader v-show="loaderValue">

  </AppLoader>
  <ServerError v-if="carsError !== null">
  </ServerError>
  <div class="cars-tiles-container">
    <RouterLink v-for="car in carsList" :to="`/car/${car.id}`" :key="car.id">
      <CarTile class="car-tile" :style="{ 'background': `linear-gradient(${car.hex_color}, black)` }"
        v-bind:car="car" />
    </RouterLink>

  </div>

</template>
<script>

export default {
  data() {
    return {

    }
  },
  props: ['carsList', 'loaderValue', 'carsError'],
}
</script>