# Configuration

The component allows for the `app level` config to be overwritten on initialization. The config object is 
passed on initialization --> `Vue.use(calendar, { //config here })`.

This is a example of the config object with all default values
```json
{
  firstDay: 0,
  showLimit: 3,
  locale: 'en',
  fullDayNames: false,
  fullMonthNames: false,
  componentName: 'vue-calendar',
  languages: {}
}
```

* firstDay: controls the with day is printed first, default is 0 = sunday and can be any number up to 6.

* showLimit: controls the maximum amount of events shown on a day.

* locale: calendar language, default available `en`, `ru`, `nl`, `zh`.

* fullDayNames: Display full day names instead of abbreviation.

* fullMonthNames: Display full month names instead of abbreviation.

* componentName: The name of the calendar component, incase of conflict it can be changed to you needs.

* languages: Add extra languages sets, see [languages](./languages.md) for more info.
