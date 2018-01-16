<template>
    <div>
        <h1>Login</h1>
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
      console.log('Calling Login API')
      const response = await Auth.login({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
