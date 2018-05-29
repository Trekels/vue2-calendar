# Properties

Data can be passed to the component through properties on the root component.

## Component properties

| Prop                  | Type            | Default     | Description                                                   |
|-----------------------|-----------------|-------------|---------------------------------------------------------------|
| events                | Array           | []          | Set of events to be displayed                                 |
| height                | String          | '500px'     | Height of the calendar                                        |
| disabled              | Object          | {}          | View the [disabled](#disabled) settings obj                   |
| highlighted           | Object          | {}          | View the [highlighted](#highlighted) settings obj             |
| displayShowMoreCount  | Boolean         | false       | Weather the count of remaining events should be displayed     |

## Config properties

### Events

Events to be displayed on the calendar.

```javascript
[
  {
    start    : Date,
    end      : Date,
    title    : 'FooEvent',
    classes  : ['testClass']
  },
]
```

### Disabled
Days that have to get the disabled class.

```javascript
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

### Highlighted
Days that have to get the Highlighted class.

```javascript
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

### displayShowMoreCount
Displays the number of events above the `showLimit` before the showMore link.
