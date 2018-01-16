<template>
    <div>
        <h1>Register</h1>
        <input
            type="email"
            name="email"
            v-model="email"
            placeholder="Email" />
        <br>
        <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Password" />
        <br>
        <button @click="register">Register</button>
    </div>
</template>
<script>
import Auth from '@/services/Auth'
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
      console.log('Calling Register API')
      const response = await Auth.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
