<template>
    <div class="vue-calendar">
        <calendar-header
                :locale="locale"
                :disabled="disabled"
                :full-month-names="fullMonthNames"
                :first-day-of-month="currentMonthStart"
                @changeMonth="changeMonth"
        >
        </calendar-header>

        <div class="calendar-body">
            <div class="days-header">
                <strong class="day-label" v-for="dayNumber in 7">{{ (dayNumber - 1) | dayToString(locale, firstDay, fullDayNames) }}</strong>
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
                        ></events-box>
                    </div>
                </div>
            </div>
        </div>

        <events-modal v-if="showModal" :events="currentEventsList" @hideModal="hideEventsModal"></events-modal>
    </div>
</template>
<script>
    import eventsBox from './events-box.vue';
    import eventsModal from './events-modal.vue';
    import calHeader from './calendar-header.vue';
    import dateHelper from '../utils/calendar-helpers';

    export default {
        props : {
            events : {
              type : Array,
              default : () => []
            },
            locale : {
              type : String,
              default : 'en'
            },
            firstDay : {
              type : Number | String,
              default : 0
            },
	          fullMonthNames:  {
            	type: Boolean,
              default: true
            },
            fullDayNames: {
	            type: Boolean,
	            default: false
            },
            showLimit: {
            	type: Number,
              default: 3
            },
            moreText: {
            	type: String,
              default: 'Show more'
            },
            disabled: {
            	type: Object,
              default: () => { return {}; }
            },
            highlight: {
            	type: Object,
              default: () => { return {}; }
            }
        },
        data () {
          return {
          	showModal: false,
            currentEventsList: null,
            currentMonthStart: dateHelper.firstDateOfMonth(),
          }
        },
        computed: {
          calendar () {
            return dateHelper.buildCalendar(this.currentMonthStart, this.events, this.firstDay);
          }
        },
        methods: {
          changeMonth: function (monthStart) {
            this.currentMonthStart = monthStart;
            let monthEnd = dateHelper.lastDateOfMonth(new Date(monthStart));
	          this.$emit('monthChanged', monthStart, monthEnd);
          },
          dayClick: function (day) {
            this.$emit('dayClicked', day);
          },
          eventClicked: function(event) {
          	this.$emit('eventClicked', event);
          },
          showEventsModal: function(events) {
            this.currentEventsList = events;
            this.showModal = true;
          },
          hideEventsModal: function () {
            this.showModal = false;
          },
          isDayHighlighted (date) {
            if (!this.highlight) return false;

            if (this.highlight.dates) {
              this.highlight.dates.forEach((d) => {
                if (date.date.toDateString() === d.toDateString()) return true;
              });
            }

            if (this.highlight.to && date.date < this.highlight.to) return true;
            if (this.highlight.from && date.date > this.highlight.from) return true;
            if (this.highlight.days && this.highlight.days.indexOf(date.getDay) !== -1) return true;
          },
          isDayDisabled (date) {
            if (!this.disabled) return false;

            if (this.disabled.dates) {
              this.disabled.dates.forEach((d) => {
                if (date.date.toDateString() === d.toDateString()) return true;
              });
            }

            if (this.disabled.to && date.date < this.disabled.to) return true;
            if (this.disabled.from && date.date > this.disabled.from) return true;
            if (this.disabled.days && this.disabled.days.indexOf(date.getDay) !== -1) return true;
          }
        },
        filters: {
            dayToString (dayNumber, locale, dayOffset = 0, fullNames = 0) {
              dayNumber = parseInt(dayNumber + dayOffset) % 7;
              return dateHelper.localDayName(locale, dayNumber, fullNames);
            }
        },
        components: {
          'events-box': eventsBox,
          'events-modal': eventsModal,
          'calendar-header': calHeader,
        },
        mounted () {
          this.changeMonth(dateHelper.firstDateOfMonth());
        }
    }
</script>
<style>
    .vue-calendar {
        background: #fff;
        margin:0 auto;
    }
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
