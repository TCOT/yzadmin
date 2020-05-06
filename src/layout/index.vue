<template>
  <el-container>
    <global-header/>
    <el-container style="padding-top: 60px">
      <el-aside width="200px" style="position: fixed">
        <sidebar/>
      </el-aside>
      <el-main style="padding-left: 220px">
        <div>主要内容</div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

  import store from '@/store'
  import Sidebar from "@/layout/components/Sidebar/index";
  import GlobalHeader from "@/layout/components/GlobalHeader/index";

  export default {
    name: 'Layout',
    components: {GlobalHeader, Sidebar},
  }
</script>

<style lang="scss" scoped>
  .mainContent-container {
    display: flex;
    flex: 1;
    height: calc(100% - 60px);
  }
</style>
