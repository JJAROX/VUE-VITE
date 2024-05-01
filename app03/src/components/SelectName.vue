<template>
  <div class="select-div">
    <p>wybierz markę:</p>
    <select class="car-select">
      <option v-for="item in array" :value="item.car_name">{{ item.car_name }}</option>
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
