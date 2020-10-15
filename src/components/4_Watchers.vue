<template>
  <div id="watch-example">
    <v-text-field
      label="
      Ask a yes/no question:"
      v-model="question"
    />
    <p>{{ answer }}</p>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  data: () => ({
    question: "",
    answer: "I cannot give you an answer until you ask a question!"
  }),
  watch: {
    // Answer why all defined methods are "function" instead of lambdas is here:
    // https://stackoverflow.com/questions/53041171/lodashs-debounce-not-working-in-vue-js
    question: function() {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      const vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(response => {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(error => {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    }
  }
};
</script>
