<template>
  <van-button type="primary" @click="handleDialog">主要按钮</van-button>
</template>

<script>
import { Button, Dialog } from 'vant'
export default {
  methods:{
    handleDialog() {
      Dialog.alert({
        title: '标题',
        message: '弹窗内容',
      }).then(() => {
        // on close
      });      
    }
  },
  components: {
    [Button.name]:Button,
    [Dialog.name]:Dialog
  }
}
</script>

<style>

</style>