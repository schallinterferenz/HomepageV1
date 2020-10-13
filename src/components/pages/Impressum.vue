<template>
  <div class="impressum">
    <b-container>
      <b-row>

        <b-col style="padding-top: 2%" sm="12" md="12" lg="6">
          <iframe
            width="520"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Gro%C3%9Fbeerenstr.%2015%20Berlin+(SCHALLINTERFERENZ%20Records)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </b-col>

        <b-col sm="12" md="12" lg="6">
          <b-card class="mb-3" text-variant="left">
            <b-card-text>
              Angaben gemäß § 5 TMG
              <br />
              <br />SCHALLINTERFERENZ Records
              <br />Großbeerenstraße 6
              <br />10963 Berlin
              <br />
              <br />Vertreten durch:
              <br />Eduard Bäcker, Michael Worscheck
              <br />
              <br />Kontakt:
              <br />Telefon: +49 8342 9194084
              <br />Fax: ---
              <br />E-Mail: info@SCHALLINTERFERENZ.de
              <br />
              <br />StNr: 14/214/04289
              <br />
              <br />Haftungsausschluss:
              <br />
              <br />Haftung für Inhalte
              <br />
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Impressum",
  data() {
    return {};
  },
};
</script>

<style>
h1 {
  font-size: 28px !important;
  color: white !important;
}
</style>