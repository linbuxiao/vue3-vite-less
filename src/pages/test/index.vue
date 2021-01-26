<template>
  <div>测试</div>
  <div>getter: {{returnCount}}</div>
  <div @click="add">count: {{test.count}}</div>
  <button @click="incrementAsync">Async</button>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  methods:{
    ...mapMutations([ // 必须写在methods中
      'increment'
    ]),
    ...mapMutations({ // 重命名用对象形式包裹
      add: 'test/increment'
    }),
    // ...mapActions([
    //   'incrementAsync'
    // ])
    ...mapActions({
      incrementAsync: 'test/incrementAsync'
    })
  },
  computed: {
    ...mapState(['test']),
    // ...mapGetters([
    //   'returnCount'
    // ])
    ...mapGetters({
      returnCount: 'test/returnCount'
    })
  }
}
</script>

<style>

</style>