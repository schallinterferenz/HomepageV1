/* eslint-disable no-new */
<template>
  <div class="container">
    <ul id="timeline">
      <li v-for="items in LISTOFPOSTS" :key="items.beitragID">
        <div id="beitragsID">
          {{items.beitragID}}
        </div>
        <div>
          {{items.datum}}
        </div>
        {{items.author}}
        {{items.bild}}
        {{items.video}}
        {{items.likebutton}}
        {{items.kommentare}}
      </li>
    </ul>
  </div>
</template>

<script>
import json from "../../static/data/DB/posts/posts.json";

export default {
  name: "TimeLine",

  data() {
    LISTOFPOSTS = [id, listposts];

    return {
      active: true,
      myjson: json
    };
  },

  methods: {
    InitListOfPosts() {
      LISTOFPOSTS.listposts = ReadDataBase(json);
    },

    ReadDataBase(jsonFile) {
      var obj = JSON.parse(jsonFile);
      var lposts = [];

      for (i in obj.beitragID) {
        lposts += {
          beitragID : obj.beitragID,
          datum : obj.datum,
          author : obj.author,
          bild : obj.bild,
          video : obj.video,
          likebutton : obj.likebutton,
          kommentare : obj.kommentare,
          beitrag : obj.beitrag
        };
      }

      return lposts;
    }
  }
};
</script>

<style scoped>
</style>