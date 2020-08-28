<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>{{ msg }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["msg"],
  data: () => ({})
};
</script>
