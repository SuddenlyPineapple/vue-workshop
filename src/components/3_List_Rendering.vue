<template>
  <v-card color="grey" class="white--text pa-5">
    <h2>
      {{ list ? "My" : "" }} Top
      {{ list ? list.length : defaultList.length }} Hard Rock Songs Ever!
    </h2>
    <ol v-if="list">
      <!-- TODO: Dodaj tutaj elementy korzystając z pętli -->
    </ol>
    <ol v-else>
      <!-- TODO: A tu wyrenderuj domyślną listę -->
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
      { band: "AC/DC", title: "Back In Black" },
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
