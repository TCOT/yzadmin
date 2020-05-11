<template>
  <div class="sideMenuContainer" :class="classObj">
    <el-menu
        class="sideMenu"
        mode="vertical"
        :collapse-transition="false"
        :unique-opened="false"
        :collapse="isCollapse"
        :default-active="$route.path"
        background-color="#263238"
        text-color="rgba(255,255,255,.65)"
        active-text-color="#fff"
    >
      <sidebar-item v-for="route in routes"
                    :key="route.path"
                    :item="route"
                    :base-path="route.path"/>
    </el-menu>
  </div>
</template>

<script>
  import SidebarItem from './SidebarItem'
  import {mapGetters} from 'vuex'
  import variables from '@/styles/variables.scss'
  import store from '@/store'

  export default {
    components: {SidebarItem},
    name: 'Sidebar',
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      basePath() {
        return this.$route.matched[0].path + '/'
      },
      routes() {
        return this.$router.options.routes
      },
      variables() {
        return variables
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          // withoutAnimation: this.sidebar.withoutAnimation,
        }
      },
      isCollapse() {
        return !this.sidebar.opened
      }
    },
  }
</script>
<style lang="scss" scoped>
  .hideSidebar {
    width: 54px !important;
   ::v-deep .el-menu {
      .el-submenu {
        .el-submenu__title {
          .el-submenu__icon-arrow {
            display: none;
          }
          span{
            margin-left: 0px;
          }
        }
      }
    }
  }
  .el-menu {
    border-right: 0px;
  }

  .sideMenuContainer {
    background: #263238;
    position: fixed;
    height: 100%;
    width: 200px;
    height: calc(100vh - 60px);
    transition: width 0.28s;

    .sideMenu {
      overflow-y: hidden;

      &:hover {
        overflow-y: auto;
      }

      /*flex: 0 0 200px;*/
      background: #263238;
      width: 100%;
      z-index: 10;
      height: 100%;
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    }
  }

</style>

