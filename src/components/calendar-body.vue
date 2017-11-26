<template>
  <div class="calendar-body">
    <div class="days-header">
        <strong class="day-label" v-for="dayNumber in 7">{{ (dayNumber - 1) | printDay(locale, firstDay, fullDayNames) }}</strong>
    </div>

    <div class="days-container">
        <div class="week-row" v-for="week in calendar">
            <div v-for="day in week"
                  class="week-day-cell"
                  :class="{  'today': day.isToday,
                            'weekend': day.isWeekend,
                            'saturday': day.isSaturday,
                            'sunday': day.isSunday,
                            'disabled': isDayDisabled(day),
                            'highlighted': isDayHighlighted(day),
                            'not-current-month': !day.isCurrentMonth }"
                  @click.stop="dayClick(day)">
                <div class="day-number">
                    {{ day.monthDay }}
                </div>
                <events-box
                        :events="day.events"
                        :show-limit="showLimit"
                        @eventClicked="eventClicked"
                        @showMore="showEventsModal"
                >
                    <template slot-scope="event">
                        <slot :event="event">{{ event.title }}</slot>
                    </template>
                </events-box>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
import dateHelper from '../utils/calendar';

export default {
  computed: {
    calendar () {
      return dateHelper.buildCalendar(this.currentMonthStart, this.events, this.firstDay);
    }
  },
}
</script>
