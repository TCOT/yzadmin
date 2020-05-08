<template>
  <div style="margin-left: 15px;margin-right:15px;font-size: 18px">
    <el-tooltip class="item" effect="dark" :content="msg" placement="top">
      <svg-icon icon-class="point">
      </svg-icon>
    </el-tooltip>
  </div>
</template>

<script>
  export default {
    name: "Point",
    props: {
      msg: {
        type: String,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
