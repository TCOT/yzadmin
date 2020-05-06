<template>
  <el-menu
      v-if="!isMobile"
      router
      :default-active="activeMenu"
      mode="horizontal"
      background-color="rgb(84, 92, 100)"
      text-color="rgba(255,255,255,0.65)"
      active-text-color="#ffc53d"
  >
    <el-menu-item class="menuItem" index="/statisInfo">
      <item icon="statistics" class="iconContainer"
            title="统计信息"/>
    </el-menu-item>
    <el-menu-item class="menuItem" index="/appProtect">
      <item icon="app" class="iconContainer"
            title="应用防护"/>
    </el-menu-item>
    <el-menu-item class="menuItem" index="/netManage">
      <item icon="net" class="iconContainer"
            title="网络管理"/>
    </el-menu-item>
    <el-menu-item class="menuItem" index="/logManage">
      <item icon="log" class="iconContainer"
            title="日志管理"/>
    </el-menu-item>
    <el-menu-item class="menuItem" index="/systemManage">
      <item icon="system" class="iconContainer"
            title="系统管理"/>
    </el-menu-item>
    <el-menu-item class="menuItem" index="/systemInfo">
      <item icon="infomation" class="iconContainer"
            title="系统信息"/>
    </el-menu-item>
  </el-menu>
  <el-menu
      v-else
      router
      :default-active="activeMenu"
      mode="horizontal"
      background-color="rgb(84, 92, 100)"
      text-color="rgba(255,255,255,0.65)"
      active-text-color="#ffc53d"
  >
    <el-menu-item class="menuItem" index="/statisInfo">
      <item icon="statistics" class="iconContainer"
            title=""/>
    </el-menu-item>
    <el-menu-item class="menuItem" index="/appProtect">
      <item icon="app" class="iconContainer"
            title=""/>
    </el-menu-item>
    <el-menu-item class="menuItem" index="/netManage">
      <item icon="net" class="iconContainer"
            title=""/>
    </el-menu-item>
    <el-menu-item class="menuItem" index="/logManage">
      <item icon="log" class="iconContainer"
            title=""/>
    </el-menu-item>
    <el-menu-item class="menuItem" index="/systemManage">
      <item icon="system" class="iconContainer"
            title=""/>
    </el-menu-item>
    <el-menu-item class="menuItem" index="/systemInfo">
      <item icon="infomation" class="iconContainer"
            title=""/>
    </el-menu-item>
  </el-menu>
</template>

<script>
  import variables from '@/styles/variables.scss'
  import Item from './Item'
  import store from '@/store'
  export default {
    components: {
      Item
    },
    data() {
      return {
        showTimeout: 1,
        hideTimeout: 300
      }
    }, computed: {
      isMobile(){
        return store.getters.device === 'mobile' ? true: false
      },
      variables() {
        return variables
      },
      menuPath() {
        return this.$route.matched[0].path
      },
      activeMenu() {
        return this.menuPath
      }
    },
    watch: {
      menuPath() {
      }
    }
  }
</script>

<style lang="scss" scoped>
  ::v-deep .menuItem.is-active {
    border-bottom: 2px solid #ffc53d;
    border-bottom-color: #ffc53d !important;
    border-bottom-width: 2px;

  }

  .v-application ul, .v-application ol {
    padding-left: 0px;
  }

  .menuItem {
    font-size: 18px;

    &:hover {
      color: #ffc53d !important;
      background-color: rgb(84, 92, 100) !important;
      /*border-bottom:2px solid #1890ff !important;*/
    }
  }


</style>
