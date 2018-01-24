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
      <v-flex xs3 v-for="(mediaItem, index) in media" :key="mediaItem._id">
        <v-card  style="background-color: rgb(230, 230, 230);">
          <v-card-media :src="mediaItem.url" height="200px">
          </v-card-media>
          <v-card-actions v-if="isUserLoggedIn">
            <div v-text="mediaItem.filename"></div>
            <v-spacer></v-spacer>
            <v-btn icon @click="updateFavorite(mediaItem._id, index)" v-if="media[index].isFavorite">
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon @click="updateFavorite(mediaItem._id, index)" v-if="!media[index].isFavorite">
              <v-icon color="white">favorite</v-icon>
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
import {mapState} from 'vuex'
import MediaServices from '@/services/MediaServices'
export default {
  props: [
    'media'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods: {
    async updateFavorite (mediaId, index) {
      let newValue = !this.media[index].isFavorite

      let mediaItem = this.media[index]
      mediaItem.isFavorite = newValue

      try {
        this.response = (newValue)
          ? (await MediaServices.setFavorite(mediaId, this.user._id)).data
          : (await MediaServices.clearFavorite(mediaId, this.user._id)).data
        this.media.splice(index, 1, mediaItem)
      } catch (err) {
        console.log('Error updating favorite ', err)
      }
    }
  }
}
</script>
