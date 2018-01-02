# vue2-calendar

[![npm](https://img.shields.io/npm/v/vue2-simple-calendar.svg?maxAge=2592000?style=flat-square)]() [![npm](https://img.shields.io/npm/dt/vue2-simple-calendar.svg?maxAge=2592000?style=flat-square)]()

### Introduction
This is a simple and small event calendar component for Vue js. It is very lightweight and does not depend on external libraries apart from Vue2.

### Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Configuration](#configuration)

### Installation
Add the package to your project.

```bash
 npm install vue2-simple-calendar
 
 yarn add vue2-simple-calendar
```

`require` or `import` the component in your project index file *(or where you instantiate Vue)* and install as shown below. You can add a configuration object to tweak the calendar to your needs but it is not required.

```javascript
import vueCalendar from 'vue2-simple-calendar';

Vue.use(calendar, {
  // configuration goes here.
});
```

Now all is in place to use the component in your project.

### Usage

The component is used like shown below. Page specific config and data is passed trough properties, the app level config like locale ,firstDay ,... can be configured on initialization trough the config object. All events can be bound to the 
parent but are available through the complete application trough an event bus.

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

The component allows for the default app config to be overwritten, below are all options with default values displayed. 
These can be passed on initialization through the `Vue.use(calendar, { //config here })`.

```json
{
  firstDay: 0,
  showLimit: 3,
  locale: 'en',
  fullDayNames: false,
  fullMonthNames: false,
  class: 'vue-calendar',
  componentName: 'vue-calendar'
}
```
 