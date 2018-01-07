# Languages

The default plugin provides only 4 languages out of the box. But there is the possibility to add languages yourself.
This is done through the config object on component initialization.

### Add language

The component will check the `languages` property on the config object, and if it is set the languages will be added
to the available languages.

If the lang object is not in the correct format it will not be added so make sure to follow the shown format.

```javascript
import vueCalendar from 'vue2-simple-calendar';

// config object
const config  = {
  languages: 
    nl: {
      showMore: 'Toon meer',
      dayNameShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
      dayNameLong: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
      monthNameShort: ['jan', 'feb', 'mrt.', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      monthNameLong: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
    }
};

// use the config with languages
Vue.use(vueCalendar, config);

```
