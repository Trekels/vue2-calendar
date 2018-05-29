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
      :display-show-more-count="displayShowMoreCount"
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
      },
      displayShowMoreCount: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        calendarEvents: this.events,
        disabledDays: this.disable,
        highlightedDays: this.highlight,
        wrapperClass: this.$calendar.class,
      };
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
      }
    },
    components: {
      'calendar-body': body,
      'calendar-header': header,
    },
    mounted() {
      this.updateHeight();

      this.$calendar.eventBus.$on('show-all', events => this.$emit('show-all', events));
      this.$calendar.eventBus.$on('day-clicked', day => this.$emit('day-clicked', day));
      this.$calendar.eventBus.$on('event-clicked', event => this.$emit('event-clicked', event));
      this.$calendar.eventBus.$on('month-changed', (start, end) => this.$emit('month-changed', start, end));
    }
  }
</script>

<style lang="scss">
  .vue-calendar {
    display: grid;
    grid-template-rows: 10% 90%;
    background: #fff;
    margin:0 auto;
  }
</style>
