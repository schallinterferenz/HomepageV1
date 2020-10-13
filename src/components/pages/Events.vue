<template>
  <div class="events">
    <b-card bg-variant="dark" text-variant="white" style="margin-bottom: 10px !important;">
      <h1>EVENTS</h1>
    </b-card>

    <b-container>
      <b-row>
        <b-col>
          <b-card
            img-src="https://cdn.pixabay.com/photo/2017/07/31/22/04/people-2561506_960_720.jpg"
            img-alt="Card image"
            img-left
            img-width="300px"
            class="mb-3"
          >
            <b-card-text>
              SCHALLINTERFERENZ ist bekannt für die extravagante Auswahl an Artists bekannt. Jeder für sich pflegt einen markanten Stil. Doch von allen
              Stilrichtungen die hier vertreten sind, spielt HardTechno eine treibende Rolle.
              Falls sie interessiert an der Vita des einzelnen Artists, oder an einem Booking des Künstlers, klicken sie auf "WEITER"
            </b-card-text>
          </b-card>

          <div v-for="el in arDat" :key="el.id">
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="https://picsum.photos/400/400/?image=20"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Horizontal Card">
                    <b-card-text>
                      This is a wider card with supporting text as a natural lead-in to additional content.
                      This content is a little bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Events",
};
</script>

<style scoped>
h1 {
  font-size: 28px !important;
  color: white !important;
}
</style>