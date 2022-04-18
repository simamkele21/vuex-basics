import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  //this is where we stod our app's data
  state: {
    counter: 0,
    colorCode: 'red'
  },
  //getters allow to get data from state
  getters: {
    counterSquared(state) {
      return state.counter * state.counter 
    }
  },
  // methords that change data in the state ((cant trigure Async code in state))
  mutations: {
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  //also methords but cannot change data in the state, but can access data in state((can trigure Async code in state))
  actions: {
    decreaseCounter({ commit }) {
      // console.log('decreaseCounter (commit)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        commit('decreaseCounter', response.data)
            })
    },
    increaseCounter({ commit }) {
      // console.log('increaseCounter (commit)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        commit('increaseCounter', response.data)
            })
    },
    setColorCode({ commit}) {
      commit('setColorCode', newValue)
    }
  },
  modules: {
  }
})
