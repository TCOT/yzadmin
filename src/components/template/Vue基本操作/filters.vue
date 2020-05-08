<template>
<!--  在v-bind中使用 -->
  <div :value="data | mode2text">
    {{data|mode2text}}
  </div>
<!--  在表格中使用-->
  <el-table-column
      prop="tag"
      label="状态"
      min-width="50">
    <template v-slot="{row}">
      <el-tag
          :type="row.mode | mode2Color"
          disable-transitions>
        {{row.mode | mode2text}}
      </el-tag>
    </template>
  </el-table-column>
</template>

<script>
  export default {
    name: "filters",
    data() {
      return {
        data: 1
      }
    },
    filters: {
      mode2text(status) {
        const statusMap = {
          0: '未过期',
          1: '已过期',
        }
        return statusMap[status]
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
