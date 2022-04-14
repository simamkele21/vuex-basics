import { createStore } from 'vuex'

export default createStore({
  //this is where we stod our app's data
  state: {
    counter: 0
  },
  //getters allow to get data from state
  getters: {
  },
  // methords that change data in the state ((cant trigure Async code in state))
  mutations: {
    decreaseCounter(state) {
      state.counter--
    },
    increaseCounter(state, randomNumber) {
      console.log('randomNumber: ', randomNumber)
    }
  },
  //also methords but cannot change data in the state, but can access data in state((can trigure Async code in state))
  actions: {
    increaseCounter() {
      console.log('increaseCounter (action)')
      axiox('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        this.commit('increaseCounter', response.data)
            })
    }
  },
  modules: {
  }
})
