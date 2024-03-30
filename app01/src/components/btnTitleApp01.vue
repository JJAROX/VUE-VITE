<template>
  <button style="max-width: 10rem;height:fit-content; padding: 0.313rem" class="fancy-ds-button" @click="click"
    v-text="buttonTitle"></button>
  <p :style="{ backgroundColor: bgColor }">bg passed from app: {{ bgColor }}</p>
</template>

<script>
export default {
  data() {
    return {
      alert: "show alert in component"
    };
  },
  methods: {
    click() {
      alert(this.alert);
    },
  },
  props: ['buttonTitle', 'bgColor']
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