<template>
  <div :class="wrapperClass">
    <calendar-header
      :disabled="disabledDays"
      :full-month-names="fullMonthNames"
      :first-day-of-month="currentMonthStart"
      @changeMonth="changeMonth"
    >
    </calendar-header>

    <events-modal v-if="showModal" :events="currentEventsList" @hideModal="hideEventsModal"></events-modal>
  </div>
</template>
<script>
  import header from './calendar-header';
  import body from './calendar-body.vue';

  import eventsBox from './events-box.vue';
  import eventsModal from './events-modal.vue';
  import dateHelper from '../utils/calendar';

  export default {
    name: 'vue-calendar',
    props : {
      events : {
        type : Array,
        default : () => []
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
        disabledDays: this.disabled,
        highlightDays: this.highlight,
        wrapperClass: this.$calendar.class,
        currentMonthStart: dateHelper.firstDateOfMonth()
      }
    },
    computed: {
      calendar () {
        return dateHelper.buildCalendar(this.currentMonthStart, this.events, this.firstDay);
      }
    },
    watch: {
      disabled (newObj) {
        this.disabledDays = newObj;
      },
      highlight (newObj) {
        this.highlightDays = newObj;
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
        if (!this.highlightDays) return false;

        if (this.highlightDays.dates) {
          return this.highlightDays.dates.some(d => date.date.toDateString() === d.toDateString());
        }

        if (this.highlightDays.to && date.date < this.highlightDays.to) return true;
        if (this.highlightDays.from && date.date > this.highlightDays.from) return true;
        if (this.highlightDays.days && this.highlightDays.days.indexOf(date.getDay) !== -1) return true;
      },
      isDayDisabled (date) {
        if (!this.disabledDays) return false;

        let isDisabledDays = false;
        if (this.disabledDays.dates) {
          this.disabledDays.dates.forEach((d) => {
            if (date.date.toDateString() === d.toDateString()) {
              isDisabledDays = true; return true;
            }
          });
        }

        if (isDisabledDays) return true;
        if (this.disabledDays.to && date.date < this.disabledDays.to) return true;
        if (this.disabledDays.from && date.date > this.disabledDays.from) return true;
        return (this.disabledDays.days && this.disabledDays.days.indexOf(date.getDay) !== -1);
      }
    },
    components: {
      'calendar-body': body,
      'calendar-header': header,
      'events-box': eventsBox,
      'events-modal': eventsModal,
    },
    mounted() {
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
