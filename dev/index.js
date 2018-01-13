import Vue from 'vue';
import App from './App.vue';
import calendar from '../src//index';
import nl from './data/language-nl';

Vue.config.productionTip = false;

Vue.use(calendar, {
  firstDay: 1,
  locale: 'zh',
  languages: { nl }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: {
    App
  }
});
