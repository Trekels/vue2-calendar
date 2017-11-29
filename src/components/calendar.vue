<template>
  <div :class="wrapperClass">
    <calendar-header
      :disable="disabledDays"
    >
    </calendar-header>

    <calendar-body
      :events="calendarEvents"
      :disable="disabledDays"
      :highlight="highlightedDays"
    >
    </calendar-body>
  </div>
</template>

<script>
  import header from './calendar-header';
  import body from './calendar-body.vue';

  export default {
    name: 'vue-calendar',
    props: {
      showLimit: {
        type: Number,
        default: 3
      },
      events: {
        type: Array,
        default: () => []
      },
      disable: {
        type: Object,
        default: () => ({})
      },
      highlight: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        calendarEvents: this.events,
        disabledDays: this.disable,
        highlightedDays: this.highlight,
        wrapperClass: this.$calendar.class,
      }
    },
    watch: {
      events(newEvents) {
        this.calendarEvents = newEvents;
      },
      disable(days) {
        this.disabledDays = days;
      },
      highlight(days) {
        this.highlightedDays = days;
      }
    },
    methods: {
      changeMonth(monthStart) {
        this.$emit('month-changed', this.monthStart);
      },
    },
    components: {
      'calendar-body': body,
      'calendar-header': header,
    },
    mounted() {
      this.$calendar.eventBus.$on('change-month', this.changeMonth);
    }
  }
</script>

<style>
  .vue-calendar {
    background: #fff;
    margin:0 auto;
  }
</style>
