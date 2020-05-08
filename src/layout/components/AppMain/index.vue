<template>
  <div class="main-container">
    <el-backtop :visibility-height="300" target=".Backtop">
    </el-backtop>
    <transition name="fade-transform" mode="out-in">
      <main-card :key="key">
        <router-view/>
      </main-card>
    </transition>
  </div>
</template>

<script>
  // import Breadcrumb from "./Breadcrumb";

  import MainCard from "@/components/mainCard/index";

  export default {
    name: "AppMain",
    components: {MainCard},
    // components: {Breadcrumb},
    computed: {
      key() {
        return this.$route.path
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-container{
    padding:20px;
  }

</style>
