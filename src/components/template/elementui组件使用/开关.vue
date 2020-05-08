<template>
  <div>
<!--   绑定 0 1的开关-->
    <el-switch
        v-model="enable"
        :active-value="1"
        :inactive-value="0"
        active-color="#13ce66">
    </el-switch>
  </div>
</template>

<script>
  export default {
    name: "开关"
  }
</script>

<style lang="scss" scoped>

</style>
