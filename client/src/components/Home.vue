<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex xs8 class="mr-2 mb-2">
        <v-card>
          <v-toolbar color="cyan" dark>
            <v-toolbar-title>Media</v-toolbar-title>
          </v-toolbar>
          <v-layout row wrap>
            <v-flex xs3 v-for="mediaItem in media" :key="mediaItem._id">
              <v-card>
                <v-card-media :src="mediaItem.url" height="200px">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="mediaItem.filename"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions class="white">
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
      </v-flex>

      <v-flex xs4>
        <v-date-picker color="cyan" landscape></v-date-picker>
      </v-flex>

    </v-layout>

    <v-layout>
      <v-flex xs8  class="mr-2">
        <v-card>
          <v-toolbar color="cyan" dark>
            <v-toolbar-title>Projects</v-toolbar-title>
          </v-toolbar>
          <v-list two-line subheader>
            <v-list-tile v-for="project in projects" :key="project._id">
              <v-list-tile-content>
                <v-list-tile-title>{{project.name}}</v-list-tile-title>
                <v-list-tile-sub-title>{{project.description}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-time-picker color="cyan" landscape></v-time-picker>
      </v-flex>
    </v-layout>
  </v-container>

</template>
<script>

import Media from '@/services/MediaServices'
import Projects from '@/services/ProjectsServices'

export default {
  data () {
    return {
      media: [],
      projects: []
    }
  },
  methods: {
  },
  async mounted () {
    this.media = (await Media.index()).data
    this.projects = (await Projects.index()).data
  }
}
</script>

<style scoped>

.list__tile__sub-title {
  white-space: pre-line;
}
</style>

