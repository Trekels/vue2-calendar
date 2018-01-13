export default {
  mockDays(monthStart, monthEnd) {
    const dates = mapRandomDates(monthStart, (date) => { return date; });

    return { dates };
  },
  mockEvents: (monthStart, monthEnd) =>
    mapRandomDates(monthStart, (date) => newEvent('testEvent', date))
};

const mapRandomDates = (date, fn, limit = 15) => {
  let result = [];
  const month = date.getMonth();
  const year = date.getFullYear();

  let amount = getRandomNumber(limit);
  while (amount--) {
    const day = getRandomNumber(28);
    result.push(fn(new Date(year, month, day)));
  }

  return result;
};

const newEvent = (title, start = null, end = null) => ({
  title,
  start: start ? start.toString() : null,
  end: end ? end.toString() : null
});

const getRandomNumber = (upper) =>
  Math.floor(Math.random() * (upper - 1 + 1)) + 1;
