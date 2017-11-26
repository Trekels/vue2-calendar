'use strict'

import defaults from './config/defaults';
import languages from './utils/languages';
import calendarComponent from './components/calendar.vue';

function install(Vue, options = {}) {

  const calendarOptions = Object.assign(defaults, options);

  const calendar = {
    eventBus: new Vue(),
    translations: languages.getTranslation(calendarOptions.locale)
  }

  Vue.prototype.$calendar = Object.assign(calendar, calendarOptions);

  Vue.component('vue-calendar', calendarComponent);
}

export default install;

if (typeof module === 'object' && module.exports) {
  module.exports.install = install
}
