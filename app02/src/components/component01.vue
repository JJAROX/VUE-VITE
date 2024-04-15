<template>
  <div class="red-component">
    <h1 class="vue-title" v-text="title"></h1>
    <h2 class="vue-message" v-text="message"></h2>
    <div class="buttons-div">
      <button @click="add" class="vuex-button">+</button>
      <button @click="ded" class="vuex-button">-</button>
    </div>
    <h2 class="vue-message" v-text="count"></h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "01: Vuex store",
      message: "mutations"
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
