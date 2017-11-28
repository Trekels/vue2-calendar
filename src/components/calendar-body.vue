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
import dateHelper from '../utils/calendar';

export default {
  mixins: [ i18nMixin ],
  props: {
    events: {
      type: Array,
      required: true
    },
    disabled: {
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
      firstDay: this.$calendar.firstDay,
    }
  },
  computed: {
    calendar() {
      if (this.monthStart) {
        return dateHelper.buildCalendar(this.monthStart, this.events, this.firstDay);
      }
    },
    classes() {

    }
  },
  methods: {
    dayClicked() {
    },
    updateMoth(newMonth) {
      this.monthStart = newMonth;
    }
  },
  mounted() {
    this.$calendar.eventBus.$on('changeMonth', this.updateMoth);
  }
}
</script>
