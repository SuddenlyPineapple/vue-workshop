<template>
  <v-app>
    <Toolbar />
    <Drawer />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "vue-workshop-app",

  components: {
    Toolbar: () => import("@/components/Toolbar.vue"),
    Drawer: () => import("@/components/Drawer.vue")
  }
};
</script>
