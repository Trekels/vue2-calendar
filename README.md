## Vue2 simple event calendar.

This is a simple and small event calendar component for Vue js. Though there already a few other
calendar components I made another to fill my need of a simple, light weight yet configurable component.

Most of the logic is based on the calendar component of  [Vue full calendar](https://github.com/Wanderxx/vue-fullcalendar)
With the difference of more configuration options and lightweight.

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

| Event                 | Output          | Description                  |               
|-----------------------|-----------------|------------------------------|
| monthChanged          | Date obj        | First date of new month      |
| dayClicked            | Day obj         | The obj of the clicked day   |
| eventClicked          | Event obj       | The obj of the clicked event |