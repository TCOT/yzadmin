<template>
  <div>
<!--  accept 限制文件上传的可选择格式  -->
    <el-upload
        ref="fileUpload"
        action="#"
        drag
        :limit="1"
        accept=".x, .xx, .xxx"
        :on-exceed="handleExceed"
        :on-change="setFileContent"
        :auto-upload="false">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em>。
        仅支持<em>.x, .xx, .xxx</em>格式。
        文件大小不超过<em>512KB</em>
      </div></el-upload>
  </div>
</template>

<script>
  import {file2Base64} from "@/utils/base";

  export default {
    name: "文件上传",
    methods:{
      handleExceed(file, fileList) {
        this.$Message('一次只能上传一个文件','error')
      },
      async setFileContent(file) {
        const extension= file.name.substring(file.name.lastIndexOf('.')+1)
        if( !(extension === 'cer')) {
          this.$Message('存在错误填写的信息！','error')
          this.$refs.certUpload.clearFiles();
        }else {
          const isLt512KB = file.size / 1024 / 1024 < 0.5;
          if (!isLt512KB) {
            this.$refs.certUpload.clearFiles();
            this.$message.error('文件大小不能超过512KB!');
          } else {
            this.form.cert_file_content = await file2Base64(file.raw);
          }
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
