<template>
  <div>
<!--    日期|时间|范围-->
<!--    :default-time="['12:00:00']"  设置默认起始结束12:00:00-->
    <el-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="至"
        :default-time="['12:00:00']"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
    </el-date-picker>
<!--    日期+时间选择器 -->
    <el-date-picker
        type="datetime"
        v-model="form.time"
        placeholder="选择过期时间">
    </el-date-picker>
<!--    data里面为时间戳的 日期+时间选择器 -->
    <el-date-picker
        type="datetime"
        value-format="timestamp"
        v-model="form.time"
        placeholder="选择过期时间">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    name: "日期选择器",
    data(){
      //时间不能选择为过去时间
      const validateExpireTime = (rule, value, callback) => {
        if (Date.parse(new Date(value)) < Date.parse(new Date())) {
          callback(new Error('过期时间不能设置为过去时间'))
        } else
          callback()
      }
      return{
        rules: {
          name: [{required: true, trigger: ['change', 'blur'], message: '备注不能为空'},
            {min: 1, max: 64, message: '不能超过64个字符', trigger: ['change', 'blur']}],
          expire_time: [{required: true, message: '请选择过期时间', trigger: 'change'}, {
            trigger: ['change', 'blur'], validator: validateExpireTime
          }]
        },
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
