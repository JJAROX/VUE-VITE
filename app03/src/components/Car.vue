<template>
  <div class="car-div" v-for="item in array">
    <div class="car-color" :style="{ 'background-color': item.hex_color }">
      <p v-text="item.hex_color"></p>
    </div>
    <h1>id: {{ item.id }}</h1>
    <p>name: {{ item.car_name }}</p>
    <p>year: {{ item.car_year }}</p>
    <button>info</button>
    <button>napraw auto</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: ['array']


};
</script>

<style scoped></style>
