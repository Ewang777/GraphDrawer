<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-navigation-drawer :mini-variant.sync="drawer" permanent app fixed >
    <v-toolbar>
      <v-icon color="primary" large class="ml-0 pl-1">mdi-api</v-icon>
      <v-toolbar-title class="ml-0 pl-6">
        <span class="title">{{$store.state.appTitle}}</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="(item, i) in menus" :to="item.path" :key="i" link>
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-left ml-0 pl-2">{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>

  import menu from '@/api/menu'

  export default {
    name: 'Drawer',
    data: () => ({
      drawer: true,
      menus: menu
    }),
    mounted () {
      window.getApp.$on('DRAWER_TOGGLED', () => {
        this.drawer = (!this.drawer)
      })
    }
  }
</script>

<style scoped>

</style>
