<template>
  <div class="shop">
    <b-card
      bg-variant="dark"
      text-variant="white"
      style="margin-bottom: 10px !important;"
    > <h1>SHOP</h1>
    </b-card>

    <b-container fluid>
      <!--Row 1-->
      <b-row>
        <b-col class="e70 lef" sm="9" md="9" lg="9">
          <b-card bg-variant="dark" text-variant="white" title="Kategorie" class="filterKategorie">
            <b-row>
              <b-col cols="1">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >MUSIC</b-form-checkbox>
              </b-col>
              <b-col cols="1">
                <b-form-checkbox
                  id="checkbox-2"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >MERCH</b-form-checkbox>
              </b-col>
              <b-col cols="1">
                <b-form-checkbox
                  id="checkbox-3"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >PC</b-form-checkbox>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col class="e30 rig" sm="3" md="3" lg="3">
          <b-card
            bg-variant="dark"
            text-variant="white"
            title="Dienstleistungen"
            class="appsDienstl"
          >
            <b-card-text>With supporting text below as a natural lead-in to additional content.</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
      <!---->

      <!--Row 2-->
      <b-row>
        <b-col class="e70 lef" sm="9" md="9" lg="9">
          <b-container fluid style="margin-bottom:50px !important;">
            <b-row>
              <div v-for="art in kat" v-bind:key="art.ean_code">
                <div v-if="art.producttype != 'EP' && art.producttype != 'Album'">
                  <b-card
                    img-src="https://cdn.pixabay.com/photo/2015/09/13/19/50/treble-cleft-938643_960_720.jpg"
                    tag="article"
                    img-height="230px"
                    style="max-width: 18rem"
                    class="artikel"
                  >
                    <template v-slot:header>
                      <small class="text-muted" style="color: black !important;">Preis: {{pPtrack}} ,- €</small>
                    </template>
                    <template v-slot:footer>
                      <small class="text-muted" style="color: black !important;"><b-button variant="primary" v-on:click="hinzufuegenEKListe(art)">IN WARENKORB</b-button></small>
                    </template>

                    <b-card-text
                      style="color: black !important;"
                    >ARTIST: {{art.artist}} <br/>
                    TITEL: {{art.name}} ({{art.mixversion}})</b-card-text>
                  </b-card>
                </div>
              </div>
            </b-row>
          </b-container>
        </b-col>

        <b-col class="e30 rig" sm="3" md="3" lg="3">
          <b-card bg-variant="dark" text-variant="white" title="EINKAUFSWAGEN" class="filterGenre">
            <div v-for="el in ekliste" v-bind:key="el.id">
              <p style="border: 1px solid white;">{{el.name}} ({{el.ver}}) | {{el.preis}}</p>
            </div>
            <b-button size="sm" variant="warning" v-on:click="leeren()" style="margin-top: 10px; bottom: 0;">Einkaufswagen leeren</b-button>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title class="kaufenBtn">
            <div>
              <h1>Summe: {{this.gesamt}} ,- €</h1>
              <h2 style="color: white !important;">Steuern: {{this.gesSteuern}} ,- €</h2>
            </div>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title class="kaufenBtn">
            <div>
              <h1>GESAMT: {{this.summe}} ,- €</h1>
            </div>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" title class="kaufenBtn">
            <b-button variant="primary" v-on:click="kaufen()">KAUFEN</b-button>
          </b-card>

        </b-col>
      </b-row>
      <!---->
    </b-container>
  </div>
</template>

<script>
import kat from '../db/json/kat.json'

export default {
  name: "Shop",
  props: {
  },
  data() {
    return {
      ctr: 0,
      status: 0,
      gesamt: 0,
      summe: 0,
      gesSteuern: 0,
      steuerSatz: 42,
      pPtrack: 1,
      ekliste: [],
      kat,
    };
  },
  methods: {
    hinzufuegenEKListe: function (el) {
      let id = this.ctr + 1;
      let name = el.title;
      let preis = this.pPtrack;
      let ver = el.mixversion;
      let steuern = this.pPtrack * this.steuerSatz / 100;

      // preis += steuern

      this.gesSteuern += steuern;
      this.gesamt += preis;
      this.ctr += 1;

      this.summe = this.gesamt + this.gesSteuern;

      this.ekliste.push({
        id, name, preis, ver
      });
    },
    kaufen: function() {
      let url = "https://www.paypal.me/SCHALLINTERFERENZ/" + this.summe
      window.open( url, '_blank', null )
    },
    leeren: function() {
      this.gesamt = 0;
      this.gesSteuern = 0;
      this.summe = 0;
      this.ekliste = [];
    }
  }
};
</script>

<style scoped>
* {
  color: white !important;
}
h1 {
  font-size: 28px !important;
  color: white !important;
}
.artikel {
  height: 32em !important;
}
.e70 {
  width: 65% !important;
}
.e30 {
  width: 25% !important;
}
</style>