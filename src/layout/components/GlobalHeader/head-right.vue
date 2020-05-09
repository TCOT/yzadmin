<template>
  <div class="head-right">
    <head-right-component>
      <svg-icon icon-class="night"></svg-icon>
    </head-right-component>
    <head-right-component>
      <svg-icon icon-class="night"></svg-icon>
    </head-right-component>
    <head-right-component>
      <svg-icon icon-class="night"></svg-icon>
    </head-right-component>
    <head-right-component>
      <svg-icon icon-class="night"></svg-icon>
    </head-right-component>

  </div>
</template>

<script>
  import HeadRightComponent from "@/layout/components/GlobalHeader/head-right-component";

  export default {
    name: "head-right",
    components: {HeadRightComponent}
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
  }
</style>
