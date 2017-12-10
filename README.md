# vue2-calendar

[![npm](https://img.shields.io/npm/v/vue2-simple-calendar.svg?maxAge=2592000?style=flat-square)]() [![npm](https://img.shields.io/npm/dt/vue2-simple-calendar.svg?maxAge=2592000?style=flat-square)]()

### Introduction
This is a simple and small event calendar component for Vue js. It is very lightweigt and does not depend on external libraries but Vue2.

### Table of contents
  * [Instalation](#instalation)
  * [Usaged](#usaged)
  * [Configuration](#configuration)
  * [Properties](#component-props)

### Instalation
Add the package to your project.

```bash
 npm install vue2-simple-calendar
 
 yarn add vue2-simple-calendar
```

`require` or `import` the component in your project index file *(or where you instatiate Vue)* and register as follows. You can add a configuration object to tweak the calendar to your needs but it is not required.

```javascript
import vueCalendar from 'vue2-simple-calendar';

Vue.use(calendar, {
  // configuration goes here.
});
```

Now all is in place to use the component in your project.

### Usaged
Now you can use the component like show below, the events are emitted by the top component in the plugin but are also available on an event bus trough out the application. The more fixed config like locale, language and so on can be configured on initialization.

```html
<vue-calendar
  height="500px"
  :show-limit="3"
  :events="events"
  :disable="disabledDays"
  :highlight="highlightDays"
  @month-changed="monthChanged"
></vue-calendar>
```

### Configuration
The component allows for some configuration, below are the defaults. These can be passed on initialization.
through the `Vue.use(calendar, { //config here })`.

```json
{
  firstDay: 0,
  showLimit: 3,
  locale: 'en',
  fullDayNames: false,
  fullMonthNames: false,
  class: 'vue-calendar',
  componentName: 'vue-calendar'
};
```
 