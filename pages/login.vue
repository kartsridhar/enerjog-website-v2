<template>
  <div>
    <Navbar/>
      <div class="main-register-container">
        <div class="fitness-img">
          <img src="~/assets/img/svg/undraw_fitness.svg"/>
        </div>     

        <div class="register-container">

          <form method="post" @submit.prevent="login">

            <img class="avatar-img" src="~/assets/img/svg/undraw_order.svg"/>
            <h2>Login</h2>     

            <Notification :message="error" v-if="error"/>

            <!-- Email -->
            <div class="input-div two">

              <div class="i">
							  <i class="fas fa-envelope-square"/>
						  </div>

              <div>
                <h5>E-mail</h5>
                <input type="email" class="inputt" name="email" v-model="email" placeholder="E-mail" required>
              </div>

            </div>

            <!-- Password -->
            <div class="input-div three">

              <div class="i">
							  <i class="fas fa-key"/>
						  </div>

              <div>
                <h5>Password</h5>
                <input type="password" class="inputt" name="password" v-model="password" placeholder="Password" required>
              </div>

            </div>

            <div>
              <button type="submit" class="submit-btn">Login</button>
            </div>        

            <div style="margin-top: 20px">
              Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
            </div>                  

          </form>

        </div>       
      </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Notification from '~/components/Notification'

export default {
    middleware: 'guest',
  components: {
    Notification,
    Navbar
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })

        this.$router.push('/profile')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style lang="scss">
	@import "~/assets/scss/register.scss";
</style>