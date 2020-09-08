<template>
  <v-app-bar app dark color="primary">
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-toolbar-title>
      <span class="orange--text">allegro-tech </span>
      <span class="font-weight-light">vue-workshop</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="(route, i) in routes"
        :key="i"
        :to="route.to"
        class="ml-0 hidden-sm-and-down"
        text
      >
        {{ route.text }}
      </v-btn>
      <v-btn
        href="https://github.com/SuddenlyPineapple/vue-workshop"
        target="_blank"
        text
        class="ml-0 hidden-sm-and-down"
      >
        <span class="mr-2">Repository</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["routes"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"])
  }
};
</script>
