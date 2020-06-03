<template>
<div>
  <Navbar/>
    <div class="container">
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


    </div>
  <form method="post" @submit.prevent="change">
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
</div>
</div>
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
      error: null
    }
  },
    middleware: 'auth',
    computed: {
        ...mapGetters(['loggedInUser'])
        // model:{set(value){
        //   this.$store.commit('changeModel',value)
        // },

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
    }
    },
    components: {
        Navbar
    }
    }
</script>