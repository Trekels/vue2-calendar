## Vue2 simple event calendar.

[![npm](https://img.shields.io/npm/v/vue2-simple-calendar.svg?maxAge=2592000?style=flat-square)]()
[![npm](https://img.shields.io/npm/dt/vue2-simple-calendar.svg?maxAge=2592000?style=flat-square)]()

This is a simple and small event calendar component for Vue js. Though there already a few other
calendar components I made another to fill my need of a simple, light weight yet configurable component.

Most of the logic is based on the calendar component of  [Vue full calendar](https://github.com/Wanderxx/vue-fullcalendar)
With the difference of more configuration options and lightweight.

### Installing

Add the package using npm.

```
 npm install vue2-simple-calendar
```

Use the component in your project. You can register it globally in your application as shown below or locally in a component

```
import Vue from 'vue'
import myApp from './myApp'

import vueCalendar from 'vue2-simple-calendar'

Vue.component('vue-calendar', vueCalendar)

new Vue({
  el : '#app',
  render: h => h(myApp),
  template : '<App/>',
  components : {
    App
  }
})
```

### Component props

| Prop                  | Type            | Default     | Description                              |
|-----------------------|-----------------|-------------|------------------------------------------|
| events                | Array           | []          | Set of events to be displayed            |
| locale                | String          | 'en'        | Locale for the month and day names       |
| firstDay              | Number/String   | 0           | Index at which the week starts 0=sunday  |
| fullMonthNames        | Boolean         | true        | Display full or short month names        |
| fullDayNames          | Boolean         | true        | Display full or short day names          |
| showLimit             | Number          | true        | Max amount of events to show on a day    |

### Component events

| Event                 | Output                       | Description                  |               
|-----------------------|------------------------------|------------------------------|
| monthChanged          | start and end date of month  | First date of new month      |
| dayClicked            | Day obj                      | The obj of the clicked day   |
| eventClicked          | Event obj                    | The obj of the clicked event |

Day object example:
```
{
    weekDay : day,                                                      // number of the week day --> 0..7
    date : calendarDate,                                                // Full js date object
    monthDay : calendarDate.getDate(),                                  // Number of day in the month 1...31
    events: eventsForDate(calendarDate, events),                        // List of events on that day
    isToday: (calendarDate.setHours(0,0,0,0) === today ),               // If is current day
    isCurrentMonth: (calendarDate.getMonth() === month.getMonth())      // If is part of the requested month
}
```

Event object example:
```
{
    title    : 'FooEvent',
    start    : '2017-09-01T00:00:00',
    end      : '2017-09-02T00:00:00',
    class    : 'testClass',
},
```

### Known issues

The component is still under development so its working could change drastically thought I try to keep it as stable as possible.
