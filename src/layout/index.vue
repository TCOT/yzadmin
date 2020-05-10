<template>
  <el-container style="height: 100%">
    <global-header/>
    <el-container style="padding-top: 60px;">
      <el-aside width="200px" style="position: fixed">
        <sidebar/>
      </el-aside>
      <el-main class="Backtop" style="padding-left: 200px;background-color: #f1f4f5;height: 100%">
        <app-main/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

  import store from '@/store'
  import Sidebar from "@/layout/components/Sidebar/index";
  import GlobalHeader from "@/layout/components/GlobalHeader/index";
  import AppMain from "@/layout/components/AppMain/index";
  import ResizeHandler from "@/layout/components/mixin/ResizeHandler";

  export default {
    name: 'Layout',
    mixins: [ResizeHandler],
    components: {AppMain, GlobalHeader, Sidebar},
    computed: {
      device() {
        return this.$store.state.app.device
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none
  }
</style>

<style lang="scss" scoped>
  .mainContent-container {
    display: flex;
    flex: 1;
    height: calc(100% - 60px);
  }
</style>
