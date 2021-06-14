<template>
  <h5>{{ name }} - {{ url }}</h5>
</template>

<script>
export default {
  props: ["url", "name"],
  methods: {
    fetchPokemon() {
      console.log(this.url);
    }
  },
  mounted() {
    this.fetchPokemon();
  }
};
</script>
