# vue2-calendar

[![npm](https://img.shields.io/npm/v/vue2-simple-calendar.svg?maxAge=2592000?style=flat-square)]() [![npm](https://img.shields.io/npm/dt/vue2-simple-calendar.svg?maxAge=2592000?style=flat-square)]()

### Introduction
This is a simple and small event calendar component for Vue js. It is very lightweight and does not depend on external libraries apart from Vue2 obviously.

### Table of contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Configuration](./docs/config.md)
  * [Properties](./docs/properties.md)
  * [Events](./docs/events.md#events)
    * [Event payload](./docs/events.md#payload-examples)
    * [EventBus usage](./docs/events.md#eventbus-usage)
  * [Languages](./docs/languages.md)
    * [Add languages](./docs/languages.md#add-languages)

### Installation
Add the package to your project.

```bash
 npm install vue2-simple-calendar
 
 yarn add vue2-simple-calendar
```

`require` or `import` the component in your project index file *(or where you instantiate Vue)* and install as shown below. You can add a configuration object to tweak the calendar to your needs but it is not required.

```javascript
import vueCalendar from 'vue2-simple-calendar';

Vue.use(vueCalendar, {
  // configuration goes here.
});
```

Now all is in place to use the component.

### Usage

The component is used like shown below. Page specific config and data is passed trough properties, the app level config like locale ,firstDay ,... can be configured on initialization trough the config object. All events can be bound to the 
parent but are available through the complete application trough an event bus.

```html
<template>
  <vue-calendar
      :show-limit="3"
      :events="events"
      :disable="disabledDays"
      :highlight="highlightDays"

      @show-all="showAll"
      @day-clicked="dayClicked"
      @event-clicked="eventClicked"
      @month-changed="monthChanged"
  ></vue-calendar>
</template>

<script>
  export default {
    name: 'your-component',
    methods: {
      showAll(events) {
        // Do something...
      },
      dayClicked(day) {
        // Do something...
      },
      eventClicked(event) {
        // Do something...
      },
      monthChanged(start, end) {
        // Do something...
      }
    },
    created() {
      this.$calendar.eventBus.$on('show-all', events => showAll(events));
      this.$calendar.eventBus.$on('day-clicked', day =>  dayClicked(day));
      this.$calendar.eventBus.$on('event-clicked', event => eventClicked(event));
      this.$calendar.eventBus.$on('month-changed', (start, end) => monthChanged(start, end));
    }
  }
</script>
```
