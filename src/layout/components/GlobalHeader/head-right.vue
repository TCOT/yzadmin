<template>
  <div class="head-right">
    <div class="head-right-component">
      <svg-icon icon-class="night"></svg-icon>
    </div>
    <div class="head-right-component">
      <svg-icon icon-class="night"></svg-icon>
    </div>
    <div class="head-right-component">
      <svg-icon icon-class="night"></svg-icon>
    </div>
    <div class="head-right-component">
      <svg-icon icon-class="night"></svg-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: "head-right"
  }
</script>

<style lang="scss" scoped>
  svg {
    font-size: 40px;
  }

  .head-right {
    display: flex;
    align-items: center;
    padding-right: 15px;
    .head-right-component{
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 3px;
      cursor: pointer;
      transition: all .3s;
      &:hover{
        background-color: #f9f9f9;
      }
    }
  }
</style>
