<script setup>
import childComponent04 from './child-components/child-component04.vue'
</script>
<template>
  <div class="red-component">
    <h1 class="vue-title" v-text="title"></h1>
    <h2 class="vue-message" v-text="message"></h2>
    <div class="buttons-div">
      <button @click="add" class="vuex-button">+</button>
      <button @click="ded" class="vuex-button">-</button>
    </div>
    <h2 class="vue-message" v-text="count" style="color: red;"></h2>
    <div class="circles-container">
      <button v-for="item in count" class="vuex-button"></button>
    </div>
    <div class="childs-component-container">
      <childComponent04 style="  margin-right: 0.938rem;"></childComponent04>
      <childComponent04></childComponent04>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "05: Vuex store",
      message: "parent -> child -> granchild"
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
  },
  components: {
    childComponent04: childComponent04
  }
};
</script>

<style scoped></style>
