<template>
  <div>
    <span>Automatically transform text to uppercase:</span>
    <v-text-field v-model="userInput" class="teste"></v-text-field>
    <span>
      Result:
      <span class="uppercase">{{ uppercaseInput }}</span>
    </span>
  </div>
</template>

<script>
export default {
  data: () => ({
    userInput: ""
  }),
  computed: {
    uppercaseInput() {
      // TODO: Make userInput big :D
    }
  }
};
</script>
