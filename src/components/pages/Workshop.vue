<template>
  <div class="workshop">
    <b-container fluid>
      <b-row class="angebote">
        <!--Links-->
        <b-col sm="12" md="12" lg="9">
          <b-row class="presseText">
            <b-col style="text-align: left;">
              <div>
                <b-card title="KURSANGEBOT" sub-title="Die Kurse finden in Einzelunterricht statt">
                  <b-card-text>
                    Vor Ort werden ihnen die Inhalte von WOSHI und NWLT vermittelt.
                    Durch unsere perfekt strukturierten Kursinhalte und Lehrgänge,
                    vermitteln wir ihnen effektiv den Einstieg in das Leben eines Musik Produzenten.
                    Erlernen sie bei uns den richtigen Umgang mit digitalen und
                    analogen (Controller) Geräten und finden sie leicht Einstieg in die Welt von Ableton.
                  </b-card-text>

                  <b-card-text>Alle Kurse werden aufgenommen (Bildschirmaufnahme und Mikrofon). Nach Beendiung eines Kurses, erhalten sie ein Video mit allen durchgenommenen Inhalten als Mediendatei dazu.</b-card-text>
                </b-card>
              </div>
            </b-col>
          </b-row>

          <b-row class="kursAngebote">
            <b-col sm="12" md="9" lg="4" class="einsteiger pic20">
              <b-card
                title="EINSTEIGERKURS"
                img-src="https://cdn.pixabay.com/photo/2015/12/27/05/48/turntable-1109588_960_720.jpg"
                img-alt="Image"
                img-top
                img-height="238px"
                tag="article"
                style
                class="angebot pic20"
              >
                <b-card-text>Im Einsteiger Kurs lernen sie den Umgang mit einer DAW kennen und das Anfertigen eines Musik Stücks kennen. <br> (Nicht für Fortgeschrittene)</b-card-text>

                <b-button
                  href="https://www.paypal.me/SCHALLINTERFERENZ/120"
                  variant="primary"
                >BUCHEN</b-button>
              </b-card>
            </b-col>

            <b-col sm="12" md="9" lg="4" class="fort pic20">
              <b-card
                title="Fortgeschrittenen Kurs"
                img-src="https://cdn.pixabay.com/photo/2016/11/18/15/01/piano-1835179_960_720.jpg"
                img-alt="Image"
                img-top
                img-height="238px"
                tag="article"
                style
                class="angebot pic20"
              >
                <b-card-text>In dem Fortgeschrittenen Kurs erlernen sie tiefer gehenden Umgang mit Ableton. <br> Infos zu den Inhalten, werden ihnen auf Anfrage gestellt.</b-card-text>

                <b-button
                  href="https://www.paypal.me/SCHALLINTERFERENZ/300"
                  variant="primary"
                >BUCHEN</b-button>
              </b-card>
            </b-col>

            <b-col sm="12" md="3" lg="4" class="live pic20">
              <b-card
                title="Liveset Kurs"
                img-src="https://cdn.pixabay.com/photo/2015/04/13/13/37/dj-720589_960_720.jpg"
                img-alt="Image"
                img-top
                img-height="238px"
                tag="article"
                style
                class="angebot pic20"
              >
                <b-card-text>In diesem Kurs erlernen sie die Umgang mit der Ableton Push 2 und wie sie ein Liveset schnell und einfach mit wenig Gerätschaften erschaffen.</b-card-text>

                <b-button
                  href="https://www.paypal.me/SCHALLINTERFERENZ/250"
                  variant="primary"
                >BUCHEN</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <!---->

        <!--Rechts-->
        <b-col class="news" sm="12" md="12" lg="3">
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
      </b-row>
    </b-container>
  </div>
</template>

<script>
import news from "../db/json/newsWork.json";

export default {
  name: "WorkShops",
  props: [],
  data() {
    return {
      news,
    };
  },
};
</script>

<style scoped>
* {
  color: black;
}
h1 {
  font-size: 28px !important;
  color: white !important;
}
.kursAngebote {
  padding-top: 2.5%;
}
.pic20 {
  min-height: 490px !important;
}
.news {
  background: black !important;
  padding-top: 2.5%;
}
.workshop {
  padding-bottom: 20%;
}
.angebote {
  padding-top: 2.5%;
}
</style>