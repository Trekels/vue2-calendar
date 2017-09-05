<template>
    <vue-calendar
            :events="events"
            @monthChanged="monthChanged"
    >
    </vue-calendar>
</template>
<script>
    import eventApi from './api/event-api';

    export default {
    	data: function () {
    		return {
    			events: []
        }
      },
      methods: {
    	  monthChanged: function (start, end) {
          // Month change event
        }
      },
    	created: function () {
    		this.events = eventApi.getEvents();
      }
    }
</script>
