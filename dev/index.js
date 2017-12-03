import Vue from 'vue';
import App from './App.vue';
import calendar from '../src//index';

Vue.config.productionTip = false;

Vue.use(calendar, {
  firstDay: 1
});

new Vue({
  el : '#app',
  render: h => h(App),
  template : '<App/>',
  components : {
      App,
  },
});
