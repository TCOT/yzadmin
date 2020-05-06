<template>
  <div class="avatar-container">
    <div class="rightContainer">
      <el-dropdown :show-timeout="showTimeout"
                   :hide-timeout="hideTimeout"
                   trigger="hover"
      >
        <div class="avatar-wrapper">
          <svg-icon class="avatar" icon-class="user"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="changePwFormVisible=true">
            <span>修改密码</span>
          </el-dropdown-item>
          <el-dropdown-item @click.native="logOut">
            <span>登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="iconContainer">
        <i class="el-icon-caret-bottom"/>
      </div>
    </div>
    <el-dialog title="修改密码"
               @closed="clearDate"
               :destroy-on-close="true"
               :visible.sync="changePwFormVisible">
      <el-form ref="form"
               class="dialog-content-container"
               :model="form"
               :rules="rules"
               v-loading="loading"
               size="small"
               style="width: 100%;"
               autocomplete="on"
               label-width="150px"
               label-position="left">
        <el-form-item label="用户名">
          {{userName}}
        </el-form-item>
        <el-form-item prop="old_password" label="旧密码">
          <el-input
              show-password
              v-model="form.old_password"
              placeholder="请输入旧密码"
          />
        </el-form-item>
        <el-form-item prop="new_password1" label="新密码">
          <el-input show-password
                    v-model="form.new_password1"
                    placeholder="请输入新密码"
          />
        </el-form-item>
        <el-form-item prop="new_password2" label="再次输入密码">
          <el-input show-password
                    v-model="form.new_password2"
                    placeholder="请再次输入新密码"
          />
        </el-form-item>
      </el-form>
      <el-row class="dialog-footer-container">
        <div>
          <el-button @click="changePwFormVisible = false">取消</el-button>
        </div>
        <div>
          <el-button @click="changePwSubmit" type="primary" style="margin:0px 60px">提交</el-button>
        </div>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
  import {formValidate, isIPv4_Subnet, isPasswordFormat} from "@/utils/validate";
  import {_modifyUserInfo} from "@/api/user";

  export default {
    computed: {
      userName() {
        return this.$store.getters.userName
      }
    },
    data() {
      const validatePw = (rule, value, callback) => {
        if (!isPasswordFormat(value)) {
          callback(new Error('密码包含数字和英文，长度6-20'))
        } else callback()
      }
      return {
        loading: false,
        form: {
          old_password: '',
          new_password1: '',
          new_password2: ''
        },
        rules: {
          old_password: formValidate({
            fns: [isPasswordFormat()]
          }),
          new_password1: formValidate({
            fns: [isPasswordFormat()]
          }),
          new_password2: [{required: true, trigger: ['change', 'blur'], message: '密码不能为空'},
            {validator: validatePw}
          ],
        },
        changePwFormVisible: false,
        showTimeout: 1,
        hideTimeout: 300
      }
    },
    methods: {
      clearDate() {
        this.form = {
          old_password: '',
          new_password1: '',
          new_password2: ''
        }
        this.$refs['form'].resetFields()
      },
      async logOut() {
        await this.$store.dispatch('user/logout')
        this.$router.push(`/login`)
      },
      otherValidate() {
        if (this.form.new_password1 !== this.form.new_password2) {
          this.$Message('两次新密码输入不一致', 'error')
          return false
        } else if (this.form.new_password1 == this.form.old_password) {
          this.$Message('新密码不能与旧密码相同', 'error')
          return false
        } else {
          return true
        }
      },
      async changePwSubmit() {
        this.$refs.form.validate(async valid => {
          if (valid) {
            if (this.otherValidate()) {
              this.loading = true
              try {
                const postForm = {
                  "username": this.userName,
                  "old_password": this.form.old_password,
                  "new_password": this.form.new_password2
                }
                await _modifyUserInfo(postForm)
                this.$Message('密码重置成功,请重新登陆！', 'success')
                this.logOut()
                this.loading = false
              } catch (e) {
                this.loading = false
              }
            }
          } else {
            this.$Message('存在错误填写的信息！', 'error')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .avatar-container {
    height: 100%;
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;

    .rightContainer {
      display: flex;
      margin-top: 1px;
      margin-right: 20px;

      .iconContainer {
        margin-right: 30px;
        margin-top: 23px;
        color: #ffccc7;
      }

      .avatar-wrapper {
        .avatar {
          font-size: 40px;
        }
      }
    }

  }


</style>
