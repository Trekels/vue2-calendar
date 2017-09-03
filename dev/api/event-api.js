/**
 * Api simulation to retrieve a list of events.
 */
export default {
	getEvents: () => {
		return [
			{
				title    : 'FooEvent',
				start    : '2017-09-01T00:00:00',
				end      : '2017-09-02T00:00:00',
				class    : 'testClass',
			},
			{
				title    : 'FooEvent1',
				start    : '2017-09-03T00:00:00',
				end      : '2017-09-03T00:00:00'
			},
			{
				title    : 'FooEvent2',
				start    : '2017-09-01T00:00:00',
				end      : '2017-09-01T00:00:00'
			},
			{
				title    : 'FooEvent3',
				start    : '2017-09-01T00:00:00',
				end      : '2017-09-01T00:00:00'
			},
			{
				title    : 'FooEvent4',
				start    : '2017-09-01T00:00:00',
				end      : '2017-09-01T00:00:00'
			}
		]
	}
}