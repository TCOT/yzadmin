<template>
  <div>
    <!--      下拉选择框-->
    <!--
        el-option label属性的标签，若不设置则默认与 value 相同
    -->
    <el-form-item label="是否记录日">
      <el-select
          v-model="form.log_type" placeholder="">
        <el-option
            v-for="(item,index) in options"
            :key="index*1"
            :label="item.label"
            :disabled="item.disabled"
            :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </div>
</template>

<script>
  export default {
    name: "选择框",
    data(){
      return{
        options: [{
          value: 1,
          label: "命中时记录日志",
          disabled:false
        }, {
          value: 2,
          label: "不记录日志",
          disabled:false
        }],
      }
    },


  }
</script>

<style lang="scss" scoped>

</style>
