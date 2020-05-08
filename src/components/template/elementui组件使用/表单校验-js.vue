<script>
  //获得data后对data进行初始化(关键) 适配页面逻辑，然后watch管运行中的显示逻辑，watch不管form， submit方法对数据进行格式化
  //表单校验应该统一用rules提示错误信息，弹框只提示后台的返回与整体校验失败
  import {objectAssign} from "@/utils/base";
  import {formValidate, isIPv4_Subnet} from "@/utils/validate";

  export default {
    name: "表单校验",
    data() {
      const validateName = (rule, value, callback) => {
        callback(new Error('请输入正确的名字'))
      }
      //当未填完统一用这个
      this.$Message('存在错误填写的信息！', 'error')
      //动态验证，使用watch
      const newRule = [
        ...this.rules.user,
        {validator: userValidator, trigger: 'change'}
      ]
      this.rules = Object.assign({}, this.rules, {user: newRule})

      //重置表单所有字段校验状态
      this.$refs.form.resetFields();

      //单个字段验证 单独校验 手动校验
      this.$refs.form.validateField('cert_file_content')

      return {
        form: {
          name: '',
        },
        rules: {
          whitelist: formValidate({
            empty: true, fns: [
              isIPv4_Subnet(),
            ]
          }),
          name: [{required: true, trigger: ['change', 'blur'], message: '名称不能为空'},
            {validator: validateName},
            //数字校验,数字类型的验证需要
            // 在 v-model 处加上 .number 的修饰符，
            // 这是 Vue 自身提供的用于将绑定值转化为 number 类型的修饰符。
            {type: 'number', message: '年龄必须为数字值'},
            //长度校验
            {min: 1, max: 64, message: '不能超过64个字符', trigger: ['change', 'blur']},
            //时间不能为空
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'},
            //正则
            {pattern: /^[\u4e00-\u9fa5]+$/, message: '名称只支持中文'}
          ]
        },
      }
    }
    ,
    methods: {
      isOtherValidate() {
        if (this.form.new_password1 !== this.form.new_password2) {
          this.$Message('两次新密码输入不一致', 'error')
          return false
        } else if (this.form.new_password1 == this.form.old_password) {
          this.$Message('新密码不能与旧密码相同', 'error')
          return false
        } else {
          return true
        }
      }
      ,
      submit() {
        //移除校验结果
        this.$refs['form'].clearValidate()
        this.$refs['form'].clearValidate(['xxx'])
        this.$refs.form.validate(async valid => {
          if (valid) {
            if (this.isOtherValidate()) {//其他校验层
              this.loading = true
              try {
                let postForm = objectAssign({}, this.form)
                await xxx
                this.$Message('新建成功！', 'success')
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
