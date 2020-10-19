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
        v-model="n"
        placeholder="Nickname"
        style="margin-top: 10px !important"
        @change="setUser(n)"
      ></b-form-input>
      <div class="mt-2">{{ n }}</div>

      <b-form-input
        type="text"
        v-model="p"
        placeholder="Password"
        @change="setPW(p)"
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
  data() {
    return {
      User: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    setUser: (value) => {
      this.User.username = value;
    },
    setPW: (value) => {
      this.User.password = value;
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