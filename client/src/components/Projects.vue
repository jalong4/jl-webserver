<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Projects</v-toolbar-title>
    </v-toolbar>
    <v-list two-line subheader>
      <v-list-tile v-if="isUserLoggedIn" v-for="project in projects" :key="project._id">
        <v-list-tile-content>
          <v-list-tile-title>{{project.name}}</v-list-tile-title>
          <v-list-tile-sub-title>{{project.description}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-if="!isUserLoggedIn">
        <v-list-tile-content>
          <v-list-tile-title>Log in to view current projects</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: [
    'projects'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  }
}
</script>
<style scoped>

.list__tile__sub-title {
  white-space: pre-line;
}
</style>
