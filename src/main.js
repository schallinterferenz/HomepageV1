// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import mongoose from 'mongoose';

const { Howl, Howler } = require('howler');
const crypto = require('crypto');


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const axios = require('axios').default;



//Import the mongoose module
// const mongoose = require('mongoose').default;

// //Set up default mongoose connection
// var mongoDB = 'mongodb://192.168.2.159:27017';
// mongoose.connect(mongoDB, { useNewUrlParser: true });

// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// //Define a schema
// var Schema = mongoose.Schema;

// var User = new Schema({
//   id: String,
//   login: String,
//   pwh: String,
//   email: String,
//   a_date: Date
// });

// var UserModel = mongoose.model('UserModel', User);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

function generateID() {
  var result = "";
  var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  
  for (var i = 0; i < 16; i++) {
      result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
      );
  }
  return result;
}

function hashString(str) {
  var hash = crypto.getHashes();
  var hashPwd = crypto.createHash('sha1').update(str).digest('hex');

  return hash;
}



