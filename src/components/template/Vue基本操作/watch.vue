<template>
  <div>

  </div>
</template>

<script>
  export default {
    //监听对象属性+动态验证
    watch: {
      //监听view的表单，然后watch修改发送给后端的表单
      form:{
        handler(val){
          this.postForm = JSON.parse(JSON.stringify(val))
          this.postForm.decode_type = this.postForm.decode_type.join(',')
          this.postForm.attack_detect_list.map(item => {
            item.block = item.block / 50
            item.log = item.log / 50
          })
          this.postForm.http_req_body_detect += 'K'
        },
        immediate:true,
        deep:true
      },

      //watch实现新增表单校验规则
      'form.ssl_enable': {
        handler(val) {
          const validateCert = (rule, value, callback) => {
            console.dir(value);
            if (value == '') {
              this.stepOneErr = true
              callback(new Error('请选择证书'))
            } else
              callback()
          }
          const newSSLCertRules = [{
            required: true,
            trigger: ['change', 'blur'],
            validator: validateCert
          }]
          if (val === 1) {
            this.rules = Object.assign({}, this.rules,
              {ssl_cert_id: newSSLCertRules})
          } else {
            delete this.rules.ssl_cert_id
          }
          console.dir(this.rules);
        },
      },

      //watch实现更换表单校验
      'form.enable': {
        handler(val) {
          this.$refs['form'].resetFields();
          if(val === 1){
            this.rules.cert_password = [
              {
                required:true,
                trigger: ['change', 'blur'],
                message: '证书密码不能为空',
              }
            ]
          }else {
            this.rules.cert_password = [
              {
                trigger: ['change', 'blur'],
                message: '证书密码不能为空',
              }
            ]
          }
        },
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
