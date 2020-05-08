<template>
<!--  通过v-if每次关闭后刷新组件 -->
  <el-drawer
      title="编辑静态路由"
      :visible.sync="editDrawer"
      direction="rtl"
      size="50%"
  >
    <edit-route
        v-if="editDrawer"/>
  </el-drawer>
</template>

<script>
  export default {
    name: "无感刷新抽屉组件",
    data(){
      return{
      }
    },
    methods:{
    }
  }
</script>

<style lang="scss" scoped>

</style>
