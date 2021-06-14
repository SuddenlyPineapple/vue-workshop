<template>
  <v-card>
    <v-card-title>
      Pokedex
      <v-spacer></v-spacer>
    </v-card-title>
    <ul>
      <li v-for="(pokemon, index) in list" :key="index">{{ pokemon.name }}</li>
    </ul>
  </v-card>
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
