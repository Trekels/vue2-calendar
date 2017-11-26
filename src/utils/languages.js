const languages = {
  en: {
    showMore: 'Show more',
    dayNameShort   : ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'],
    dayNameLong   : ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	  monthNameShort  : ['Jan.',	'Feb.',	'Mar.',	'Apr.',	'May',	'June',	'July',	'Aug.',	'Sept.',	'Oct.',	'Nov.',	'Dec.'],
    monthNameLong  : ['January','February','March','April','May','June','July','August','September','October','November','December']
  },
  ru: {
    showMore: 'Показать больше',
    dayNameShort   : ['Вс', 'Пн','Вт','Ср','Чт','Пт','Сб'],
    dayNameLong   : ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    monthNameShort  : ['Янв.',  'Фев.',  'Март.',  'Апр.',  'Май',  'Июнь',  'Июль',  'Авг.',  'Сент.',  'Окт.',  'Ноя.',  'Дек.'],
    monthNameLong  : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
  }
};

export default {
  getTranslation(locale) {
    if (languages.hasOwnProperty(locale)) {
      return languages[locale];
    }

    return languages.en;
  }
}
