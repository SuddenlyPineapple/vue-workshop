<template>
  <v-card color="grey" class="white--text pa-5">
    <h2>
      {{ list ? "My" : "" }} Top
      {{ list ? list.length : defaultList.length }} Hard Rock Songs Ever!
    </h2>
    <ol v-if="list">
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ol>
    <ol v-else>
      <li v-for="song in defaultList" :key="song.title">
        {{ song.band }} - {{ song.title }}
      </li>
    </ol>
  </v-card>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  data: () => ({
    defaultList: [
      { band: "Guns N’ Roses", title: "Welcome To The Jungle" },
      { band: "AC/DC", title: "Back In Black" },
      { band: "AC/DC", title: "Thunderstruck" },
      { band: "Led Zeppelin", title: "Whole Lotta Love" },
      { band: "Black Sabbath", title: "Paranoid" },
      { band: "Metallica", title: "Enter Sandman" },
      { band: "The Who", title: "Won’t Get Fooled Again" },
      { band: "Nirvana", title: "Smells Like Teen Spirit" },
      { band: "Aerosmith", title: "Walk This Way" },
      { band: "Van Halen", title: "Runnin With The Devil" }
    ]
  })
};
</script>
