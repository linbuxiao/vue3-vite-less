import { createStore } from 'vuex'
import test from '/@/pages/test/store'

const store = createStore({
  modules: {
    test
  }
})

export default store