const mapForeach = (arr, fn) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) { fn(arr[i], i); }
};

const firstDateOfMonth = (date) => {
  if (!date) date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

const lastDateOfMonth = (date) => {
  if (!date) date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

const startOfWeek = (date, firstDay = 0) => {
  firstDay = (firstDay < 0 || firstDay > 6) ? 0 : firstDay;

  let day = date.getDay();
  // Create a new date instance because we don't want to edit the original object
  let calendarStart = new Date(date);

  // Get the difference till the first day of the week plus the offset to start the week at the given day
  let diff = (calendarStart.getDate() - day + ((day === 0 ? -7 : 0) + firstDay));
  calendarStart.setDate(diff);

  // In case the start date is further then the start of the month, set back with a week.
  return (calendarStart > date) ? calendarStart.setDate(calendarStart.getDate() - 7) : calendarStart;
};

const shiftMonth = (date, shift) => {
  return new Date(date.setMonth(date.getMonth() - shift));
};

const buildCalendar = (startDate, firstDay = 1) => {
  let calendar = [];
  let today = (new Date()).setHours(0, 0, 0, 0);
  let calendarDate = startOfWeek(startDate, firstDay);

  for (let weekNr = 0; weekNr < 6; weekNr++) {
    let week = [];

    for (let day = 0; day < 7; day++) {
      week.push({
        weekDay: day,
        date: calendarDate,
        isSunday: day === 0,
        isSaturday: day === 6,
        isWeekend: day === 0 || day === 6,
        monthDay: calendarDate.getDate(),
        isToday: (calendarDate.getTime() === today),
        isCurrentMonth: (calendarDate.getMonth() === startDate.getMonth())
      });

      let nextDay = calendarDate.getDate() + 1;
      calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), nextDay, 0, 0, 0);
    }

    calendar.push(week);
  }

  return calendar;
};

const filterEventsForDate = (date, events, limit) => {
  let result = [];

  mapForeach(events, (event, index) => {
    let start = new Date(event.start);
    let end = event.end ? new Date(event.end) : start;

    if (date.getTime() <= end.getTime() && date.getTime() >= start.getTime()) {
      result.push(event);
    }
  });

  return result.length ? result : false;
};

const dateOccursIn = (date, daysObj) => {
  if (daysObj.dates) {
    return daysObj.dates.some(d => date.toDateString() === d.toDateString());
  }

  if (daysObj.to && date < daysObj.to) return true;
  if (daysObj.from && date > daysObj.from) return true;
  if (daysObj.days && daysObj.days.indexOf(date.getDay) !== -1) return true;
};

export default {
  shiftMonth,
  startOfWeek,
  dateOccursIn,
  buildCalendar,
  lastDateOfMonth,
  firstDateOfMonth,
  filterEventsForDate
};
