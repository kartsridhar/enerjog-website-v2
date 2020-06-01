<template>
    <div class="container">
        <Navbar/>
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p>
          <strong>Username:</strong>
          {{ loggedInUser.username }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ loggedInUser.email }}
        </p>
        <p>
          <strong>Order Status:</strong>
          PENDING
        </p>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'

export default {
    middleware: 'auth',
    computed: {
        ...mapGetters(['loggedInUser'])
    },
    components: {
        Navbar
    }
}
</script>