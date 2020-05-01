<template>
  <div>
        <el-menu
            mode="vertical"
            :default-active="$route.path"
            background-color="#263238"
            text-color="rgba(255,255,255,.65)"
            active-text-color="#fff"
        >
          <sidebar-item v-for="route in routes"
                        :key="route.path"
                        :item="route"
                        :base-path="basePath+route.path"/>
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
        let routes = this.$router.options.routes
          .filter(route => route.path == this.$route.matched[0].path)
        return routes[0].children;
      },
      variables() {
        return variables
      },
    },
  }
</script>
<style lang="scss" scoped>
  .v-application ul, .v-application ol{
    padding-left : 0px;
  }
</style>

