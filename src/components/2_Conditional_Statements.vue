<template>
  <v-card class="pa-5">
    <p>Is this workshop hard?</p>
    <v-switch
      v-model="isThisWorkshopHard"
      :label="isThisWorkshopHard ? 'Yes' : 'No'"
    />
    <v-img
      v-if="isThisWorkshopHard"
      src="https://media.giphy.com/media/M28rUlcjueKUE/giphy.gif"
      alt="hard"
      height="200px"
      contain
    />
    <v-img
      v-else
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
