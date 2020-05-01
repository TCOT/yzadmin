<template>
  <div class="main-container">
    <el-backtop :visibility-height="300" target=".__panel">
    </el-backtop>
    <div class="breadcrumb-container">
      <breadcrumb class="breadcrumb"/>
    </div>
    <transition name="fade-transform" mode="out-in">
      <router-view  class="view-container"/>
    </transition>
  </div>
</template>

<script>
  // import Breadcrumb from "./Breadcrumb";

  export default {
    name: "AppMain",

    // components: {Breadcrumb},
    computed: {
      key() {
        return this.$route.path
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
