<template>
    <div class="container">
		<Navbar/>
		<h1 class="title">Welcome to the Enerjog Order Portal<span v-if="isAuthenticated">, {{ loggedInUser.username }}</span></h1>
		<h4>
			<center>
				The portal is currently in development, in terms of appearance. You can still use the features as normal!
			</center>
		</h4>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import { mapGetters } from 'vuex'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>