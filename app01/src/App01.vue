<script setup>
import componentButton from './components/componentBtn01.vue'
import btnTitleFromApp from './components/btnTitleApp01.vue'
import selectComponent from './components/selectComponent01.vue'
import selectFromApp from './components/selectFromApp01.vue'
</script>

<template>
  <h1 class="vue-title" v-text="title"></h1>
  <h2 class="vue-message" v-text="message"></h2>
  <h3 class="exercise">1. Button in component, styled in component</h3>
  <componentButton></componentButton>
  <h3 class="exercise">2. Button in component, title and bg passed from app</h3>
  <div class="inline-div">
    <btnTitleFromApp :button-title="btnTitle" :bgColor="bgColor"></btnTitleFromApp>
  </div>
  <h3 class="exercise">3. Select in component, array in component </h3>
  <div class="inline-div">
    <selectComponent></selectComponent>
  </div>
  <h3 class="exercise">4. Select in component, array passed from app </h3>
  <div class="inline-div">
    <selectFromApp :array="items"></selectFromApp>
  </div>

</template>
<script>
export default {
  data() {
    return {
      title: "01:Vue + Vite",
      message: 'podział na komponenty, import-export',
      btnTitle: 'button in component title passed from app',
      bgColor: 'yellow',
      items: ['aaa', 'bbb', 'ccc']
    };
  },
  components: {
    componentButton: componentButton,
    btnTitleFromApp: btnTitleFromApp,
    selectComponent: selectComponent,
    selectFromApp: selectFromApp
  }
};
</script>
<style scoped></style>
