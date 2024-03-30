<template>
  <button class="btnStyledInComponent" @click="click">{{ title }}</button>
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

<style scoped>
.btnStyledInComponent {
  background-color: blue;
  color: white;
  border-radius: 0.5rem;
  border: none;
  width: fit-content;
  cursor: pointer;
  height: 2.188rem;
  padding-inline: 0.938rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>