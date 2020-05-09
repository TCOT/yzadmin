<template>
<!--  <transition name="showHeader">-->
    <div class="header-fix">
      <head-left/>
      <head-right/>
    </div>
<!--  </transition>-->
</template>

<script>
  import store from '@/store'
  import HeadLeft from "@/layout/components/GlobalHeader/head-left";
  import HeadRight from "@/layout/components/GlobalHeader/head-right";
  export default {
    name:'GlobalHeader',
    components: {HeadRight, HeadLeft},
    computed:{

    }
  }
</script>
<style lang="scss" scoped>
  .header-fix{
    display: flex;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    position: fixed;
    /*z-index: 19;*/
  }
</style>
