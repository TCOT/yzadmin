<template>
  <!--自上而下的排列 标题70px 内容高度自适应 底部按钮 80px-->
  <div style="height: 100%">
    <div class="drawer-content-container">
      <vue-scroll>
        <!--          下面内容自定义，可以写表单-->
      </vue-scroll>
    </div>
    <el-row class="drawer-footer-container">
      <div>
        <el-button @click="cancel">取消</el-button>
      </div>
      <div>
        <el-button @click="submit" type="primary" style="margin:0px 60px">提交</el-button>
      </div>
    </el-row>
  </div>
</template>
