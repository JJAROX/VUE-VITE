<template>
  <div class="select-div">
    <p>wybierz markę:</p>
    <select @change="selectFunction" class="car-select">
      <option v-for="item in array" :value="item.car_name" :key="item.hex_color">{{ item.car_name }}</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: ['array', 'nameFun'],
  methods: {
    selectFunction(e) {
      this.nameFun(e)
    }
  }

};
</script>

<style scoped></style>
