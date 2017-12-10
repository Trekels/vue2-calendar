# Events

There are 2 types of events exposed by the component. Internally the component relies on a `eventBus` to pass around data and child interactions.
These events can also be intercepted/used in your application. There are also a set of events emitted by the root component whom can be bound directly. The latter is for ease of use since those events rely on the `eventBus`.

| Event name            | Type     | Description                                                   |  Payload        |
|-----------------------|----------|---------------------------------------------------------------|-----------------|
| `event-clicked`       | EventBus | When a single event clicked                                   |  eventObj       |
| `day-events`          | EventBus | `Show more` link clicked, all events of that day are passed   | eventObj[]      |
| `month-changed`       | EventBus | When the month is changed in the calendar header              | month start/end |
| `day-clicked`         | EventBus | When day tile is clicked                                      |    dayObj       |
|                       |          |                                                               |                 |
| `month-changed`       | Emitted  | See bus event ||
| `dayEvents`           | Emitted  | See bus event ||

### Using the event bus

The event bus is available through your application as shown below

```
this.$calendar.eventBus.$on('{event-name}', (...args) => { //Do stuff... });
```
