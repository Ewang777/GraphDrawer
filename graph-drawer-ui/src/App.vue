<template>
  <v-app>
    <drawer></drawer>
    <toolbar></toolbar>
    <v-content style="padding-top: 0;">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Drawer from "@/components/public/Drawer";
  import Toolbar from "@/components/public/Toolbar";

  export default {
    name: 'App',
    components: {Toolbar, Drawer},
    created () {
      window.getApp = this;
      this.getEnv();
      this.$store.dispatch('loadProjectItems');
      this.$store.dispatch('loadApiItems');
    },
    methods: {
      getEnv () {
        this.$axios.get('/global/env').then(response => {
          if (response.status === 200) {
            let env = response.data;
            window.localStorage.setItem('env', env);
          }
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
