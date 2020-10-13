/* eslint-disable no-new */
<template>
  <div class="artists">
    <b-container>
      <!--HeadText--->
      <b-row>
        <b-col>
          <b-card class="mb-3">
            <b-card-text>
              SCHALLINTERFERENZ ist bekannt für die extravagante Auswahl an
              Artists bekannt. Jeder für sich pflegt einen markanten Stil. Doch
              von allen Stilrichtungen die hier vertreten sind, spielt
              HardTechno eine treibende Rolle. Falls sie interessiert an der
              Vita des einzelnen Artists, oder an einem Booking des Künstlers,
              klicken sie auf "BUCHEN"
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <!--Middle--->
      <!----->

      <!--Artist Pictures--->
      <b-row style="padding-bottom: 10px">
        <b-col>
          <b-card>
            <h1> <b>LABELARTISTS</b></h1>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <div v-for="obj in arDat" v-bind:key="obj.aId">
          <div v-if="obj.type === 'l'">
            <b-col cols="12">
              <b-card img-top>
                <b-card-header>
                  <h2>
                    <b>{{ obj.name }}</b>
                  </h2>
                </b-card-header>

                <b-img
                  thumbnail
                  fluid
                  :src="obj.img"
                  width="313px"
                  height="300px"
                >
                </b-img>

                <b-card-title>
                  <h2>
                    <i>MAIN LABEL: </i><b>{{ obj.mainLabel }}</b>
                  </h2>
                </b-card-title>

                <b-card-sub-title>
                  <h2>
                    <i>Sub - Labels: </i><b>{{ obj.subLabel }}</b>
                  </h2>
                </b-card-sub-title>

                <b-card-body>
                  <b-card-text> </b-card-text>
                  <b-button variant="primary"> PROFIL </b-button>
                  <b-button variant="success"> BUCHEN </b-button>
                </b-card-body>
              </b-card>
            </b-col>
          </div>
          <br />
        </div>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import arDat from "../db/json/a.json";

export default {
  name: "Artists",
  data() {
    return {
      arDat,
    };
  },
};
</script>

<style scoped>
h1 > b{
  font-size: 24px !important;
  color: black !important;
}
h2 > b {
  font-size: 20px !important;
}
</style>