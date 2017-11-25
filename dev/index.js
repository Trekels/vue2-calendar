import Vue from 'vue';
import App from './App.vue';
let calendar = require('../src/index');

Vue.config.productionTip = false;

Vue.use(calendar);

new Vue({
  el : '#app',
  render: h => h(App),
  template : '<App/>',
  components : {
      App,
  },
});
