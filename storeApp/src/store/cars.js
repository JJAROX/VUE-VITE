import { getCars } from "@/api/index.js"

const cars = {

  state() {
    return {
      carsList: [],
      carsLoading: true,
      carsError: null
    }
  },

  mutations: {
    SET_CARS_LIST(state, newCars) {
      state.carsList = newCars
    },
    SET_CARS_LOADING(state, bool) {
      state.carsLoading = bool
    },
    SET_CARS_ERROR(state, message) {
      state.carsError = message
    }
  },

  getters: {
    GET_CARS_LIST(state) {
      return state.carsList
    },
    GET_CARS_LOADING(state) {
      return state.carsLoading
    },
    GET_CARS_ERROR(state) {
      return state.carsError
    }
  },

  actions: {

    async FETCH_CARS({ state, commit }) {

      commit("SET_CARS_LOADING", true)

      try {
        const data = await getCars()
        console.log("fetch", data);
        commit("SET_CARS_LIST", data)
      }
      catch (err) {
        console.log("err", err);
        commit("SET_CARS_ERROR", "server error!!!")
      }
      finally {
        console.log("finally");
        commit("SET_CARS_LOADING", false)
      }
    }
  }

}

export default cars