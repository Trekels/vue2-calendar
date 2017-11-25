import languages  from '../utils/languages';

export default (dayNumber, locale, fullName = false) => {

  const langSet = languages[locale];
  const day = parseInt(dayNumber + dayOffset, 10) % 7;

	return fullName ? langSet.monthNameLong[month]: langSet.monthNameShort[month];
}
