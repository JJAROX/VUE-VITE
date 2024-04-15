<template>
  <div class="blue-component">
    <h3 class="exercise" v-text="componentName"></h3>
    <h2 class="vue-message" v-text="count"></h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      componentName: "Child component"
    };
  },
  methods: {
    add() {
      this.$store.commit("plus")
    },
    ded() {
      this.$store.commit("minus")
    }
  },
  computed: {
    count() {
      return this.$store.state.c
    }
  }
};
</script>

<style scoped></style>
