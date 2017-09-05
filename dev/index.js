import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

let calendar = require('../src/index');
Vue.component('vue-calendar', calendar);

new Vue({
  el : '#app',
  render: h => h(App),
  template : '<App/>',
  components : {
      App
  }
});
