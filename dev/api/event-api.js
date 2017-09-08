/**
 * Api simulation to retrieve a list of events.
 */
export default {
	getEvents (monthStart, monthEnd) {
		let year = monthEnd.getFullYear();
		let month = monthEnd.getMonth();
		let events = [];

		let amountOfEvents = getRandomNumber(15);
		while (amountOfEvents--){
      let day = getRandomNumber(monthEnd.getDate());
      events.push(newEvent('testEvent', new Date(year, month, day)));
		}

		return events;
	},
	getDisabledDays (monthStart, monthEnd) {
    let year = monthEnd.getFullYear();
    let month = monthEnd.getMonth();
    let disabled = [];

    let amountOfDisabledDays = getRandomNumber(5);
    while (amountOfDisabledDays--){
      let day = getRandomNumber(monthEnd.getDate());
      disabled.push((new Date(year, month, day)));
    }

    return {
    	dates: disabled
		};
	}
}

function newEvent(title, start, end) {
	return {
    title    : title,
    start    : start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate(),
    end      : end,
	};
}

function getRandomNumber(upper) {
  return Math.floor(Math.random() * (upper - 1 + 1)) + 1;
}


