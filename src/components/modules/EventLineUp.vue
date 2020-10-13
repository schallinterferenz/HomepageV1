<template>
  <b-container class="eventlineup">
    <b-row v-for="items in json" v-bind:key="items.name" class="eventLineUp" style="color: white; margin: 10% 0">
      <b-col lg="2" md="2" sm="12" xs="12" class="playtime">
        {{items.playtime}}
      </b-col>
      <b-col lg="3" md="3" sm="12" xs="12">
        <img src="../assets/pictures/FFVoidQuad.jpg" />
      </b-col>
      <b-col class="aristInfos" style="text-align:left" lg="7" md="7" sm="12" xs="12">
        <span style="color: rgb(0, 255, 0)">{{items.floor}}</span>
        <h2>{{items.name}}</h2>
        <h6><i>{{items.label}}</i></h6>
        <p>{{items.vita}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import json from '../db/pData/pdat'

/* eslint-disable no-new */
export default {
  name: "EventLineUp",
  data() {
    return {
      json
    };
  }
};
</script>

<style scoped>
* {
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0);
}

img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 100%;
}
.playtime {
  margin: 6% 0;
  background: black !important;
  padding: 1% 0;
}
.aristInfos {
  margin: 2% 0
}
.eventLineUp:hover > .playtime {
  animation: 2s slidePlaytime none;
}

@keyframes slidePlaytime {
  0% {
    background: black;
  }
  100% {
    background: green;
  }
}
</style>