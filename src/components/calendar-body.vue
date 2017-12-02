<template>
  <div class="calendar-body">
    <div class="days-header">
      <div v-for="day in 7" :key="day">
        {{ printDay(day - 1) }}
      </div>
    </div>

    <div class="days-body">
      <div class="week-row" v-for="(week, key) in calendar" :key="key">
        <div
          :key="key"
          :class="dayClasses(day)"
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
        return calendarJs.buildCalendar(this.monthStart, this.firstDay);
      }
    }
  },
  methods: {
    dayClasses(day) {
      return this.activeKeys({
        today: day.isToday,
        sunday: day.isSunday,
        weekend: day.isWeekend,
        saturday: day.isSaturday,
        'not-current': !day.isCurrentMonth,
        disabled: this.isDayDisabled(day),
        highlighted: this.isDayHighlighted(day),
      });
    },
    isDayHighlighted(day) {
      return calendarJs.dateOccursIn(day, this.highlightedDays);
    },
    isDayDisabled(day) {
      return calendarJs.dateOccursIn(day, this.highlightedDays);
    },
    dayClicked() {
    },
    activeKeys(obj) {
      return Object.keys(obj)
        .filter(key => obj[key] === true);
    }
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
    display: grid;
    grid-template-rows: 10% 90%;
  }

  .days-header {
    display: grid;
    grid-template-areas: "a a a a a a a";
    grid-auto-columns: 14.25%;
  }

  .days-body {
    display: grid;
    grid-template-rows: auto;
  }

  .week-row {
    display: grid;
    grid-template-areas: "a a a a a a a";
    grid-row-gap: 5px;
    grid-auto-columns: 14.25%;
  }
</style>

