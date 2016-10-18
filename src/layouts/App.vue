<template>
  <transition :name="transitionName">
    <router-view class="child-view"></router-view>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
  @import '../../node_modules/bootstrap/dist/css/bootstrap.css';
</style>

<style>
  #nprogress .spinner-icon {
    border-top-color: #fff;
    border-left-color: #fff;
  }

  #nprogress .bar {
    background: #fff;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px #fff, 0 0 5px #fff;
  }
</style>
