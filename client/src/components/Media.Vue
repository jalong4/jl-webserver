<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Media</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          light
          prepend-icon="search"
          color="cyan"
          solo append-icon="cancel" hide-details single-line>
        </v-text-field>
    </v-toolbar>

    <v-layout row wrap>
      <v-flex xs3 v-for="mediaItem in media" :key="mediaItem._id">
        <v-card>
          <v-card-media :src="mediaItem.url" height="200px">
          </v-card-media>
          <v-card-actions class="white">
            <div v-text="mediaItem.filename"></div>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </v-card>
</template>

<script>

export default {
  props: [
    'media'
  ]
}
</script>
