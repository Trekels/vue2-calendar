import Vue from 'vue';
import App from './App.vue';

let calendar = require('../dist/vue-calendar');

Vue.component('vue-calendar', calendar);

new Vue({
  el : '#app',
  render: h => h(App),
  template : '<App/>',
  components : {
      App
  }
});
