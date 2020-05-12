<template>
  <div class="main-container " :class="classObj" >
    <el-backtop :visibility-height="100"></el-backtop>
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
  import {mapGetters} from "vuex";

  export default {
    name: "AppMain",
    components: {MainCard},
    // components: {Breadcrumb},
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      classObj(){
        return {
          appMainhideSidebar: !this.sidebar.opened,
          // withoutAnimation: this.sidebar.withoutAnimation,
        }
      },
      key() {
        return this.$route.path
      }
    }
  }
</script>

<style lang="scss" scoped>
  .appMainhideSidebar{
    padding-left: 74px!important;
  }

  .main-container {
    padding: 20px 20px 20px 220px;
    width: 100%;
    background-color: #f1f4f5;
    transition: padding-left 0.28s;
  }

</style>
