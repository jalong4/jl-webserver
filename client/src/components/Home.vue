<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex xs8 class="mr-2 mb-2">
          <media :media="media"/>
      </v-flex>

      <v-flex xs4>
        <v-date-picker color="cyan" landscape></v-date-picker>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs8  class="mr-2">
        <projects :projects="projects"/>
      </v-flex>
      <v-flex xs4>
        <v-time-picker color="cyan" landscape></v-time-picker>
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>

import Media from '@/components/Media'
import Projects from '@/components/Projects'
import MediaServices from '@/services/MediaServices'
import ProjectsServices from '@/services/ProjectsServices'

export default {
  data () {
    return {
      media: [],
      projects: [],
      mediaSearchText: '',
      projectsSearchText: ''
    }
  },
  methods: {
  },
  components: {
    Media,
    Projects
  },
  async mounted () {
    this.media = (await MediaServices.index()).data
    this.projects = (await ProjectsServices.index()).data
  }
}
</script>
