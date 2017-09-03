<template>
    <vue-calendar :events="events">
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
    	created: function () {
    		this.events = eventApi.getEvents();
      }
    }
</script>
