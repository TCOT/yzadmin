<template>
  <div style="font-size: 100px;display: flex;align-items: center;margin: 30px">
    <svg-icon :icon-class="icon"/>
    <div style="align-items: center;display: flex;">
      <span style="font-size: 30px;margin-left: 30px">{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IconPageHead",
    props: {
      icon: {
        type: String,
        required: true
      },
      title:{
        type: String,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
