<template>
  <div id="app">
    <nav-bar />
    <b-container fluid tyle="overflow-y: auto;">
      <router-view />
    </b-container>
    <footer-bar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import ConfigService from '@/services/configService';

export default {
  metaInfo: {
    title: 'App',
    titleTemplate: '%s | Frontend',
    meta: []
  },
  components: {
    NavBar,
    FooterBar
  },
  beforeCreate() {
    ConfigService.loadConfig();
  }
};
</script>

<style lang="scss">
@import '../src/assets/css/custom.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 3.8rem
}
</style>
