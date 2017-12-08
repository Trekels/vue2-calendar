export default {
  mockEvents(monthStart, monthEnd) {
    let year = monthEnd.getFullYear();
    let month = monthEnd.getMonth();
    let events = [];

    let amountOfEvents = getRandomNumber(15);
    while (amountOfEvents--) {
      let day = getRandomNumber(monthEnd.getDate());
      events.push(newEvent('testEvent', new Date(year, month, day)));
    }

    return events;
  },
  mockDays(monthStart, monthEnd) {
    let year = monthEnd.getFullYear();
    let month = monthEnd.getMonth();
    let days = [];

    let amountOfDays = getRandomNumber(5);
    while (amountOfDays--) {
      let day = getRandomNumber(monthEnd.getDate());
      days.push((new Date(year, month, day)));
    }

    return {
      dates: days
    };
  }
};

function newEvent(title, start, end) {
  return {
    title: title,
    start: start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate(),
    end: end
  };
}

function getRandomNumber(upper) {
  return Math.floor(Math.random() * (upper - 1 + 1)) + 1;
}
