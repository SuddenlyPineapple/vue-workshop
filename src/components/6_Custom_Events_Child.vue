<template>
  <v-snackbar app v-model="isVisible" timeout="-1">
    Hey, when you close me button will unlock 😉
    <template v-slot:action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="sendEvent">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    isVisible: true
  }),
  methods: {
    sendEvent() {
      this.isVisible = false;
      this.$emit("unlock-button");
    }
  }
};
</script>
