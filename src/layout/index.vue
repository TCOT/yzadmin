<template>
  <el-container>
    <global-header/>
    <el-container style="padding-top: 60px;">
      <sidebar/>
      <app-main/>
    </el-container>
  </el-container>
</template>

<script>

  import store from '@/store'
  import Sidebar from "@/layout/components/Sidebar/index";
  import GlobalHeader from "@/layout/components/GlobalHeader/index";
  import AppMain from "@/layout/components/AppMain/index";
  import ResizeHandler from "@/layout/components/mixin/ResizeHandler";
  import {mapGetters} from "vuex";

  export default {
    name: 'Layout',
    mixins: [ResizeHandler],
    components: {AppMain, GlobalHeader, Sidebar},
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
