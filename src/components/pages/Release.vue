<template>
  <div class="release">
    <b-container fluid>
      <b-row>
        <b-col>
          <div>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="rgba(0,0,0,0)"
              img-width="1024"
              img-height="512"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
              text-variant="white"
            >
              <!-- Slides with custom text -->
              <b-carousel-slide>
                <template v-slot:img>
                  <img class="d-block img-fluid" src="/static/pictures/cov/c1.jpg" alt="image slot" />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img class="d-block img-fluid" src="/static/pictures/cov/c2.jpg" alt="image slot" />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img class="d-block img-fluid" src="/static/pictures/cov/c3.jpg" alt="image slot" />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img class="d-block img-fluid" src="/static/pictures/cov/c4.jpg" alt="image slot" />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img class="d-block img-fluid" src="/static/pictures/cov/c6.jpg" alt="image slot" />
                </template>
              </b-carousel-slide>

              <b-carousel-slide>
                <template v-slot:img>
                  <img class="d-block img-fluid" src="/static/pictures/cov/c7.jpg" alt="image slot" />
                </template>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
        <b-col>
          <div class="info">
            <b-card class="mb-3" text-variant="left">
              <b-card-text>
                Du hast Interesse an einem Release?
                <br />
                <br />Durch unser Kooperation mit 32 Shops - darunter Beatport, Tracksource, Media Markt, Saturn, Apple Musik,
                Amazon Musik, uvm - ermöglichen wir dir eine weltweite Vertriebsmöglichkeit deiner Tracks.
                <br />
                <br />SCHALLINTERFERENZ Records bietet außerdem die Produktion von CDs und Vinyls an.
                Für mehr Informationen, schreiben sie uns eine E-Mail an:
                <br />
                <br />

                <h4>E-Mail: <b>demo@SCHALLINTERFERENZ.de</b></h4>
              </b-card-text>

              <a href="https://www.traxsource.com/label/41265/SCHALLINTERFERENZ-records">
                        <img src="/static/pictures/ico/txsc.png" style="width:32px !important" /> TRAXSOURCE
                      </a>
                      <a href="https://www.beatport.com/label/SCHALLINTERFERENZ-records/73307">
                        <img src="/static/pictures/ico/btpt.png" style="width:32px !important" /> BEATPORT
                      </a>
                      <a
                        href="https://www.junodownload.com/search/?facet%5Blabel_facet%5D%5B%5D=SCHALLINTERFERENZ"
                      >
                        <img src="/static/pictures/ico/jd.png" style="width:32px !important" /> YUNO Music
                      </a>
                      
            </b-card>

            <!--<b-card class="mb-3" text-variant="left">

              <div v-if="!sent" class="formGroup">
                <b-form @submit="onSubmit">
                  <b-form-input
                    id="input-name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Name"
                  /><br>
                  <b-form-input
                    id="input-name"
                    v-model="form.msg"
                    type="text"
                    required
                    placeholder="Nachricht"
                  /><br>
                  <b-form-input
                    id="input-name"
                    v-model="form.email"
                    type="text"
                    required
                    placeholder="Deine Email"
                  />
                  <br>
                  <b-button type="submit">Contact</b-button>
                </b-form>

              </div>
            </b-card>-->
          </div>
        </b-col>
      </b-row>

      <b-row style="padding-top:2.5%">
        <b-col>
          <iframe src="https://embed.beatport.com/?id=12096553&type=track" width="100%" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
          <iframe src="https://embed.beatport.com/?id=11530780&type=track" width="100%" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
          <iframe src="https://embed.beatport.com/?id=13575144&type=track" width="100%" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
        </b-col>
        <b-col>
          <iframe src="https://embed.beatport.com/?id=11537989&type=track" width="100%" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
          <iframe src="https://embed.beatport.com/?id=12089996&type=track" width="100%" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
          <iframe src="https://embed.beatport.com/?id=12089661&type=track" width="100%" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
        </b-col>
        <b-col>
          <iframe src="https://embed.beatport.com/?id=13011761&type=track" width="100%" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
          <iframe src="https://embed.beatport.com/?id=12089730&type=track" width="100%" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
          <iframe src="https://embed.beatport.com/?id=13575286&type=track" width="100%" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import 'axios'
const querystring = require("querystring");

export default {
  name: "Release",
  data() {
    return {
      sent: false,
      form: {
        name: "",
      },
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$axios
        .post(
          "/static/mail.php",
          querystring.stringify(this.form)
        )
        .then((res) => {
          this.sent = true;
        });
    },
  },
};
</script>

<style scoped>
h4 {
  font-size: 20px !important;
}
img {
  width: 50%;
  margin: auto;
}
.release {
  padding-bottom: 20%;
}
.info {
  padding-top: 2.5% !important;
}
</style>