<template>
    <vue-calendar
            :events="events"
            :disabled="disabled"
            :first-day="1"
            @dayCLicked="dayClicked"
            @eventCLicked="eventClicked"
            @monthChanged="monthChanged"
    >
    </vue-calendar>
</template>
<script>
    import eventApi from './api/event-api';

    export default {
    	data: function () {
    		return {
    			events: [],
          disabled: {
            to: new Date(2016, 8, 1),       // Disable all dates up to specific date
            from: new Date(2018, 10, 1),    // Disable all dates after specific date
            days: [6, 0],                   // Disable Saturday's and Sunday's
            dates: [                        // Disable an array of dates
              new Date(2016, 9, 16),
              new Date(2016, 9, 17),
              new Date(2016, 9, 18)
            ]
          }
        }
      },
      methods: {
    	  monthChanged: function (start, end) {
          // Month change event
        },
        dayClicked: function (events) {
          // Day click event
        },
        eventClicked: function (event) {
          // Event clicked
        }
      },
    	created: function () {
    		this.events = eventApi.getEvents();
      }
    }
</script>
