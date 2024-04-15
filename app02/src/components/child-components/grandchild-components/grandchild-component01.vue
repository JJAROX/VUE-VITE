<template>
  <div class="aquamarine-component">
    <h3 class="exercise" v-text="componentName"></h3>
    <div class="buttons-div">
      <button @click="add" class="vuex-button" style="background-color: aquamarine;">+</button>
      <button @click="ded" class="vuex-button" style="background-color: aquamarine;">-</button>
    </div>
    <h2 class="vue-message" v-text="count" style="color: aquamarine;"></h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      componentName: "grandchild component"
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
