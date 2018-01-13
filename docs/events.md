# Events

There are 2 event types exposed by the component. Internally the component relies on a `eventBus` to notify sibling components.
These events can also be intercepted/used through out your application. All events are emitted by the root component as wll so they can be bound directly for ease of use.

| Event name            | Type     | Description                                                   |  Payload        |
|-----------------------|----------|---------------------------------------------------------------|-----------------|
| `event-clicked`       | EventBus | When a single event clicked                                   | eventObj        |
| `month-changed`       | EventBus | When the month is changed in the calendar header              | month start/end |
| `day-clicked`         | EventBus | When day tile is clicked                                      | dayObj          |
| `show-all`            | EventBus | `Show more` link clicked, all events of that day are passed   | eventObj[]      |
|                       |          |                                                               |                 |
| `event-clicked`       | Emitted  | See bus event                                                 |                 |
| `month-changed`       | Emitted  | See bus event                                                 |                 |
| `day-clicked`         | Emitted  | See bus event                                                 |                 |
| `show-all`            | Emitted  | See bus event                                                 |                 |


### Payload examples

#### event-clicked
```javascript
// Single calendar event
{
  title: 'event title'
  start: Date
  end: Date | null
}
```

#### month-changed
```javascript
// Returns the first and last date of the month
{
  start: Date
  end: Date
}
```

#### day-clicked
```javascript
// Returns a calendar day object containing info on the day self
{
  date: Date
  isCurrentMonth: true
  isSaturday: false
  isSunday: false
  isToday: false
  isWeekend: false
  monthDay: 25
  weekDay: 3
}
```

#### show-all

```javascript
// Returns a list of all events for a day
[
  {
    title: 'event title'
    start: Date
    end: Date | null
  },
  // more events ...
]

```

### EventBus usage

The event bus is available through your application as shown below

```
this.$calendar.eventBus.$on('{event-name}', (...args) => { //Do stuff... });
```
