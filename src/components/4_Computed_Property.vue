<template>
  <div>
    <span>Automatically transform text to uppercase:</span>
    <v-text-field v-model="userInput"></v-text-field>
    <span>
      Result:
      <span class="uppercase"></span>
    </span>
  </div>
</template>

<script>
export default {
  data: () => ({
    userInput: ""
  })
};
</script>
