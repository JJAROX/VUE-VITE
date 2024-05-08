<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="header-div">
    <div class="link-div" style="margin-left: 150px;">
      <RouterLink to="/" exact>Home</RouterLink>
    </div>
    <div class="link-div">
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div class="link-div">
      <RouterLink to="/nnn">Not found</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
};
</script>

<style scoped></style>