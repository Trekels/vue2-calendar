<template>
  <vue-calendar></vue-calendar>
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
