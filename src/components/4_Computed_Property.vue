<template>
  <div>
    <span>Automatically encrypt and decrypts a user input:</span>
    <div v-show="encrypt">
      <v-text-field v-model="userInput"></v-text-field>
      <span>Result: {{ encryptedMessage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    userInput: "",
    encrypt: true
  }),
  methods: {
    range(start, end) {
      return Array.from(Array(end - start + 1), (_, n) => start + n);
    },
    transformStr(str, fn) {
      return str
        .split("")
        .map(fn)
        .join("");
    }
  },
  computed: {
    encryptedMessage() {
      return this.transformStr(this.userInput, char =>
        Object.keys(this.encryptDictionary).includes(char.toUpperCase())
          ? String.fromCharCode(this.encryptDictionary[char.toUpperCase()])
          : char
      );
    },
    encryptDictionary() {
      return this.range(65, 90).reduce((dictionary, charCode, index) => {
        const letter = String.fromCharCode(charCode);
        dictionary[letter] = this.range(65, 90).reverse()[index];
        return dictionary;
      }, {});
    }
  }
};
</script>
