<template>
  <div class="head-right-component">
   <slot/>
  </div>
</template>

<script>
  export default {
    name: "head-right-component"
  }
</script>

<style lang="scss" scoped>
  .head-right-component {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 3px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      background-color: #f9f9f9;
    }
  }
</style>
