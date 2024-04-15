<script setup>
import grandChildComponent01 from './grandchild-components/grandchild-component01.vue'
</script>
<template>
  <div class="blue-component">
    <h3 class="exercise" v-text="componentName"></h3>
    <div class="buttons-div">
      <button @click="add" class="vuex-button" style="background-color: blue;">+</button>
      <button @click="ded" class="vuex-button" style="background-color: blue;">-</button>
    </div>
    <h2 class="vue-message" v-text="count"></h2>
    <div class="childs-component-container">
      <grandChildComponent01 style="  margin-right: 0.938rem;"></grandChildComponent01>
      <grandChildComponent01></grandChildComponent01>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      componentName: "child component"
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
    grandChildComponent01: grandChildComponent01
  }
};
</script>

<style scoped></style>
