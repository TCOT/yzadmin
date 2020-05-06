<template>
  <div class="sideMenuContainer">
        <el-menu
            class="sideMenu"
            mode="vertical"
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
  import variables from '@/styles/variables.scss'
  import store from '@/store'
  export default {
    components: {SidebarItem},
    name:'Sidebar',
    data() {
      return{
      }
    },
    computed: {
      basePath() {
        return this.$route.matched[0].path + '/'
      },
      routes() {
        const routes = this.$router.options.routes
          .filter(route => route.path == this.$route.matched[0].path)
        console.dir(routes[0].children);
        return routes[0].children;
      },
      variables() {
        return variables
      },
    },
  }
</script>
<style lang="scss" scoped>
  .el-menu{
    border-right:0px;
  }
  .sideMenuContainer{
    background: #263238;
    height: 100%;
    height: calc(100vh - 60px);
    .sideMenu{
      overflow-y: hidden;
      &:hover{
        overflow-y: auto;
      }
      flex: 0 0 200px;
      max-width: 200px;
      min-width: 200px;
      background: #263238;
      width: 200px;
      z-index: 10;
      height: 100%;
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    }
  }

</style>

