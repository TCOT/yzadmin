<template>
  <div>
    <el-form
        class="customForm"
        v-loading="loading"
        ref="form"
        :model="form"
        :rules="rules"
        size="small"
        autocomplete="on"
        label-width="auto">
      <el-form-item required prop="ip" label="IP地址">
        <el-col :span="16">
          <el-input
              v-model="form.ip"
              placeholder="0.0.0.0/0"/>
        </el-col>
        <el-col :push="1" :span="8">
          <el-switch
              v-model="form.enable"
              :active-value="1"
              :inactive-value="0"
              active-color="#13ce66">
          </el-switch>
        </el-col>
      </el-form-item>
      <el-form-item prop="desc" label="描述">
        <el-input
            v-model="form.desc"
            placeholder="0.0.0.0/0"/>
      </el-form-item>
      <el-form-item label="状态">
        <el-switch
            v-model="form.enable"
            :active-value="1"
            :inactive-value="0"
            active-color="#13ce66">
        </el-switch>
      </el-form-item>
      <el-form-item label="复选框">
        <el-checkbox-group v-model="form.checkList">
          <el-checkbox label="复选框 A" ></el-checkbox>
          <el-checkbox label="复选框 B" ></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {formValidate, isIPv4} from "@/utils/validate";

  export default {
    name: "index",
    data() {
      return {
        loading: false,
        form: {
          ip: 1,
          desc: '',
          enable: 1,
          checkList:['复选框 A','选中且禁用']
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
