<template>
  <div>
    <el-form ref="form"
             :model="form"
             :rules="rules"
             size="small"
             style="width: 100%;"
             autocomplete="on"
             label-width="150px"
             label-position="left">
    </el-form>
<!--    按钮点击-->
    <el-button type="primary">上传证书<i class="el-icon-upload el-icon--right"></i></el-button>
<!--    标签展示-->
    <el-form-item prop="xxx" label="系统信息">
      <el-tag>标签一</el-tag>
      <el-tag  effect="dark" type="success">标签二</el-tag>
      <el-tag  effect="plain" type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </el-form-item>
<!--     选择框-->
    <el-form-item prop="site_security_id" label="站点安全">
      <el-select v-model="form.site_security_id" placeholder="请选择">
        <el-option
            v-for="(item,index) in siteSecurityList"
            :key="index*2"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
<!--      单选 适用于固定数目的选择 -->
      <el-form-item  label="单选">
          <el-radio-group v-model="form.response_type">
            <el-radio :label="0" border>转发到服务器</el-radio>
            <el-radio :label="1" border>重定向</el-radio>
            <el-radio :label="2" border>响应指定内容</el-radio>
          </el-radio-group>
      </el-form-item>
<!--      开启关闭开关-->
      <el-form-item label="开关">
      <el-switch
          style="margin-left: 20px"
          v-model="enable"
          active-color="#13ce66"
          :active-value="1"
          :inactive-value="0"
          active-text="启用"
          inactive-text="关闭">
      </el-switch>
      </el-form-item>
<!--    普通的输入框-->
      <el-form-item label="输入框">
        <el-input
            show-password
            placeholder="xxx"
        />
      </el-form-item>
<!--底部的取消和提交按钮-->
      <el-row style="display: flex;justify-content: space-evenly">
        <el-button @click="cancel">取消</el-button>
        <el-button @click="submit" type="primary">提交</el-button>
      </el-row>


<!--          可新增行的多input框验证-->
      <transition-group name="el-zoom-in-top">
        <div v-for="(item,index) in form.match_option" :key="index*1">
          <el-row>
            <el-form-item v-if="index === 0" label="匹配条件">
              <el-col :span="5">
                <el-select
                    style=""
                    v-model="item.param" placeholder="源IP">
                  <el-option
                      v-for="(item,index) in modeType"
                      :key="index*1"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="5" :offset="1">
                <el-select
                    style=""
                    v-model="item.method" placeholder="包含">
                  <el-option
                      v-for="(item,index) in modeType"
                      :key="index*1"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="5" :offset="1">
                <el-input
                    placeholder="请输入参数值"
                    v-model="item.content">
                </el-input>
              </el-col>
            </el-form-item>
            <el-form-item v-else>
              <el-col :span="5">
                <el-select
                    style=""
                    v-model="item.param" placeholder="源IP">
                  <el-option
                      v-for="(item,index) in modeType"
                      :key="index*1"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="5" :offset="1">
                <el-select
                    style=""
                    v-model="item.method" placeholder="包含">
                  <el-option
                      v-for="(item,index) in modeType"
                      :key="index*1"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="5" :offset="1">
                <el-input
                    placeholder="请输入参数值"
                    v-model="item.content">
                </el-input>
              </el-col>
              <el-col :span="4" :offset="1">
                <el-popconfirm
                    title="确定删除吗？"
                    @onConfirm="remove(index)"
                >
                  <el-button
                      slot="reference"
                      type="danger"
                      icon="el-icon-delete"
                      circle></el-button>
                </el-popconfirm>
              </el-col>

            </el-form-item>
          </el-row>
        </div>
      </transition-group>

  </div>
</template>

<script>
  export default {
    name: "formTemplate"
  }
</script>

<style lang="scss" scoped>

</style>
