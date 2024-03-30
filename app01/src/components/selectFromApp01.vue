<template>
  <select @change="change" class="comp-sel">
    <option v-for="item in array" :value="item" v-text="item"></option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      title: "button in component",
      alert: "show alert in component",
    };
  },
  methods: {
    change(e) {
      alert(e.target.value)
    }
  },
  props: ['array']
};
</script>

<style scoped>
.comp-sel {
  width: 100%;
  height: 100%;
}
</style>