<template>
  <vue-calendar></vue-calendar>
</template>
<script>
  import eventApi from './api/event-api';

  export default {
    data() {
      return {
        events: [],
        disabled: {}
      }
    },
    methods: {
      monthChanged(start, end) {
        this.events = eventApi.getEvents(start, end);
        this.disabled = eventApi.getDisabledDays(start, end);
      },
      dayClicked(...args) {
        console.log('DayClickEvent:', args);
      },
      eventClicked(...args) {
        console.log('EventClickEvent:', args);
      }
    }
  }
</script>
