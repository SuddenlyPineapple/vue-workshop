<template>
  <v-app>
    <Header />
    <v-main>
      <HelloWorld msg="Hello Guys" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";

export default {
  name: "Vue WorkShop App",

  components: {
    HelloWorld,
    Header
  },

  data: () => ({
    //
  })
};
</script>
