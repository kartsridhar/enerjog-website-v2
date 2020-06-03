<template>
    <div>
		<Navbar/>
    <br>
		<h1 class="title">
      <center>
        Welcome to the Enerjog Order Portal<span v-if="isAuthenticated">, {{ loggedInUser.username }}</span>
      </center>
    </h1>
		<h3>
			<center>
				Pre order your Enerjog and keep running!
			</center>
		</h3>
    <div class="outerWrapper" id="outerWrapper">
    <div class="animated-svg-container">
      <svg width="250" height="300" viewBox="20 0 250 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        
        <g id="arm-left" transform="translate(150,105)" >

          <animateTransform attributeName="transform" type="rotate" additive="sum" 
                            begin="0s" dur="1.1s" repeatCount="indefinite" 
                            values="-45; 45; -45" />
        
          <rect width="15" height="50" fill="#434275" />

          <g id="arm-left-lower" transform="translate(0,50)">
              <animateTransform attributeName="transform" type="rotate" additive="sum" 
                                begin="0s" dur="1.1s" repeatCount="indefinite" 
                                values="-120 5,0; 0 5,0; -120 5,0" />

              <rect width="10" height="50" fill="#D2691E"/>
          </g>
        </g>  <!--arm-left-->
        
        <g id="leg-left" transform="translate(130,170)" >
            <animateTransform attributeName="transform" type="rotate" additive="sum" 
                              begin="0s" dur="1.1s" repeatCount="indefinite" 
                              values="30; -60; 30" />
          
            <rect width="20" height="50" fill="midnightblue" />

            <g id="leg-left-lower" transform="translate(0,50)">
                <animateTransform attributeName="transform" type="rotate" additive="sum" 
                                  begin="0s" dur="1.1s" repeatCount="indefinite" 
                                  values="100; -20; 100" />

                <rect width="10" height="50" fill="#D2691E"/>
                
                <g id="leg-left-foot" transform="translate(0,50)">
                    <animateTransform attributeName="transform" type="rotate" additive="sum" 
                                      begin="0s" dur="1.1s" repeatCount="indefinite" 
                                      values="40; -10; 40" />

                    <rect width="30" height="10" fill="blue" />
                </g>

            </g>  <!--leg-left-lower-->
        </g>  <!--leg-left-->
        

        <g id="body" transform="translate(150,90) rotate(20)" >
          <rect width="30" height="80" fill="#817fe3" />
        </g>
        <g id="head" transform="translate(140,20)" >
          <ellipse cx="50" cy="30" rx="22" ry="27" transform="rotate(20)" fill="#D2691E" />
        </g>

        
        <g id="leg-right" transform="translate(140,170)" >
            <animateTransform attributeName="transform" type="rotate" additive="sum" 
                              begin="0s" dur="1.1s" repeatCount="indefinite" 
                              values="-60; 30; -60" />
          
            <rect width="20" height="50" fill="midnightblue" />

            <g id="leg-right-lower" transform="translate(0,50)">
                <animateTransform attributeName="transform" type="rotate" additive="sum" 
                                  begin="0s" dur="1.1s" repeatCount="indefinite" 
                                  values="-20; 100; -20" />

                <rect width="10" height="50" fill="#D2691E"/>
                
                <g id="leg-right-foot" transform="translate(0,50)">
                    <animateTransform attributeName="transform" type="rotate" additive="sum" 
                                      begin="0s" dur="1.1s" repeatCount="indefinite" 
                                      values="-10; 40; -10" />

                    <rect width="30" height="10" fill="blue" />
                </g>

          </g>  <!--leg-right-lower-->
        </g>  <!--leg-right-->
        
        <g id="arm-right" transform="translate(155,105)" >
            <animateTransform attributeName="transform" type="rotate" additive="sum"
                              begin="0s" dur="1.1s" repeatCount="indefinite" 
                              values="45; -45; 45" />
          
            <rect width="15" height="50" fill="#434275" />

            <g id="arm-right-lower" transform="translate(0,50)">
                <animateTransform attributeName="transform" type="rotate" additive="sum" 
                                  begin="0s" dur="1.1s" repeatCount="indefinite" 
                                  values="0 5,0; -120 5,0; 0 5,0" />

                <rect width="10" height="50" fill="#D2691E"/>
            </g>
          <g>
          </g>
        </g>  <!--arm-right-->

      </svg>
    </div>
    </div>

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

<style lang="scss">
	@import "~/assets/scss/order.scss";
</style>