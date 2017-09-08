<template>
    <vue-calendar
            :first-day="1"
            :events="events"
            :disabled="disabled"
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
          disabled: {}
        }
      },
      methods: {
    	  monthChanged: function (start, end) {
          this.events = eventApi.getEvents(start, end);
          this.disabled = eventApi.getDisabledDays(start, end);
        },
        dayClicked: function (events) {
          // Day click event
        },
        eventClicked: function (event) {
          // Event clicked
        }
      }
    }
</script>
