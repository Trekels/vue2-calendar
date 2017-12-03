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
      },
      height: {
        type: String,
        default: '500px'
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
      },
      height(newHeight) {
        this.height = newHeight;
        this.updateHeight();
      }
    },
    methods: {
      updateHeight() {
        let [ calendarEl ] = document.getElementsByClassName(this.wrapperClass);
        calendarEl && (calendarEl.style.height = this.height);
      },
      changeMonth(start, end) {
        this.$emit('month-changed', start, end);
      },
    },
    components: {
      'calendar-body': body,
      'calendar-header': header,
    },
    mounted() {
      this.updateHeight();
      this.$calendar.eventBus.$on('change-month', this.changeMonth);
    }
  }
</script>

<style>
  .vue-calendar {
    display: grid;
    grid-template-rows: 10% 90%;
  }
</style>
