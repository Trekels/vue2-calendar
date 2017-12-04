<template>
  <div class="calendar-header">
    <div class="header-left">
      <slot name="header-left">
      </slot>
    </div>
    <div class="header-center">
      <span v-if="!isPrevMonthDisabled" class="prev-month" @click.stop="goPrev"> &lt; </span>

      <span class="title"> {{ month }} {{ year }} </span>

      <span v-if="!isNextMonthDisabled" class="next-month" @click.stop="goNext"> &gt; </span>
    </div>
    <div class="header-right">
      <slot name="header-right">
      </slot>
    </div>
  </div>
</template>

<script>
  import i18nMixin from '../mixins/i18n';
  import calendarJs from '../utils/calendar';

  export default {
    name: 'calendar-header',
    mixins: [ i18nMixin ],
    props: {
      disable: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        monthStart: null
      }
    },
    computed: {
      year() {
        return this.monthStart.getFullYear();
      },
      month() {
        return this.printMonth(this.monthStart.getMonth());
      },
      hasDisabledPeriod() {
        return !Object.keys(this.disable).length;
      },
      isPrevMonthDisabled() {
        if (this.hasDisabledPeriod || !this.disable.hasOwnProperty('to')) {
          return false; 
        }

        return (this.disable.to.getMonth() >= this.monthStart.getMonth()) &&
               (this.disable.to.getFullYear() >= this.monthStart.getFullYear());
      },
      isNextMonthDisabled() {
        if (this.hasDisabledPeriod || !this.disable.hasOwnProperty('from')) {
          return false;
        }

        return (this.disable.from.getMonth() <= this.monthStart.getMonth()) &&
               (this.disable.from.getFullYear() <= this.monthStart.getFullYear());
      }
    },
    methods: {
      goPrev() {
        if (!this.previousMonthDisabled) {
          this.monthStart = calendarJs.shiftMonth(this.monthStart, 1);
        }
      },
      goNext() {
        if (!this.nextMonthDisabled) {
          this.monthStart = calendarJs.shiftMonth(this.monthStart, -1);
        }
      },
    },
    watch: {
      monthStart(monthStart) {
        this.$calendar.eventBus.$emit('change-month',
          monthStart,
          calendarJs.lastDateOfMonth(monthStart)
        );
      }
    },
    created() {
      this.monthStart = calendarJs.firstDateOfMonth();
    }
  }
</script>

<style>
  .calendar-header{
    align-items: center;
  }
  .header-left, .header-right{
    flex:1;
  }
  .header-center {
    flex: 3;
    text-align: center;
  }
  .title{
    margin: 0 5px;
  }
  .prev-month, .next-month{
    cursor: pointer;
  }
</style>
