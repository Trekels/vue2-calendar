<template>
  <div class="calendar-body">
    <div class="days-header">
      <div v-for="dayNumber in 7" :key="dayNumber">
        {{ printDay(dayNumber - 1) }}
      </div>
    </div>

    <div class="days-body">
      <div class="week-row" v-for="(week, key) in calendar" :key="key">
        <div
          :key="key"
          :class="classes"
          v-for="(day, key) in week"
          @click.stop="dayClicked(day)"
        >
          <div class="day-number">
            {{ day.monthDay }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18nMixin from '../mixins/i18n';
import calendarJs from '../utils/calendar';

export default {
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
    }
  },
  data() {
    return {
      monthStart: null,
      disabledDays: this.disabled,
      highlightedDays: this.highlight,
      firstDay: this.$calendar.firstDay,
    }
  },
  computed: {
    calendar() {
      if (this.monthStart) {
        return calendarJs.buildCalendar(this.monthStart, this.events, this.firstDay);
      }
    },
    classes() {
    }
  },
  methods: {
    isDayHighlighted(date) {
      return calendarJs.dateOccursIn(date, this.highlightedDays);
    },
    isDayDisabled(date) {
      return calendarJs.dateOccursIn(date, this.highlightedDays);
    },
    dayClicked() {
    },
  },
  watch: {
    disable(days) {
      this.disabledDays = days;
    },
    highlight(days) {
      this.highlightDays = days;
    }
  },
  mounted() {
    this.$calendar.eventBus.$on('change-month', newMonth => this.monthStart = newMonth);
  }
}
</script>

<style>
  .calendar-body {
      margin: 10px 0;
  }

  .days-header{
      display: flex;
      border-top:1px solid #e0e0e0;
      border-bottom:1px solid #e0e0e0;
      border-left:1px solid #e0e0e0;
  }
  .day-label{
      flex:1;
      text-align: center;
      border-right:1px solid #e0e0e0;
  }
  .day-number{
      text-align: right;
      margin-right: 10px;
  }

  .week-row{
      border-left:1px solid #e0e0e0;
      display: flex;
  }
  .week-day-cell{
      flex:1;
      min-height: 112px;
      padding:4px;
      border-right:1px solid #e0e0e0;
      border-bottom:1px solid #e0e0e0;
  }
  .week-day-cell.disabled-day{
      background-color: rgb(245, 245, 245);
  }
  .week-day-cell.not-current-month>.day-number{
      color: rgb(195,195,195);
  }
  .week-day-cell.today > .day-number{
      font-weight: bold;
      color: red;
  }
</style>

