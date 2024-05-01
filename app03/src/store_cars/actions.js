import axios from 'axios'

const actions = {
  async CARS_ACTION({ commit }) {
    const response = await axios.get('http://localhost:3000/api')
    console.log("response.data", response.data);
    commit('SET_CARS', response.data)
  },
}

export default actions