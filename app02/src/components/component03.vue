<script setup>
import childComponent02 from './child-components/child-component02.vue'
</script>
<template>
  <div class="red-component">
    <h1 class="vue-title" v-text="title"></h1>
    <h2 class="vue-message" v-text="message"></h2>
    <div class="buttons-div">
      <button @click="add" class="vuex-button">+</button>
      <button @click="ded" class="vuex-button">-</button>
    </div>
    <h2 class="vue-title" v-text="count"></h2>
    <div class="childs-component-container">
      <childComponent02 style="  margin-right: 0.938rem;"></childComponent02>
      <childComponent02></childComponent02>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "03: Vuex store",
      message: "parent -> child -> parent"
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
    childComponent02: childComponent02
  }
};
</script>

<style scoped>
.childs-component-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
</style>
