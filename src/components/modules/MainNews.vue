/* eslint-disable no-new */
<template>
  <div class="mainNews">
    <div class="opacityContainer">

      <b-container class="eventLocation">
        <transition name="slide-fade">
          <h1 v-if="show" style="color: white; margin: 0 0 5% 0">{{caption}}</h1>
        </transition>

        <transition name="slide-fade2">
          <b-row v-if="show">

            <b-col class="eventInfoBlock" sm="4" xs="4">
              <div class="infoTime eventInfoImage eventInfoItem"></div>
              <div class="eventInfoText eventInfoItem">
                <p></p>
                <span>When</span>
                <p>{{eventDate}}</p>
              </div>
            </b-col>

            <b-col class="eventInfoBlock" sm="4" xs="4">
              <div class="infoLocation eventInfoImage eventInfoItem"></div>
              <div class="eventInfoText eventInfoItem">
                <p></p>
                <span>Where</span>
                <p>{{eventLocation}}</p>
              </div>
            </b-col>

            <b-col class="eventInfoBlock" sm="4" xs="4">
              <div class="eventInfoText eventInfoItem">
                <p></p>
                 <b-button href="#">Get Tickets</b-button>
              </div>
            </b-col>
            
          </b-row>
        </transition>

        <transition name="slide-fade3">
          <b-row style="margin-top: 20%;" v-if="show">

            <b-col class="eventDetailsImage" lg="6" md="12" sm="12" xs="12">
              <img src="../assets/pictures/FFVoidQuad.jpg" height="350px" />
            </b-col>

            <b-col class="eventDetailsText" lg="6" md="12" sm="12" xs="12">
              <div style="margin: 10% 0; text-align:left;">
                <h2>{{eventDetailsCaption}}</h2>
                <h6>
                  <i>{{eventDetailsComment}}</i>
                </h6>
                <p style="color:grey;">{{eventDetailsText}}</p>
              </div>
            </b-col>

          </b-row>
        </transition>

      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNews",
  data() {
    return {
      show: false,
      caption: "FRIEDLICH FEIERN X SCHALLINTERFERENZ",
      eventDate: "23:00, 4 OCT, 2019",
      eventLocation: "VOID CLUB, BERLIN, GERMANY",
      eventDetailsCaption: "EIN LANG ERWARTETES WIEDERSEHEN",
      eventDetailsComment:
        "FRIEDLICH FEIERN X SCHALLINTERFERNZ GEHT IN DIE VIERTE RUNDE.",
      eventDetailsText:
        "Lange war es still um beide Parteien, nachdem der Club M-Bia - die einstige Heimatstätte beider Labels - die Pforten geschlossen hat. Doch das Warten hat jetzt ein Ende. Am 4 Oktober 2019 starten Friedlich Feiern und SCHALLINTERFERENZ Records in die vierte Runde mit ihrer erfolgreiche Veranstaltungsreihe. Für ordentlichen Sound und ein dickes Lineup ist an dem Abend gesorgt. Auf zwei Floors wird Hardstyle/Hardcore/Rawstyle und Techno gespielt."
    };
  },
  methods: {
    startAnim() {
      this.show = !this.show;
    }
  },
  created() {
    setTimeout(this.startAnim, 900);
  }
};
</script>

<style scoped>
* {
  background-color: rgba(0, 0, 0, 0.274) !important;
}
.mainNews {
  background-image: url("../assets/videos/vid2.gif");
  background-repeat: no-repeat;
  background-size: auto;
  background-color: #000000;
  background-position: center 30%;
}
.opacityContainer {
  animation: 3s opinger cubic-bezier(0.39, 0.575, 0.565, 1);
}
@keyframes opinger {
  0%{
    background-color: rgb(0, 0, 0) !important;
  }
  100%{
    background-color: rgba(0, 0, 0, 0) !important;
  }
}
.eventLocation {
  color: white;
}
.eventInfoImage {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  opacity: 0.5;
  margin-right: 10px;
}
.infoTime {
  background-image: url(../assets/pictures/calendar.png);
}
.infoLocation {
  background-image: url(../assets/pictures/pin.png);
}
.eventInfoText {
  text-align: left !important;
  vertical-align: middle;
  font-size: 12px;
}
.eventInfoText > span {
  opacity: 0.5;
}
.eventInfoItem {
  display: inline-block;
  margin-top: 30px;
}

/*Animations*/

.slide-fade3-enter-active {
  transition: all 3s ease;
}
.slide-fade3-leave-active {
  transition: all 6s cubic-bezier(1.0, 1.0, 0.8, 1.0);
}
.slide-fade3-enter, .slide-fade-leave-to {
  transform: translateY(500px);
  opacity: 0;
}

.slide-fade2-enter-active {
  transition: all 3s ease;
}
.slide-fade2-leave-active {
  transition: all 6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade2-enter, .slide-fade-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(300px);
  opacity: 0;
}
</style>