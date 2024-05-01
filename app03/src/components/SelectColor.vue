<template>
  <div class="select-div">
    <p>wybierz kolor:</p>
    <select class="car-select">
      <option v-for="item in array" :value="item.hex_color">{{ item.hex_color }}</option>
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
