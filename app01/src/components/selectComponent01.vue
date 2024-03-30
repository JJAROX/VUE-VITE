<template>
  <select @change="change" class="comp-sel">
    <option v-for="item in items" :value="item" v-text="item"></option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      title: "button in component",
      alert: "show alert in component",
      items: [1, 2, 3]
    };
  },
  methods: {
    change(e) {
      alert(e.target.value)
    }
  },
};
</script>

<style scoped>
.comp-sel {
  width: 100%;
  height: 100%;
}
</style>