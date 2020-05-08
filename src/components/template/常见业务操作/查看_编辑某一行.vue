<!--某一行的查看应该传进去row.id，然后在子组件里面watch这个id，从后台拿数据渲染
父组件里面的data里面统一设置成 editRowID
点击行编辑，修改这个 editRowID
-->
<template>
  <div>
<!--    底部的取消和提交按钮-->
    <el-row style="display: flex;justify-content: space-evenly">
      <el-button @click="cancelEdit" type="primary">取消</el-button>
      <el-button @click="submitEdit" type="success">提交</el-button>
    </el-row>
  </div>
</template>

<script>
  import {_getOneSiteSecurity} from "@/api/appProtect/siteSecurity";

  export default {
    name: "某一行的查看",
    props: {
      id: Number
    },
    watch: {
      id: {
        async handler(id) {
          this.loading = true
          let {data} = await _getOnexxx(id)
          this.form = data;
          this.loading = false
        },
        immediate: true
      },
    },
    methods:{
      cancelEdit(){
        this.$emit('cancelEdit')
      },
      submitEdit() {
        this.$refs.form.validate(async valid => {
          if (valid) {
            // let postForm = JSON.parse(JSON.stringify(this.form))
            // delete postForm.create_time
            this.loading = true
            try {
              await _updateOneXXX
              this.$Message('xxx成功！','success')
              this.$emit('submitEdit')
              this.loading = false
            } catch (e) {
              this.loading = false
            }
          } else {
            this.$Message('存在错误填写的信息！', 'error')
          }
        })

      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
