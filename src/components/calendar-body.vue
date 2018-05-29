<template>
  <div class="calendar-body">
    <div class="days-header">
      <div class="day-label" v-for="day in 7" :key="day">
        {{ printDay(day - 1) }}
      </div>
    </div>

    <div class="days-body">
      <div class="week-row" v-for="(week, key) in calendar" :key="key">
        <div
          :key="key"
          class="week-day"
          :class="dayClasses(day)"
          v-for="(day, key) in week"
          @click.stop="dayClicked(day)"
        >
          <div class="day-number">
            {{ day.monthDay }}
          </div>

          <events-box
            v-if="dayEvents = getEventsForDay(day.date)"
            :events="dayEvents"
            :display-show-more-count="displayShowMoreCount"
          ></events-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventsBox from './events-box';
import i18nMixin from '../mixins/i18n';
import calendarJs from '../utils/calendar';

export default {
  name: 'calendar-body',
  mixins: [ i18nMixin ],
  props: {
    events: {
      type: Array,
      required: true
    },
    disable: {
      type: Object,
      required: true
    },
    highlight: {
      type: Object,
      required: true
    },
    displayShowMoreCount: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      monthStart: null,
      disabledDays: this.disable,
      highlightedDays: this.highlight
    };
  },
  computed: {
    firstDay() {
      return this.$calendar.firstDay;
    },
    showLimit() {
      return this.$calendar.showLimit;
    },
    calendar() {
      if (this.monthStart) {
        return calendarJs.buildCalendar(this.monthStart, this.firstDay);
      }
    }
  },
  methods: {
    dayClasses(day) {
      const classes = {
        today: day.isToday,
        sunday: day.isSunday,
        weekend: day.isWeekend,
        saturday: day.isSaturday,
        'not-current': !day.isCurrentMonth,
        disabled: this.isDayDisabled(day),
        highlighted: this.isDayHighlighted(day)
      };

      return Object.keys(classes).filter(key => classes[key] === true);
    },
    dayClicked(day) {
      this.$calendar.eventBus.$emit('day-clicked', day);
    },
    getEventsForDay(date) {
      return calendarJs.filterEventsForDate(date, this.events);
    },
    isDayDisabled(day) {
      return calendarJs.dateOccursIn(day.date, this.disabledDays);
    },
    isDayHighlighted(day) {
      return calendarJs.dateOccursIn(day.date, this.highlightedDays);
    }
  },
  watch: {
    disable(days) {
      this.disabledDays = days;
    },
    highlight(days) {
      this.highlightedDays = days;
    }
  },
  components: {
    'events-box': eventsBox
  },
  mounted() {
    this.$calendar.eventBus.$on('month-changed', newMonth => this.monthStart = newMonth);
  }
}
</script>

<style lang="scss">
  .calendar-body {
    display: grid;
    grid-template-rows: 5% 95%;
  }

  .days-header {
    display: grid;
    grid-auto-columns: 14.25%;
    grid-template-areas: "a a a a a a a";

    border-top:1px solid #e0e0e0;
    border-left:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
  }

  .days-body {
    display: grid;
    grid-template-rows: auto;
  }

  .day-number{
    text-align: right;
    margin-right: 10px;
  }


  .day-label{
    text-align: center;
    border-right:1px solid #e0e0e0;
  }

  .week-row {
    display: grid;
    grid-template-areas: "a a a a a a a";
    grid-row-gap: 5px;
    grid-auto-columns: 14.25%;
  }

  .week-row{
    border-left:1px solid #e0e0e0;
  }

  .week-day{
    padding:4px;
    border-right:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
  }

  .week-day.disabled{
    background-color: rgb(245, 245, 245);
  }

  .week-day.not-current>.day-number{
    color: rgb(195,195,195);
  }

  .week-day.today > .day-number{
    font-weight: bold;
    color: red;
  }
</style>

