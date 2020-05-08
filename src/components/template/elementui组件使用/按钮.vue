<template>
  <div>
    //这是圆形图标型删除按钮
    <el-button
        slot="reference"
        type="danger"
        size="mini"
        icon="el-icon-delete"
        circle></el-button>

    //这是方框型删除按钮
    <el-button
        type="danger"
        size="small"
        plain  @click="delRow(row)"
    >
      删除
    </el-button>
  </div>
</template>

<script>
  export default {
    name: "button"
  }
</script>

<style lang="scss" scoped>

</style>
