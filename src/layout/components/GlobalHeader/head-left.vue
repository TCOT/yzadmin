<template>
  <div class="logoTitleContainer">
    <svg-icon class-name="logo" icon-class="logo"></svg-icon>
    <h1 class="logo-title">YZ-ADMIN</h1>
  </div>
</template>

<script>
  export default {
    name: "head-left"
  }
</script>

<style lang="scss" scoped>
  .logoTitleContainer {
    display: flex;
    align-items: center;
    padding-left: 15px;

    .logo {
      font-size: 45px;
    }

    .logo-title {
      margin-left: 10px;
    }
  }
</style>
