<template>
  <div class="head-left">
    <svg-icon class-name="logo" icon-class="logo"></svg-icon>
    <h1 class="logo-title">YZ-ADMIN</h1>
    <div class="logo-fold" @click="toggleSideBar">
      <svg-icon icon-class="menu-fold"></svg-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: "head-left",
    methods:{
      toggleSideBar(){
        this.$store.dispatch('app/toggleSideBar')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .head-left {
    display: flex;
    align-items: center;
    padding-left: 15px;

    .logo {
      font-size: 45px;
    }

    .logo-title {
      margin-left: 10px;
    }
    .logo-fold{
      padding: 0 20px;
      font-size: 20px;
      cursor: pointer;
    }
  }
</style>
