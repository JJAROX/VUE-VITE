<script setup>
import childComponent03 from './child-components/child-component03.vue'
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
    <div class="childs-component-container">
      <childComponent03 style="  margin-right: 0.938rem;"></childComponent03>
      <childComponent03></childComponent03>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "04: Vuex store",
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
    childComponent03: childComponent03
  }
};
</script>

<style scoped></style>
