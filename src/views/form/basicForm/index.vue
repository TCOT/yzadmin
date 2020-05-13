<template>
  <div>
    <el-form
        v-loading="loading"
        ref="form"
        :model="form"
        :rules="rules"
        size="small"
        autocomplete="on"
        label-width="120px"
        label-position="left">
      <el-form-item required prop="ip" label="IP地址">
        <el-col :span="10">
          <el-input
              v-model="form.ip"
              placeholder="0.0.0.0/0"
              autocomplete="on"
          />
        </el-col>
      </el-form-item>
      <el-form-item prop="desc" label="描述">
        <el-col :span="10">
          <el-input
              v-model="form.desc"
              placeholder="0.0.0.0/0"
              autocomplete="on"
          />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {formValidate,isIPv4} from "@/utils/validate";

  export default {
    name: "index",
    data() {
      return {
        loading: false,
        form: {
          ip: 1,
          desc:''
        },
        rules: {
          ip: formValidate({
            fns: [
              isIPv4()
            ]
          })
        },
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
