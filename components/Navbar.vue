<template>
  <nav class="navbar is-light">
    <head>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
		</head>
    <div class="container">
      <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <nuxt-link class="navbar-item" to="/">
        <img src="~/assets/img/png/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </nuxt-link>

      </a>
        <button class="button navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}" >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable" v-if="isAuthenticated">
            <a class="navbar-link">
              {{ loggedInUser.username }}
            </a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
              <hr class="navbar-divider">
              <a class="navbar-item" @click="logout">Logout</a>
            </div>
          </div>
          <template v-else>
            <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>
            <nuxt-link class="navbar-item" to="/login">Log In</nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
      data: function() {
        return {
            isOpen: false
        }
    },

  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>