<template>
  <v-card>
    <v-card-title>
      Pokedex
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="list"
      :items-per-page="8"
      class="elevation-1"
      multi-sort
      :search="search"
      :expanded.sync="expanded"
      item-key="name"
      show-expand
    >
      <template v-slot:item.img="{ item }">
        <v-img
          :src="item.img"
          :alt="item.name"
          height="40px"
          max-width="45px"
          contain
        />
      </template>
      <template v-slot:expanded-item="{ item }">
        <v-card class="pa-3 ma-2">
          <Pokemon :url="item.url" :name="item.name" />
        </v-card>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";
import Pokemon from "./Pokemon.vue";

export default {
  components: {
    Pokemon
  },
  data: () => ({
    list: [],
    headers: [
      { text: "Name", value: "name" },
      { text: "Url", value: "url" },
      { text: "Fota", value: "img", sortable: false }
    ],
    search: "",
    expanded: []
  }),
  methods: {
    fetchPokemons() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=100")
        .then(response => {
          this.list = response.data.results.map((item, index) => {
            return {
              img:
                "https://pokeres.bastionbot.org/images/pokemon/" +
                (index + 1) +
                ".png",
              ...item
            };
          });
        });
    }
  },
  mounted() {
    this.fetchPokemons();
  }
};
</script>
