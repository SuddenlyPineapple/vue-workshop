<template>
  <div>
    <span>Automatically transform text to uppercase:</span>
    <v-text-field v-model="userInput"></v-text-field>
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
      return this.userInput.toUpperCase();
    }
  }
};
</script>
