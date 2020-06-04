<template>
  <client-only>
    <div>
      <Navbar/>
        <center><h2 class="title" style="margin-top: 40px;">{{ loggedInUser.username }}'s Profile</h2></center>

        <div class="things-to-shift">
          <center class="profile-content">
            <p>
              <strong>Username:</strong>
              {{ loggedInUser.username }}
            </p>
            <p>
              <strong>Email:</strong>
              {{ loggedInUser.email }}
            </p>
            <p>
              <strong>Model:</strong> 
              {{ loggedInUser.model }}
            </p>
            <p>
              <strong>Colour:</strong>
              {{ loggedInUser.colour }}
            </p>                
            <p>
              <strong>Order Status:</strong>
              PENDING
            </p>
          </center>

          <div class="new-btn">
            <button @click.prevent="toggleModal" type="submit" id="open-modal">Edit Order</button>
          </div>

          <!-- Edit Dialog -->
          <div v-show="showEditModal" class="modal is-active">         
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box" id="edit-things">
                  <!-- Edit details form  -->
                  <form method="post" @submit.prevent="change">
                    <div>
                      <label><strong>Model</strong></label>
                      <div>
                        <select v-model="model">
                          <option v-for="(m, idx) in models" :key="idx">
                            {{m.name}}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="field">
                      <label><strong>Colour</strong></label>
                      <div>
                        <select v-model="colour">
                          <option v-for="(c, idx) in colours" :key="idx">
                            {{c.name}}
                          </option>
                        </select>
                      </div>
                    </div> 

                    <div>
                      <button type="submit" id="confirm-btn">Confirm</button>
                    </div>
                  </form>
                </div>
            </div>
            <button @click.prevent="toggleModal" class="modal-close"></button>
          </div>
        </div>

        <!-- Delete stuff -->
        <div class="delete-stuff">
          <form method="post" @submit.prevent="deleteRec">
            <div class="new-btn">
              <button type="submit" id="delete-btn">Delete Account</button>
            </div>
          </form>
        </div>

    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'

export default {
    data() {
    return {
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
      error: null,
      showEditModal: false,
    }
  },
    middleware: 'auth',
    computed: {
        ...mapGetters(['loggedInUser'])
    },
    methods:{
    async change() {
      try {
        
        await this.$axios.post('change', {
          model: this.model,
          colour: this.colour
        })
      
      this.$router.go(0)
      } 
      catch (e) {
        this.error = e.response.data.message
      }
      this.showEditModal = !this.showEditModal;
    },
    async deleteRec() {
      var check = window.confirm("Are you sure you want to delete your account?")

      if(check) {
        try {
          console.log("got here")
          
          await this.$axios.post('destroy', {
            delete: 'true'
          })
        await this.$auth.logout();
        // this.$router.push("/")
        } 
        catch (e) {
          this.error = e.response.data.message
        }
      }
      else {

      }
    }, 
    toggleModal() {
      this.showEditModal = !this.showEditModal;
    }
    },
    components: {
        Navbar
    }
    }
</script>

<style lang="scss">
	@import "~/assets/scss/profile.scss";
</style>