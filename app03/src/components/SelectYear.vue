<template>
  <div class="select-div">
    <p>wybierz rok:</p>
    <select class="car-select" @change="selectFunction">
      <option v-for="item in array" :value="item.car_year" :key="item.hex_color">{{ item.car_year }}</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: ['array', 'yearFun']
  ,
  methods: {
    selectFunction(e) {
      this.yearFun(e)
    }
  }

};
</script>

<style scoped></style>
