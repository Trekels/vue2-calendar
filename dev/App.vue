<template>
  <vue-calendar
    :show-limit="3"
    :events="events"
    :disable="disabledDays"
    :highlight="highlightDays"

    @show-all="showAll"
    @day-clicked="dayClicked"
    @event-clicked="eventClicked"
    @month-changed="monthChanged"
  ></vue-calendar>
</template>

<script>
  import dataGenerator from './data/data-generator';

  export default {
    data() {
      return {
        monthStart: null,
        monthEnd: null
      }
    },
    computed: {
      hasMonth() {
        return this.monthStart && this.monthEnd;
      },
      events() {
        if (this.hasMonth) {
          return dataGenerator.mockEvents(this.monthStart, this.monthEnd);
        }
      },
      disabledDays() {
        if (this.hasMonth) {
          return dataGenerator.mockDays(this.monthStart, this.monthEnd);
        }
      },
      highlightDays() {
        if (this.hasMonth) {
          return dataGenerator.mockDays(this.monthStart, this.monthEnd);
        }
      }
    },
    methods: {
      showAll(events) {
        console.log('[ROOT] show-all:', events);
      },
      dayClicked(day) {
        console.log('[ROOT] day-clicked', day);
      },
      eventClicked(event) {
        console.log('[ROOT] event-clicked', event)
      },
      monthChanged(start, end) {
        this.monthEnd = end;
        this.monthStart = start;

        console.log('[ROOT] month-changed:', { end, start });
      }
    },
    mounted() {
      this.$calendar.eventBus.$on('show-all', events => { console.log('[BUS] show-all:', events); });
      this.$calendar.eventBus.$on('day-clicked', events => { console.log('[BUS] day-clicked:', events); });
      this.$calendar.eventBus.$on('event-clicked', event => { console.log('[BUS] event-clicked:', event); });
      this.$calendar.eventBus.$on('month-changed', (start, end) => { console.log('[BUS] month-changed:', {start, end}); });
    }
  }
</script>
