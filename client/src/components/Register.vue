<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Sign Up">
        <form autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
        </form>
        <div class="danger-alert" v-html="error" />
        <v-btn
          dark
          class="cyan"
          @click="register">
          Sign Up
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import Auth from '@/services/Auth'
import Panel from '@/components/globals/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        this.error = null
        const response = await Auth.register({
          email: this.email,
          password: this.password
        })
        console.log('Registered: ', response.data)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>
