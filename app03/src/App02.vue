<script setup>
</script>

<template>
  <h1 class="vue-title" v-text="title"></h1>
  <h2 class="vue-message" v-text="message"></h2>
  <div class="posts-container">
    <div class="posts-div" v-for="post in posts">
      <h4>title: {{ post.title }}</h4>
      <h5 style="margin-left: 1.875rem;">content: {{ post.body }}</h5>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '02 Vuex: Actions, Mutations',
      message: 'axios library - get - external json data (https://jsonplaceholder.typicode.com/posts) '
    }
  },
  mounted() {
    this.$store.dispatch("GET_POSTS_ACTION");
  },
  computed: {
    posts() {
      return this.$store.getters.GET_POSTS
    }
  }

}
</script>

<style scoped></style>
