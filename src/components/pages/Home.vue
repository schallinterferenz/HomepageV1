<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <!--Karusell-->
        <b-col lg="8">
          <div>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Slides with custom text -->
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-50"
                    width="1024"
                    height="480"
                    src="/static/pictures/va/va2.png"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-50"
                    width="1024"
                    height="480"
                    src="/static/pictures/va/va1.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-50"
                    width="1024"
                    height="480"
                    src="/static/pictures/va/va3.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-50"
                    width="1024"
                    height="480"
                    src="/static/pictures/va/va4.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-50"
                    width="1024"
                    height="480"
                    src="/static/pictures/va/va5.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-50"
                    width="1024"
                    height="480"
                    src="/static/pictures/va/va6.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-50"
                    width="1024"
                    height="480"
                    src="/static/pictures/va/va4.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-50"
                    width="1024"
                    height="480"
                    src="/static/pictures/va/va7.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-50"
                    width="1024"
                    height="480"
                    src="/static/pictures/va/va8.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-50"
                    width="1024"
                    height="480"
                    src="/static/pictures/va/va9.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-50"
                    width="1024"
                    height="480"
                    src="/static/pictures/va/va10.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
        <!---->

        <!--Nachrichten-->
        <b-col class="news" sm="12" md="12" lg="4">
          <b-row>
            <b-col>
              <h1>NEWS</h1>
              <h1>_________</h1>
            </b-col>
          </b-row>

          <div class="rahmen">
            <div v-for="el in news" v-bind:key="el.n">
              <b-row class="newsElements" style="text-align: left; margin: 1% !important;">
                <b-col class="newsText" cols="9">
                  <h3
                    style="color:white !important; font-size: 18px !important; margin-top: 5px !important;"
                  >{{el.title}}</h3>
                  <p>
                    <i style="color:white !important;">{{el.text}}</i>
                  </p>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
        <!---->

        <!--Willkommen & Player-->

        <b-col class="willkommen" sm="12" md="12" lg="8">
          <b-row>
            <b-col style="text-align: left;" sm="4" md="4" lg="4">
              <div class="player">
                <b-card title="Alle Releases">
                  <iframe
                    width="100%"
                    height="233"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/704684868&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  ></iframe>
                  <div
                    style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
                  ></div>
                </b-card>
              </div>
            </b-col>

            <b-col style="text-align: left;" sm="8" md="8" lg="8">
              <div>
                <b-card title="WILLKOMMEN" sub-title="bei SCHALLINTERFERENZ Records">
                  <b-card-text>Label Homepage von SCHALLINTERFERENZ Records Berlin</b-card-text>

                  <b-card-text>
                    Ihr Ansprechpartner für Releases und Events in Deutschland.
                    <br />
                    <br />
                  </b-card-text>

                  <b-row>
                    <b-col>
                      <a href="https://www.traxsource.com/label/41265/SCHALLINTERFERENZ-records">
                        <img src="/static/pictures/ico/txsc.png" style="width:32px !important" /> TRAXSOURCE
                      </a>
                      <br />
                      <a href="https://www.beatport.com/label/SCHALLINTERFERENZ-records/73307">
                        <img src="/static/pictures/ico/btpt.png" style="width:32px !important" /> BEATPORT
                      </a>
                      <br />
                      <a
                        href="https://www.junodownload.com/search/?facet%5Blabel_facet%5D%5B%5D=SCHALLINTERFERENZ"
                      >
                        <img src="/static/pictures/ico/jd.png" style="width:32px !important" /> YUNO Music
                      </a>
                      <br />
                      <a href="https://soundcloud.com/SCHALLINTERFERENZrecords">
                        <img src="/static/pictures/ico/sc.png" style="width:32px !important" /> SOUNDCLOUD
                      </a>
                      <br />
                    </b-col>
                    <b-col>
                      <a href="https://www.facebook.com/SCHALLINTERFERENZ">
                        <img src="/static/pictures/ico/fb.png" style="width:32px !important" /> FACEBOOK
                      </a>
                      <br />
                      <a href="https://www.youtube.com/channel/UCBY9DR6Vmp2Gq58FLoe8M4Q">
                        <img src="/static/pictures/ico/yt.png" style="width:32px !important" /> YOUTUBE
                      </a>
                      <br />
                      <a href="https://www.instagram.com/SCHALLINTERFERENZ.official/">
                        <img src="/static/pictures/ico/insta.png" style="width:32px !important" /> INSTAGRAM
                      </a>
                      <br />
                    </b-col>
                  </b-row>
                </b-card>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <!---->

        <!--Angebote-->
        <b-col class="angebote" sm="12" md="12" lg="8">
          <b-row class="links">
            <b-col sm="12" md="12" lg="4">
              <b-card title="Workshops" tag="article" style="max-width: 30rem;" class="mb-2">
                <b-card-text>Hier geht es zu unseren Ableton Workshops.</b-card-text>

                <b-button href="#/workshops" variant="primary">Zu den Workshops</b-button>
              </b-card>
            </b-col>

            <b-col sm="12" md="12" lg="4">
              <b-card title="Releasing" tag="article" style="max-width: 30rem;" class="mb-2">
                <b-card-text>Interesse deine Werke zu veröffentlichen?</b-card-text>

                <b-button href="#/release" variant="primary">Weiter</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <!---->
      </b-row>
    </b-container>
  </div>
</template>

<script scoped>
import news from "../db/json/newsMain.json";

export default {
  name: "Home",
  data() {
    return {
      news,
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
img {
  width: 50%;
  margin: auto;
}
h1 {
  font-size: 28px !important;
  color: white !important;
}
.links {
  margin-top: 3%;
  padding-top: 10px;
}
.news {
  background: black !important;
  padding-top: 2.5%;
}
#carousel-1 {
  background: rgba(0, 0, 0, 0) !important;
  color: white !important;
  padding-top: 10px;
  padding-right: 2.5%;
}
.angebote {
  padding-bottom: 2.5%;
}
.player {
  padding-bottom: 2.5%;
}
.willkommen {
  padding-top: 2.5%;
}
.home{
  padding-bottom: 20%;
}
</style>
