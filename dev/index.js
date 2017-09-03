import Vue from 'vue';
import App from './App.vue';

import calendar from '../src/components/calendar.vue';

Vue.component('vue-calendar', calendar);

new Vue({
  el : '#app',
  render: h => h(App),
  template : '<App/>',
  components : {
      App
  }
});
