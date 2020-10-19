<template>
  <div class="login">
    <b-form>
      <b-form-text style="font-size: 20px !important; color: white !important">
        Du willst deine Musikerkarriere auf ein höheres Level bringen?<br /><br />
      </b-form-text>
      <b-form-text style="font-size: 20px !important; color: white !important">
        Hier geht es zum Login.
      </b-form-text>

      <b-form-input
        type="text"
        v-model="u"
        placeholder="Nickname"
        style="margin-top: 10px !important"
        @change="setUser()"
      ></b-form-input>
      <div class="mt-2">{{ u }}</div>

      <b-form-input
        type="text"
        v-model="p"
        placeholder="Password"
        @change="setPW()"
      ></b-form-input>
      <div class="mt-2">{{ p }}</div>

      <b-row>
        <b-col>
          <b-button v-on:click="login()">LOGIN</b-button>
        </b-col>
        <b-col>
          <b-button>REGISTER</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import Axios from "axios";
import api from "../api/app/controller/api.controller";

export default {
  name: "Login",
  props: {
    u: String,
    p: String
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    setUser: () => {
      this.user.username = this.u;
    },
    setPW: () => {
      this.user.password = this.p;
    },
    login: () => {
      var hash = utils.hashString(string);
    },
  },
};
</script>

<style scoped>
.login {
  border: 1px solid white !important;
  padding: 10%;
}
</style>