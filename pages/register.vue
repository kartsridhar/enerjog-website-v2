<template>
    <div>
      <Navbar/>

      <div class="main-register-container">
        <div class="fitness-img">
          <img src="~/assets/img/svg/undraw_fitness.svg"/>
        </div>    

        <div class="register-container">

          <form method="post" @submit.prevent="register">

            <img class="avatar-img" src="~/assets/img/svg/undraw_order.svg"/>
            <h2>Pre-Order now!</h2>     

            <Notification :message="error" v-if="error"/>

            <!-- Username -->
            <div class="input-div one">

              <div class="i">
							  <i class="fas fa-user"/>
						  </div>

              <div>
                <h5>Username</h5>
                <input type="text" class="inputt" name="username" v-model="username" placeholder="Username" required>
              </div>

            </div>

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

            <!-- Model  -->
            <div class="dropdown-div four" id="model-drop">

              <div class="i">
							  <i class="fas fa-cog"/>
						  </div>

              <div>
                <h5>Model</h5>
                <select v-model="model" class="dropdown">
                  <option v-for="m in models" v-bind:key="{ id: m.id, text: m.name }">
                    {{m.name}}
                  </option>
                </select>
              </div>

            </div>            

            <!-- Colour  -->
            <div class="dropdown-div five" id="colour-drop">

              <div class="i">
							  <i class="fas fa-palette"/>
						  </div>

              <div>
                <h5>Colour</h5>
                <select v-model="colour" class="dropdown">
                  <option v-for="c in colours" v-bind:key="{ id: c.id, text: c.name }">                    
                    {{c.name}}
                  </option>
                </select>
              </div>

            </div> 

            <div>
              <button type="submit" class="submit-btn">Register</button>
            </div>         

            <div style="margin-top: 20px">
              Already got an account? <nuxt-link to="/login">Login</nuxt-link>
            </div>

          </form>

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
        {id: 1, name: 'Standard'},
        {id: 2, name: 'Pro'},
        {id: 3, name: 'Custom'}
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

<style lang="scss">
	@import "~/assets/scss/register.scss";
</style>