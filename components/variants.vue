<template>
    <div class="slide-container">
        <h1 class="variant-header">
            <center>
                VARIANTS
            </center>
        </h1>
        <div class="slider-wrapper">
            <div class="slider">
                <input type="radio" name="slider" class="trigger" id="one" />
                <div class="slide" :style="{ backgroundImage: 'url(' + require('@/assets/img/screenshots/enerjog_colour_blue.jpg') + ')' }">
                </div><!-- .slide -->
                <input type="radio" name="slider" class="trigger" id="two" />
                <div class="slide" :style="{ backgroundImage: 'url(' + require('@/assets/img/screenshots/enerjog_colour_cyan.jpg') + ')' }">
                </div><!-- .slide -->
                <input type="radio" name="slider" class="trigger" id="three" />
                <div class="slide" :style="{ backgroundImage: 'url(' + require('@/assets/img/screenshots/enerjog_colour_pink.jpg') + ')' }">
                </div><!-- .slide -->
                <input type="radio" name="slider" class="trigger" id="four" checked="checked"/>
                <div class="slide" :style="{ backgroundImage: 'url(' + require('@/assets/img/screenshots/enerjog_colour_purple.jpg') + ')' }">
                </div><!-- .slide -->
                <input type="radio" name="slider" class="trigger" id="five" />
                <div class="slide" :style="{ backgroundImage: 'url(' + require('@/assets/img/screenshots/enerjog_colour_black_full.jpg') + ')' }">
                </div><!-- .slide -->
            </div><!-- .slider -->
        <ul class="slider-nav">
            <li class="slider-nav__item"><label id="c1" class="slider-nav__label" for="one"></label></li>
            <li class="slider-nav__item"><label id="c2" class="slider-nav__label" for="two"></label></li>
            <li class="slider-nav__item"><label id="c3" class="slider-nav__label" for="three"></label></li>
            <li class="slider-nav__item"><label id="c4" class="slider-nav__label" for="four"></label></li>
            <li class="slider-nav__item"><label id="c5" class="slider-nav__label" for="five"></label></li>
        </ul><!-- .slider-nav -->
        </div><!-- .slider-wrapper -->
    </div>
</template>

<style type="text/css">

    .slide-container
    {   
        padding-top: 55px;
        padding-bottom: 100px;
    }

    .variant-header
    {
        font-size: 2.5em;
    }

    .trigger {
    display: none;
    }

    .slider, .slider-wrapper {
    position: relative;
    height: 250px;
    }

    .slide {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    width: 100%;
    overflow: hidden;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    opacity: 0;
    transition: opacity .5s ease-in-out;
    }

    .trigger:checked + .slide {
    z-index: 999;
    opacity: 1;
    }

    .slider-nav {
    width: 100%;
    text-align: center;
    margin: 3rem 0;
    }

    .slider-nav__item {
    display: inline-block;
    }

    .slider-nav__label {
    font-size: 13px;
    display: block;
    height: 3em;
    line-height: 3em;
    width: 3em;
    text-align: center;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    transition: background-color .25s, color .25s ease-in-out;
    }

    #c1
    {
        background-color: rgb(127, 138, 156);
    }

    #c2
    {
        background-color: rgb(173, 225, 221);
    }

    #c3
    {
        background-color: rgb(233, 207, 208);
    }

    #c4
    {
        background-color: rgb(176, 141, 165);
    }

    #c5
    {
        background-color: rgb(62, 62, 62);
    }

    .slider-nav__label:hover,
    .slider-nav__label:active,
    .slider-nav__label:focus {
        filter: brightness(90%);
    }

    @media screen and (min-width: 1258px) {
    .slider, .slider-wrapper {
        height: 700px;
    }
    }

    @media screen and (min-width: 1024px) {
    .slider, .slider-wrapper {
        height: 500px;
    }
    }

    @media screen and (max-width: 1023px) and (min-width: 768px) {
    .slider, .slider-wrapper {
        height: 390px;
    }
    }

    @media screen and (max-width: 475px)
    {
        .variant-header
        {
            font-size: 2em;
        }
    }
</style>

<script>
export default {
    data(){
        return {}
    }
}
</script>