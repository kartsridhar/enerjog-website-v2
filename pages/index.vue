<template>
    <client-only>
        <div>
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" contents="ie-edge"/>
                <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
                <title>Enerjog: The Revolutionary Fitness Tracker</title>
            </head>
            <body>
                <!-- <Adding the header> -->
                <header class="main-header" v-bind:class="{ 'fixed-header': fixedOnScroll }">
                    <div class="logo">
                    <a href="#"><img src="~/assets/img/png/logo.png" alt="" style="width: 140px;"></a>
                    </div>
                
                    <input type="checkbox" class="menu-btn" id="menu-btn">
                    <label for="menu-btn" class="menu-icon">
                    <span class="menu-icon__line"></span>
                    </label>
                
                    <ul class="nav-links">
                        <li class="nav-link">
                            <a href="#features" v-smooth-scroll>Features</a>
                        </li>
                        <li class="nav-link">
                            <a href="#specs" v-smooth-scroll>Specs</a>
                        </li>
                        <li class="nav-link">
                            <nuxt-link to="/order">Order</nuxt-link>
                        </li>
                        <li class="nav-link">
                            <a href="#crowdfunding" v-smooth-scroll>Crowdfunding</a>
                        </li>
                    </ul>
                </header>

                <!-- <Adding the main section> -->
                <main>
                    <!-- <Adding introductory section> -->
                    <section class="presentation">
                        <div class="introduction">
                            <div class="intro-text">
                                <h1>Introducing Enerjog</h1>
                                <p>The revolutionary wearable device that charges your battery through movement and exercise.</p>
                            </div>
                            <div class="call-to-action">
                                <img src="~/assets/img/png/combined_download.png" class="cta-google"/>
                            </div>
                        </div>
                        <div class="cover-photo">
                            <img class="enerjog-both" src="~/assets/img/png/enerjog_both.png" alt="enerjog_both">
                        </div>
                    </section>

                    <!-- <Adding some svg backgrounds> -->
                    <img class="big-circle" src="~/assets/img/svg/big_circle.svg" alt=""/>
                    <img class="med-circle" src="~/assets/img/svg/med_circle.svg" alt=""/>
                    <img class="small-circle" src="~/assets/img/svg/small_circle.svg" alt=""/>
                    <div class="arrow bounce"></div>
                    <div id="app"></div>
                </main>
                
                <section id="features">
                    <features/>
                </section>
                
                <section id="specs">
                    <specifics/>
                </section>

                <section id="variants">
                    <variants/>
                </section>

                <section id="about">
                    <about/>
                </section>
        
                <section id="crowdfunding">
                    <crowdfunding/>
                </section>

                <section id="contact">
                    <contact/>
                </section>

            </body>
        </div>
    </client-only>
</template>

<style lang="scss">
    @import "~/assets/scss/index.scss";
</style>

<script>
import features from '~/components/features'
import specifics from '~/components/specifics'
import variants from '~/components/variants'
import about from '~/components/about'
import contact from '~/components/contact'
import crowdfunding from '~/components/crowdfunding'
import Vue from 'vue'

import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(vueSmoothScroll)

export default {
    data: function () {
        return {
            fixedOnScroll: false
        }
    },
    methods: {
        handleScroll () {
            if (window.scrollY > 10) {
                this.fixedOnScroll = true
                document.querySelector('.main-header').classList.add('scrolled')
            }
            else {
                this.fixedOnScroll = false
                document.querySelector('.main-header').classList.remove('scrolled');
            }
        }
    },
    created () {
        if(process.browser) {
            window.addEventListener('scroll', this.handleScroll)
        }
    },
    beforeUpdate () {
        if(process.browser) {
            window.addEventListener('scroll', this.handleScroll)
        }
    },
    components:{
        features,
        specifics,
        about,
        variants,
        contact,
        crowdfunding,
    }
}
</script>