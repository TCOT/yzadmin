<template>
  <div>
<!--    0 1 验证的多选框-->
    <el-checkbox v-model="form.ssl_enable"
                 border
                 :true-label="1"
                 :false-label="0"
                 size="small"
                 class="ssl-checkbox">启用SSL
    </el-checkbox>
  </div>
</template>

<script>
  export default {
    name: "多选框"
  }
</script>

<style lang="scss" scoped>

</style>
