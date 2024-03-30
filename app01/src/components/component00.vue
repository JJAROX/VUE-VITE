<template>
  <div class="inline-div">
    <h2 class="vue-message">to jest komponent</h2>
    <button class="fancy-ds-button" @click="click">{{ title }}</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      title: "button in component",
      alert: "show alert in component"
    };
  },
  methods: {
    click() {
      alert(this.alert);
    },
  },
};
</script>

<style scoped></style>