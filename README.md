## Vue2 simple event calendar.

[![npm](https://img.shields.io/npm/v/vue2-simple-calendar.svg?maxAge=2592000?style=flat-square)]()
[![npm](https://img.shields.io/npm/dt/vue2-simple-calendar.svg?maxAge=2592000?style=flat-square)]()

### Upcoming

NOTE: I am working on a more flexible version which will be tagged as V1 (release wil be half of december 2017) :)

### Introduction

This is a simple and small event calendar component for Vue js. Though there already a few other
calendar components, most of them are heavy and very bulky. The goal with this one is to have a calendar
component that does not depend on any heavy libs like `momentJs`.

### Table of contents

  * [Intro](#introduction)
  * [Installing](#installing)
  * [Properties](#component-props)
    * [Disabled obj](#disabled-conf-object)
    * [Highlight obj](#highlighted-conf-object)
  * [Events](#component-events)
    * [Day obj](#day-object-example)
    * [Event obj](#event-object-example)
  * [Thanks](#thanks-to)
  * [Upcoming](#upcoming)

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

| Prop                  | Type            | Default     | Description                                                   |
|-----------------------|-----------------|-------------|---------------------------------------------------------------|
| events                | Array           | []          | Set of events to be displayed                                 |
| locale                | String          | 'en'        | Locale for the month and day names                            |
| firstDay              | Number/String   | 0           | Index at which the week starts 0=sunday                       |
| fullMonthNames        | Boolean         | true        | Display full or short month names                             |
| fullDayNames          | Boolean         | true        | Display full or short day names                               |
| showLimit             | Number          | true        | Max amount of events to show on a day                         |
| moreText              | String          | 'Show more' | Set other text for the show more link                         |
| disabled              | Object          | {}          | View the [disabled](#disabled-conf-object) settings obj       |
| highlighted           | Object          | {}          | View the [highlighted](#highlighted-conf-object) settings obj |

#### Disabled conf object
```
disabled: {
        to: new Date(2017, 9, 5),                    // Disable all dates up to specific date
        from: new Date(2017, 11, 26),                // Disable all dates after specific date
        days: [6, 0],                                // Disable Saturday's and Sunday's
        dates: [                                     // Disable an array of dates
            new Date(2017, 9, 16),
            new Date(2017, 9, 17),
            new Date(2017, 9, 18)
        ]
    }
```

#### Highlighted conf object
```
highlight: {
        to: new Date(2017, 9, 5),                    // Highlight all dates up to specific date
        from: new Date(2017, 11, 26),                // Highlight all dates after specific date
        days: [6, 0],                                // Highlight Saturday's and Sunday's
        dates: [                                     // Highlight an array of dates
            new Date(2017, 9, 16),
            new Date(2017, 9, 17),
            new Date(2017, 9, 18)
        ]
    }
```

### Component events

| Event                  | Output                                                             | Description                                             |
|------------------------|--------------------------------------------------------------------|---------------------------------------------------------|
| month-changed          | start and end date of month                                        | Triggered on mount and when the user changes the month  |
| day-clicked            | [Day](#day-object-example) obj                                     | Triggered when the user clicks on a day                 |
| event-clicked          | [Event](#event-object-example) obj, [Day](#day-object-example) obj | Triggered when the user clicks on a event               |

#### Day object example
```
{
    weekDay : 0..6,                        // number of the week day --> 0..7
    date : Date,                           // Full js date object
    monthDay : 1..31,                      // Number of day in the month
    isSunday: true/false
    isSaturday: true/false,
    isWeekend: true/false
    events: Array,                         // List of events on that day
    isToday: true/false,                   // If is current day
    isCurrentMonth: true/false             // If is part of the requested month
}
```

#### Event object example:
```
{
    title    : 'FooEvent',
    start    : '2017-09-01T00:00:00',
    end      : '2017-09-02T00:00:00',
    class    : 'testClass',
},
```

### Thanks to

Special thanks to [Vue full calendar](https://github.com/Wanderxx/vue-fullcalendar) on which I based my component and got
my inspiration from.
