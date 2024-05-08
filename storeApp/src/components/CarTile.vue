<template>
  <div :style="carStyle">
    <h1>{{ this.car.car_name }}</h1>
    <h3>{{ this.car.car_type }}</h3>
  </div>
</template>

<script>
export default {
  name: "CarTile",
  props: { car: Object },
  computed: {
    carStyle() {

      return {
        background: `white`,
      };
    },
  },
};
</script>

<style scoped></style>