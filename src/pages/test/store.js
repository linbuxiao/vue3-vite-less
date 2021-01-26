
const test = {
  namespaced: true,
  state: ()=> ({
    count: 5
  }),
  getters: { // 帮助完成一些计算并返回，解耦数据与计算过程
    returnCount(state) {
      return state.count - 1
    }
  }, 
  mutations: { // 同步指令
    increment (state) {
      state.count++
    }
  },
  actions: { // 异步指令（同步也可
    incrementAsync(context) {
      setTimeout(()=>{
        context.commit('increment')
      },1000)
    }
  }
}

export default test