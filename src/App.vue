<template>
  <div id="app">
    <!--Nav-->
    <div>
      <b-alert show dismissible>
        Diese Seite benutzt Cookies von Drittanbietern wie Soundcloud, Facebook, Google. Bei weiterer Benutzung der Website, stimmen sie der Anwendung von Cookies zu! <b>&rArr;</b>
      </b-alert>
    </div>

    <b-navbar toggleable="lg" type="dark" variant="info" id="navBarMain">
      <b-navbar-brand
        href
        style="color: white !important; font-size: 28px !important"
        >SCHALLINTERFERENZ</b-navbar-brand
      >

      <!---->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!---->
          <b-nav-item>
            <router-link to="/" style="color: #00ff08 !important"
              >HOME</router-link
            >
          </b-nav-item>

          <b-nav-item>
            <router-link to="/workshops" style="color: #00ff08 !important"
              >WORKSHOPS</router-link
            >
          </b-nav-item>

          <b-nav-item>
            <router-link to="/release" style="color: #00ff08 !important"
              >RELEASE</router-link
            >
          </b-nav-item>

          <!---<b-nav-item>
            <router-link to="/shop" style="color: #00ff08 !important;">SHOP</router-link>
          </b-nav-item>-->

          <b-nav-item>
            <router-link to="/artists" style="color: #00ff08 !important"
              >ARTISTS</router-link
            >
          </b-nav-item>

          <!--<b-nav-item disabled>
            <router-link to="/events" style="color: #00ff08 !important;">EVENTS</router-link>
          </b-nav-item>-->

          <b-nav-item>
            <router-link to="/aboutus" style="color: #00ff08 !important"
              >ABOUT US</router-link
            >
          </b-nav-item>

          <b-nav-item>
            <router-link to="/impressum" style="color: #00ff08 !important"
              >IMPRESSUM</router-link
            >
          </b-nav-item>

          <b-nav-item>
            <div id="sideBarMain">
              <b-button v-b-toggle.sidebar-right>LOGIN</b-button>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!---->

    <!--SidBar-->
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <!-- <div class="top">
          <div
            class="playerGallery"
            style="width: 100% !important; margin-top: 5% !important"
          >
            <b-img
              src="https://picsum.photos/500/500/?image=54"
              fluid
              thumbnail
            ></b-img>
          </div>

          <div
            class="playerText"
            style="width: 100% !important; margin-top: 5% !important"
          >
            <p style="color: white !important; margin-top: 10px !important">
              Sie hören:
            </p>
            <p style="color: white !important; margin-top: 10px !important">
              ARTIST:
            </p>
            <p style="color: white !important; margin-top: 10px !important">
              Released on:
            </p>
          </div>
        </div> -->

        <Login />

        <!-- <div
          class="bottom"
          style="
            width: 100% !important;
            position: fixed !important;
            bottom: 0 !important;
          "
        >
          <div class="scPlayer">
            <iframe
              width="100%"
              height="100"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/802641415&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div
              style="
                font-size: 10px;
                color: #cccccc;
                line-break: anywhere;
                word-break: normal;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-family: Interstate, Lucida Grande, Lucida Sans Unicode,
                  Lucida Sans, Garuda, Verdana, Tahoma, sans-serif;
                font-weight: 100;
              "
            >
              <a
                href="https://soundcloud.com/artcoretechno"
                title="ARTCØRE [TECHNO]"
                target="_blank"
                style="color: #cccccc; text-decoration: none"
                >ARTCØRE [TECHNO]</a
              >
              ·
              <a
                href="https://soundcloud.com/artcoretechno/neowelt-antrazit-artcore-techno-rmx-freedownload"
                title="Neowelt - Antrazit _ARTCØRE [TECHNO] rmx FREEDOWNLOAD"
                target="_blank"
                style="color: #cccccc; text-decoration: none"
                >Neowelt - Antrazit _ARTCØRE [TECHNO] rmx FREEDOWNLOAD</a
              >
            </div>
          </div>

          <b-button
            v-b-toggle.sidebar-right
            style="width: 100% !important; margin-top: 2% !important"
            >CLOSE</b-button
          >
        </div> -->
      </div>
    </b-sidebar>
    <!---->

    <!--Main-->
    <router-view />
    <!---->

    <!--Footter-->
    <b-container
      style="position: fixed; bottom: 0; max-width: 100%"
      class="footer"
    >
      <b-row>
        <!---->
        <b-col cols="3">
          <router-link to="/aboutus" style="font-size: 12px !important"
            >About Us</router-link
          >
          <router-link to="/impressum" style="font-size: 12px !important"
            >| Kontakt</router-link
          >
          <router-link to="/workshops" style="font-size: 12px !important"
            >| Workshops</router-link
          >
          <!--<router-link to="/artists" style="font-size: 12px !important;">Artists</router-link>-->
        </b-col>
        <!---->
        <b-col cols="6"></b-col>
        <b-col cols="3">
          <a href="https://www.instagram.com/SCHALLINTERFERENZ.official/">
            <img
              src="/static/pictures/ico/insta.png"
              style="width: 20px !important"
            />
          </a>

          <a href="https://www.facebook.com/SCHALLINTERFERENZ">
            <img
              src="/static/pictures/ico/fb.png"
              style="width: 20px !important"
            />
          </a>

          <a href="https://soundcloud.com/SCHALLINTERFERENZrecords">
            <img
              src="/static/pictures/ico/sc.png"
              style="width: 20px !important"
            />
          </a>

          <a href="https://www.youtube.com/channel/UCBY9DR6Vmp2Gq58FLoe8M4Q">
            <img
              src="/static/pictures/ico/yt.png"
              style="width: 20px !important"
            />
          </a>

          <a
            href="https://www.traxsource.com/label/41265/SCHALLINTERFERENZ-records"
          >
            <img
              src="/static/pictures/ico/txsc.png"
              style="width: 20px !important"
            />
          </a>

          <a
            href="https://www.beatport.com/label/SCHALLINTERFERENZ-records/73307"
          >
            <img
              src="/static/pictures/ico/btpt.png"
              style="width: 20px !important"
            />
          </a>

          <a
            href="https://www.junodownload.com/search/?facet%5Blabel_facet%5D%5B%5D=SCHALLINTERFERENZ"
          >
            <img
              src="/static/pictures/ico/jd.png"
              style="width: 20px !important"
            />
          </a>
        </b-col>
      </b-row>
    </b-container>
    <!---->
  </div>
