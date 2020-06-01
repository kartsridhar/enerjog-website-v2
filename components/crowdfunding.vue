<template>
    <div class="cfunding-container">
       <h1 class="heading-cfund">
            <center>
                CROWDFUNDING
            </center>
        </h1>

        <br>

        <div class="advertisement">
            <iframe src="https://player.vimeo.com/video/334738351" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>

        <div class="card">
            <div class="card-title">Standard: £10</div>
        
            <div class="icon">
                <img src="~/assets/img/png/standard_crowdfunding.png"/>
            </div><!--/icon-->
        
            <div class="card-info">
                <ul>
                    <li><span>2</span> Enerjog Merchandise</li>
                    <li><span>30%</span> off on next Enerjog</li>
                    <li><span>5,000+</span> Donations</li>
                </ul>
            </div><!--/card-info-->
    
            <a href="#" class="learn-btn">LEARN MORE</a>
        </div><!--/card-->

        <div class="card">
            <div class="card-title">Medium: £50</div>
        
            <div class="icon">
                <img src="~/assets/img/png/medium_crowdfunding.png"/>
            </div><!--/icon-->
        
            <div class="card-info">
                <ul>
                    <li><span>1</span> New Enerjog + Charger</li>
                    <li><span>70%</span> off on next Enerjog</li>
                    <li><span>9,000+</span> Donations</li>
                </ul>
            </div><!--/card-info-->
        
            <a href="#" class="learn-btn">LEARN MORE</a>
        
        </div><!--/card-->
        
        <div class="card">
        
            <div class="card-title">Elite: £100</div>
        
            <div class="icon">
                <img src="~/assets/img/png/elite_crowdfunding.png"/>
            </div><!--/icon-->
        
            <div class="card-info">
            <ul>
                <li><span>3</span> Customised Enerjogs</li>
                <li><span>1</span> Enerjog with your name</li>
                <li><span>2,000+</span> Donations</li>
            </ul>
            </div><!--/card-info-->
        
            <a href="#" class="learn-btn">LEARN MORE</a>
        
        </div><!--/card-->
        
    </div>
</template>

<style type="text/css">
    .cfunding-container {
    padding-top: 55px;
    padding-bottom: 40px;
    }

    .heading-cfund {
        font-size: 2.5em;
    }

    .card {
    background: rgb(217, 223, 233);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    margin: 50px 20px 20px 20px;
    width: calc(33.3333% - 40px);
    padding: 20px;
    text-align: center;
    color: white;
    float: left;
    }
    .card:nth-child(2) {
    margin: 20px 0px;
    width: 33.3333%;
    padding: 50px 20px;
    }
    .card .card-title {
    font-size: 25px;
    color: black;
    }
    .card .icon {
    margin: 50px 0;
    }
    .card .icon img {
    width: 200px;
    height: 200px;
    }
    .card .icon svg {
    width: 100px;
    height: 200px;
    }
    .card .card-info ul {
    padding: 0;
    margin: 20px 0 50px 0;
    list-style-type: none;
    }
    .card .card-info ul li {
    margin: 10px 0;
    font-size: 20px;
    color: black;
    }
    .card .card-info ul li span {
    border-bottom: 2px dotted #ac6707;
    color: black;
    font-size: 22px;
    }
    .card .learn-btn {
    display: block;
    background: #F6B352;
    color: black;
    padding: 15px 20px;
    margin: 20px 0;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.9);
    transition: all 200ms ease-in-out;
    text-decoration: none;
    }
    .card .learn-btn:hover {
    background: #F68657;
    }

    @media (max-width: 768px) {
    .card {
        margin: 10px 20px;
        width: calc(100% - 40px);
    }
    .card:first-child {
        margin-top: 20px;
    }
    }
    @media (max-width: 768px) {
    .card:nth-child(2) {
        margin: 10px 20px;
        width: calc(100% - 40px);
    }
    }

    @media screen and (max-width: 475px)
    {
        .heading-cfund
        {
            font-size: 2em;
        }
    }

    /*Video stuff */
    .advertisement
    {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
        height: 0;
    }

    .advertisement iframe 
    {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

</style>

<script>
export default {
    data(){
        return {}
    }
}
</script>