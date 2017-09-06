import languages from '../utils/languages';

/**
 * Returns the first day of current month or for the given month
 *
 * @returns {Date}
 */
const firstDateOfMonth = (date) => {
	if (!date) date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

/**
 * Returns the first day of the current or given month
 * @param date
 * @returns {Date}
 */
const lastDateOfMonth = (date) => {
	if (!date) date = new Date();
	return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

/**
 * Returns the date of the first week day, default the week starts sunday
 * Pass in an offset 0 - 6 to set the start of the week to an other day.
 * 0 = sunday, 1 = monday, ... 6 = saturday
 *
 * @param date
 * @param firstDay
 * @returns {Date}
 */
const startOfWeek = (date, firstDay = 0) => {
	firstDay = (firstDay < 0 || firstDay > 6) ? 0: firstDay;

	let day = date.getDay();
	// Create a new date instance because we don't want to edit the original object
  let calendarStart = new Date(date);

  // Get the difference till the first day of the week plus the offset to start the week at the given day
  let diff = (calendarStart.getDate() - day + ((day === 0 ? -7:0) + firstDay));
  calendarStart.setDate(diff);

  // In case the start date is further then the start of the month, set back with a week.
	return (calendarStart > date) ?
	  calendarStart.setDate(calendarStart.getDate() - 7) : calendarStart;
};

/**
 * Shift to next or previous months, pass amount of months to shift
 *
 * @param date
 * @param shift
 * @returns {Date}
 */
const shiftMonth = (date, shift) => {
	return new Date(date.setMonth(date.getMonth() - shift));
};

/**
 * Builds a calendar object for the given month, consisting of 6 week each holding the day objects.
 * Pass in an offset to change the day a week starts on, default is 0 = sunday.
 *
 * @param month       month to build
 * @param events      Set of events
 * @param firstDay    start day offset
 * @returns {Array}   calendar object
 */
const buildCalendar = (month, events, firstDay) => {
  let calendar = [];
	let today = (new Date()).setHours(0,0,0,0);
  let calendarDate = startOfWeek(firstDateOfMonth(month), firstDay);

  for(let weekNr = 0 ; weekNr < 6 ; weekNr++) {
    let week = [];

    for(let day = 0 ; day < 7 ; day++) {
      week.push({
	      weekDay : day,
	      date : calendarDate,
		    monthDay : calendarDate.getDate(),
	      events: eventsForDate(calendarDate, events),
	      isToday: (calendarDate.setHours(0,0,0,0) === today ),
	      isCurrentMonth: (calendarDate.getMonth() === month.getMonth())
	    });

      calendarDate.setDate(calendarDate.getDate() + 1);
    }

    calendar.push(week);
  }

  return calendar;
};

/**
 * Returns the events of a list matching for the given date.
 * @param date
 * @param events
 */
const eventsForDate = (date, events) => {
	return events.filter(day => {
			let start = parseDateString(day.start);
			let end = day.end ? parseDateString(day.end) : start;

			parseDateString(day.start);

			return (date.getTime() <= end.getTime() && date.getTime() >= start.getTime());
	});
};

/**
 * Pareses a yyyy-mm-dd string if it matches else it just creates a date obj from the string.
 *
 * @param dateString
 * @returns {Date}
 */
const parseDateString = (dateString) => {
  let regEx = /^\d{4}-\d{2}-\d{2}$/;
  if(!dateString.match(regEx)) return new Date(dateString);
  let parts = dateString.split('-');
	return new Date(parts[0], (parts[1] - 1), parts[2]);
};

/**
 * Returns the localized name of the given month full or short name
 *
 * @param locale
 * @param month
 * @param fullName
 * @returns {*}
 */
const localMonthName = (locale, month, fullName = false) => {
	let langSet = languages[locale];
	return fullName ? langSet.monthNameLong[month]: langSet.monthNameShort[month];
};

/**
 * Returns the localized name of the given weekday full or short name
 *
 * @param locale
 * @param day
 * @param fullName
 */
const localDayName = (locale, day, fullName = 0) => {
	let langSet = languages[locale];
	return fullName ? langSet.dayNameLong[day] : langSet.dayNameShort[day];
};

export default {
	shiftMonth,
	startOfWeek,
	localDayName,
	eventsForDate,
	buildCalendar,
	localMonthName,
  lastDateOfMonth,
	firstDateOfMonth,
}



