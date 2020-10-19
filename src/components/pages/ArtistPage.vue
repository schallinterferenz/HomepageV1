<template>
  <div class="artistpage">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-card>
            <h1>
              <b>{{ artist.name }}</b>
            </h1>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col style="padding-top: 2%" sm="12" md="12" lg="4">
          <b-card>
            <b-card-img :src="artist.img"></b-card-img>
          </b-card>
        </b-col>
        <b-col style="padding-top: 2%" sm="12" md="12" lg="8">
          <b-card text-variant="left">
            <b-card-body>
              <b-card-text>
                <h2><b>VITA</b></h2>
                <br />
                {{ artist.vita }}
              </b-card-text>
              <br />
              <br />

              <div v-if="artist.booking == true" style="padding: 2%; background: black">
                <b-button variant="success">ARTIST BUCHEN</b-button>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col style="padding-top: 2%" sm="12" md="12" lg="8">
          <b-card text-variant="left">
            <b-card-body>
              <b-card-text>
                <b>CLUB REFERENCES</b>
                <br />
                <br />
                {{ artist.references }}
              </b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col style="padding-top: 2%" sm="12" md="12" lg="4">
          <b-card text-variant="left">
            <b-card-body>
              <b-card-text>
                <b>EVENTS</b>
                <br />
                <br />
                {{ artist.references }}
              </b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col style="padding-top: 2%" cols="12">
          <b-card text-variant="left">
            <b-card-header>
              <b>LINKS</b>
            </b-card-header>
            <b-card-sub-title>
              <br /><br />
              Visit the artist on following Pages
            </b-card-sub-title>
            <b-card-body>
              <a :href="artist.soundcloud">
                <img
                  src="/static/pictures/ico/sc.png"
                  style="width: 32px !important"
                />
                SOUNDCLOUD
              </a>
              <a :href="artist.facebook">
                <img
                  src="/static/pictures/ico/fb.png"
                  style="width: 32px !important"
                />
                FACEBOOK
              </a>
              <a
                :href="artist.youtube"
              >
                <img
                  src="/static/pictures/ico/yt.png"
                  style="width: 32px !important"
                />
                YOUTUBE
              </a>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import globals from "../../global.utils";

export default {
  name: "ArtistPage",
  data() {
    return {
      artist: globals.selectedArtist,
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 > b {
  font-size: 28px !important;
  color: black !important;
}
h2 > b{
  font-size: 20px !important;
}
.artistpage {
  min-height: 100vh;
}
</style>