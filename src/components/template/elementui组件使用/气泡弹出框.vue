<template>
  <div>
<!--   button记得插入 reference 插槽  -->
    <el-popconfirm
        title="确定删除吗？"
        @onConfirm="xxx"
    >
      <el-button
          slot="reference"
          type="danger"
          size="small"
          plain
      >
        删除
      </el-button>
    </el-popconfirm>
  </div>

</template>

<script>
  export default {
    name: "popconfirm"
  }
</script>

<style lang="scss" scoped>

</style>
