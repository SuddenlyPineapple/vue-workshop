<template>
  <ul>
    <li v-for="(pokemon, index) in list" :key="index">
      {{ pokemon.name }}
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    list: []
  }),
  methods: {
    fetchPokemons() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=100")
        .then(response => {
          this.list = response.data.results;
        });
    }
  },
  mounted() {
    this.fetchPokemons();
  }
};
</script>
