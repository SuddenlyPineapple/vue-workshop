<template>
  <v-card class="pa-5">
    <p>Is this workshop hard?</p>
    <v-switch />
    <v-img
      src="https://media.giphy.com/media/M28rUlcjueKUE/giphy.gif"
      alt="hard"
      height="200px"
      contain
    />
    <v-img
      src="https://media.giphy.com/media/d5wLVBuJdo8CY/giphy.gif"
      alt="easy"
      height="200px"
      contain
    />
  </v-card>
</template>

<script>
export default {
  data: () => ({
    isThisWorkshopHard: false
  })
};
</script>
