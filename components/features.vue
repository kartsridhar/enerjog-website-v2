<template>
    <div class="main-container">

    <div class="services-section" :style="{ backgroundImage: 'url(' + require('@/assets/img/png/bg_2.jpeg') + ')' }">
      <div class="inner-width">
        <h1 class="section-title">Key Features</h1>
        <div class="border"></div>
        <div class="services-container">

          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-running"></i>
            </div>
            <div class="service-title">24/7 tracking &amp; workout mode</div>
            <div class="service-desc">
              Over 100 pre-loaded workout plans with Z-level tracking.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-moon"></i>
            </div>
            <div class="service-title">Sleep analysis</div>
            <div class="service-desc">
              Automatically tracks your sleep duration, consistency and comes with a silent alarm.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="service-title">Connected GPS</div>
            <div class="service-desc">
              Integrated with a high accuracy GPS, allowing you to map your runs without a phone.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-heartbeat"></i>
            </div>
            <div class="service-title">24/7 heart rate</div>
            <div class="service-desc">
              Monitor your heart rate variability and breathing rate with just a button click. 
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-bell"></i>
            </div>
            <div class="service-title">Smartphone notifications</div>
            <div class="service-desc">
              Universally compatible with all smartphones and tracks notifications.
            </div>
          </div>

          <div class="service-box">
            <div class="service-icon">
              <i class="fas fa-battery-three-quarters"></i>
            </div>
            <div class="service-title">Rechargeable battery</div>
            <div class="service-desc">
              Recharge the massive 5000 mAh battery simply through movement and exercise.
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
</template>

<style type="text/css">
.services-section{
  background-size: cover;
  padding: 60px 0;
}
.inner-width{
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  overflow: hidden;
}
.section-title{
  text-align: center;
  color: #ddd;
  text-transform: uppercase;
  font-size: 30px;
}
.border{
  width: 160px;
  height: 2px;
  background: #82ccdd;
  margin: 40px auto;
}
.services-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.service-box{
  max-width: 33.33%;
  padding: 10px;
  text-align: center;
  color: #ddd;
  cursor: pointer;
}

.service-icon{
  display: inline-block;
  width: 70px;
  height: 70px;
  border: 3px solid #82ccdd;
  color: #82ccdd;
  transform: rotate(45deg);
  margin-bottom: 30px;
  margin-top: 16px;
  transition: 0.3s linear;
}
.service-icon i{
  line-height: 70px;
  transform: rotate(-45deg);
  font-size: 26px;
}
.service-box:hover .service-icon{
  background: #82ccdd;
  color: #ddd;
}
.service-title{
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.service-desc{
  font-size: 14px;
}

@media screen and (max-width:960px) {
  .service-box{
    max-width: 45%;
  }
}

@media screen and (max-width:768px) {
  .service-box{
    max-width: 50%;
  }
}

@media screen and (max-width:480px) {
  .service-box{
    max-width: 100%;
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