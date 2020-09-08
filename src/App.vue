<template>
  <v-app>
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "vue-workshop-app",

  components: {
    Header
  }
};
</script>
