import axios from 'axios'
import { createStore } from 'vuex'

const state = {
  posts: []
}

const getters = {
  GET_POSTS(state) {
    return state.posts
  }
}

const actions = {
  async GET_POSTS_ACTION({ commit }) {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log("response.data", response.data);
      commit('SET_POSTS', response.data)
    }
    catch (ex) {
      console.log("error: " + ex)
    }
  }
}

const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  }
}


export default createStore({
  state, getters, actions, mutations
})