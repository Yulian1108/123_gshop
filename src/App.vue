<template>
  <div id="app">
    <div :style="{ height: routerheight + 'px' }" class="routerview">
      <router-view></router-view>
    </div>
    <FooterGuide id="footerguid" v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  data() {
    return {
      routerheight: 0
    };
  },
  components: {
    FooterGuide
  },
  created() {
    this.$store.dispatch("getAddress");
  },
  mounted() {
    this.routerheight =
      window.screen.height - document.getElementById("footerguid").clientHeight;
  },
  watch: {
    $route: function() {
      if (this.$route.path == "/login") {
        this.routerheight = window.screen.height;
      } else {
        this.routerheight =
          window.screen.height -
          document.getElementById("footerguid").clientHeight;
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;

  .routerview {
    overflow: auto;
  }

  .routerview::-webkit-scrollbar {
    display: none;
  }
}
</style>
