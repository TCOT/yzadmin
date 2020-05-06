<template>
  <transition name="showHeader">
    <div class="header-fix">

    </div>
    header
  </transition>
</template>

<script>
  import store from '@/store'
  export default {
    name:'GlobalHeader',
    computed:{

    }
  }
</script>
<style lang="scss" scoped>
  .header-animat{
    position: relative;
    z-index: 2;
  }
  .showHeader-enter-active {
    transition: all 0.25s ease;
  }
  .showHeader-leave-active {
    transition: all 0.5s ease;
  }
  .showHeader-enter, .showHeader-leave-to {
    opacity: 0;
  }

  .header-fix{
    height: 60px;
    width: 100%;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    background: #fff;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 19;
  }
</style>
