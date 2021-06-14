<template>
  <v-card class="pa-5">
    <Snackbar />
    <v-btn :disabled="disabled">
      Nuclear bomb button 💥
    </v-btn>
  </v-card>
</template>

<script>
import Snackbar from "./6_Custom_Events_Child";

export default {
  components: {
    Snackbar
  },
  data: () => ({
    disabled: true
  }),
  methods: {
    unlock() {
      //  Hint: tutaj musisz odblokować przycisk ;)
    }
  }
};
</script>
