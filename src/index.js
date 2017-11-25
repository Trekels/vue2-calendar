'use strict'

import util from './utils/util';
import * as filters from './filter/index';
import calendarComponent from './components/calendar.vue';

function install(Vue, options = {}) {
  const defaults = {
    locale: 'en',
    firstDay: 0,
    moreText: 'show more',
    class: 'vue-calendar',
  };

  const calendarOptions = Object.assign(defaults, options);

  const calendar = Object.assign({
    eventBus: new Vue(),
  }, calendarOptions);

  Vue.prototype.$calendar = calendar;

  Vue.component('vue-calendar', calendarComponent);

  util.each(filters, (value, name) => {
    Vue.filter(name, value);
  });
}

export default install;

if (typeof module === 'object' && module.exports) {
  module.exports.install = install
}
