<template>
  <div class="app-container">
    <div class="card-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainCard',
    data(){
      return{
      }
    },
  }
</script>

<style lang="scss" scoped>
  .app-container {
    .card-wrapper {
      padding: 10px;
      background-color: #ffffff;
      transition: 0.28s;
      border-radius: 4px;
      transition: 0.28s ease-in;
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
</style>
