<template>
  <div>
    <template v-slot="{row}">
      <el-tag
          :type="row.mode | mode2Color"
          disable-transitions>
        {{row.mode | mode2text}}
      </el-tag>
    </template>
  </div>
</template>

<script>
  export default {
    name: "自定义表格显示内容",
    filters:{
      mode2Color(status) {
        const map = {
          1: 'danger',
          2: 'success',
          3: 'info'
        }
        return map[status]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
