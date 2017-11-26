<template>
  <div class="calendar-header">
    <div class="header-left">
      <slot name="header-left">
      </slot>
    </div>
    <div class="header-center">
      <span v-if="!previousMonthDisabled" class="prev-month" @click.stop="goPrev"> &lt; </span>

      <span class="title"> {{ month }} {{ year }} </span>

      <span v-if="!nextMonthDisabled" class="next-month" @click.stop="goNext"> &gt; </span>
    </div>
    <div class="header-right">
      <slot name="header-right">
      </slot>
    </div>
  </div>
</template>
<script>
  import i18nMixin from '../mixins/i18n';
  import dateHelper from '../utils/calendar';

  export default {
    mixins: [ i18nMixin ],
    props: {
      monthStart: {
        type: Date,
        required: true,
      },
      disabled: {
        type: Object,
        default: () => { return {}; },
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
        return !Object.keys(this.disabled).length;
      },
      previousMonthDisabled() {
        if (this.hasDisabledPeriod || !this.disabled.hasOwnProperty('to')) {
          return false; 
        }

        return (this.disabled.to.getMonth() >= this.monthStart.getMonth()) &&
               (this.disabled.to.getFullYear() >= this.monthStart.getFullYear());
      },
      nextMonthDisabled () {
        if (this.hasDisabledPeriod || !this.disabled.hasOwnProperty('from')) {
          return false;
        }

        return (this.disabled.from.getMonth() <= this.monthStart.getMonth()) &&
               (this.disabled.from.getFullYear() <= this.monthStart.getFullYear());
      }
    },
    methods: {
      goPrev() {
        if (!this.previousMonthDisabled) {
          let newMonth = dateHelper.shiftMonth(this.monthStart, 1);
          this.$emit('changeMonth', newMonth);
        }
      },
      goNext () {
        if (!this.nextMonthDisabled) {
          let newMonth = dateHelper.shiftMonth(this.monthStart, -1);
          this.$emit('changeMonth', newMonth);
        }
      },
    },
  }
</script>
<style>
    .calendar-header{
        display: flex;
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
    .prev-month,.next-month{
        cursor: pointer;
    }
</style>
