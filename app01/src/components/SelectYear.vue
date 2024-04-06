<template>
  <select @change="changeYear" class="selectYear" v-model="choosenYear">
    <option v-for="item in cars" :value="item.car_year" v-text="item.car_year"></option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      title: "button in component",
      alert: "show alert in component",
      choosenYear: 1981
    };
  },
  methods: {
    changeYear(e) {
      console.log(e.target.value);
      this.func1(e.target.value)
    }
  },
  props: ['cars', 'appYear', 'func1']
};
</script>

<style scoped>
.selectYear {
  border: 0.125rem dotted blue;
  width: 3.75rem;
  height: 1.875rem;
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
</style>