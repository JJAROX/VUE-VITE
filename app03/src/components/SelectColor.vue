<template>
  <div class="select-div">
    <p>wybierz kolor:</p>
    <select @change="selectFunction" class="car-select">
      <option v-for="item in array" :value="item.hex_color" :key="item.hex_color">{{ item.hex_color }}</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    selectFunction(e) {
      this.colorFun(e)
    }
  },
  props: ['array', 'colorFun']


};
</script>

<style scoped></style>
