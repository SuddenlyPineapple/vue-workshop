<template>
  <v-card class="pa-5" :color="color">
    <p class="mb-2">{{ incrementedValue }}</p>
    <v-btn v-on:click="incrementValue">Increment Value</v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "red"
    }
  },
  data: () => ({
    incrementedValue: 0
  }),
  methods: {
    incrementValue() {
      this.incrementedValue = this.incrementedValue + 1;
    }
  }
};
</script>
