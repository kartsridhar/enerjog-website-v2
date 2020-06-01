<template>
    <div class="container">
        <Navbar/>
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Register to Pre-Order!</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="username"
                  v-model="username"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Model</label>
              <div class="control">
                <select v-model="model">
                  <option v-for="m in models" v-bind:key="{ id: m.id, text: m.name }">
                    {{m.name}}
                  </option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label">Colour</label>
              <div class="control">
                <select v-model="colour">
                  <option v-for="c in colours" v-bind:key="{ id: c.id, text: c.name }">
                    {{c.name}}
                  </option>
                </select>
              </div>
            </div>            
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Register</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Notification from '~/components/Notification'
import Navbar from '~/components/Navbar'

export default {
    middleware: 'guest',
  components: {
    Notification,
    Navbar
  },

  data() {
    return {
      username: '',
      email: '',
      password: '',
      model: '',
      models: [
        {id: 1, name: 'Standard (no recharge on movement)'},
        {id: 2, name: 'Pro (recharge and heart rate on movement)'},
        {id: 3, name: 'Custom (Pro features, with spare battery)'}
      ],
      colour: '',
      colours: [
        {id: 1, name: 'Bold Blue'},
        {id: 2, name: 'Cool Cyan'},
        {id: 3, name: 'Pretty Pink'},
        {id: 4, name: 'Powerful Purple'},
        {id: 5, name: 'Brilliant Black'}
      ],
      error: null
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('register', {
          username: this.username,
          email: this.email,
          password: this.password,
          model: this.model,
          colour: this.colour
        })

        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          },
        })

        this.$router.push('/profile')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>