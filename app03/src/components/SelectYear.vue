<template>
  <div class="select-div">
    <p>wybierz rok:</p>
    <select class="car-select">
      <option v-for="item in array" :value="item.car_year">{{ item.car_year }}</option>
    </select>
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
