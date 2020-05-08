<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: "消息提示",
    methods:{
      show(){
        this.$Message('存在错误填写的信息！','error')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
