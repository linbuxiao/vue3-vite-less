<template>
  <div>time:{{time}}</div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      timer: null,
      time: ''
    }
  },
  methods:{
    dayjs
  },
  beforeCreate() {
    this.timer = setInterval(()=>{
              this.time = dayjs().format()
            }, 1000)
  },
  beforeUnmount() {
    clearInterval(this.timer)
  }
}
</script>

<style>

</style>