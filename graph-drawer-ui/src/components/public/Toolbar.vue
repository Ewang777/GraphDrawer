<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app-bar app color="primary" dark fixed collapse-on-scroll>
    <v-app-bar-nav-icon @click.stop="handleDrawerToggle"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Toolbar',
    data: () => ({
      items: [
        {
          icon: 'fullscreen_exit',
          href: '#',
          title: 'Logout',
          click: (e) => {}
        }
      ]
    }),
    methods: {
      handleDrawerToggle () {
        window.getApp.$emit('DRAWER_TOGGLED')
      },

    }
  }
</script>

<style scoped>

</style>
