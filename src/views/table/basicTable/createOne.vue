<template>
  <div style="height: 100%">
    <div class="drawer-body-container">

    </div>
    <div class="drawer-footer-container">
        <el-button @click="$emit('cancelCreate')">取消</el-button>
        <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "createOne"
  }
</script>

<style lang="scss" scoped>

</style>
