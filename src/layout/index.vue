<template>
  <el-container>
    <el-header>
     header
    </el-header>
    <el-container>
      <el-aside width="201px">
        <sidebar/>
      </el-aside>
      <el-main>
        主要内容
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

  import store from '@/store'
  import NavBar from "@/layout/components/NavBar/index";
  import Sidebar from "@/layout/components/Sidebar/index";

  export default {
    name: 'Layout',
    components: {Sidebar, NavBar},
  }
</script>

<style lang="scss" scoped>
  .mainContent-container {
    display: flex;
    flex: 1;
    height: calc(100% - 60px);
  }
</style>