</template>

<script>
import "howler";
import Login from "./components/modules/Login";
import Vue from "vue";

export const ModalBus = new Vue();

export default {
  name: "App",
  components: {
    Login,
  },
  props: {
    ctrack: String,
    tname: String,
    artist: String,
    tduration: String,
  },
  created() {},
  data() {
    return {
      tracks: [
        {
          tID: 0,
          tSrc: "mFiles/01_N-Dye - Der Tod kommt (Original Mix).wav",
          img: "",
          price: 1,
          rbtGrp: 0,
        },
      ],
    };
  },
  methods: {
    created: () => {},
  },
};
</script>

<style>
* {
  font-size: 14px !important;
  color: black;
}
a {
  font-size: 18px !important;
  text-decoration: none !important;
}
#app {
  background-color: rgb(0, 0, 0) !important;
  background-image: url("/static/pictures/SIRDIGMEDIA1920.jpg");
  background-size: 100% !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
#navBarMain {
  background-color: black !important;
}
#sidebar-right {
  width: 23em !important;
  background-color: black !important;
  color: white !important;
  /* float:right; */
}
.footer {
  background: rgb(0, 0, 0);
  padding-top: 10px !important;
}
.scPlayer {
  width: 100% !important;
  margin: 5% !important;
}
</style>
