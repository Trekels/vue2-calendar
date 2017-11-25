<template>
  <div class="calendar-header">
    <div class="header-left">
      <slot name="header-left">
      </slot>
    </div>
    <div class="header-center">
      <span v-if="!previousMonthDisabled()" class="prev-month" @click.stop="goPrev"> &lt; </span>

      <span class="title">{{ title }} {{ year }}</span>

      <span v-if="!nextMonthDisabled()" class="next-month" @click.stop="goNext"> &gt; </span>
    </div>
    <div class="header-right">
      <slot name="header-right">
      </slot>
    </div>
  </div>
</template>
<script>
  import dateHelper from '../utils/calendar';

  export default {
    props: {
      firstDayOfMonth: {
        type: Date,
        required: true,
      },
      fullMonthNames: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Object,
        default: () => { return {}; },
      }
    },
    computed: {
      title () {
        return dateHelper.localMonthName(this.locale, this.firstDayOfMonth.getMonth(), this.fullMonthNames);
      },
      year () {
        return this.firstDayOfMonth.getFullYear();
      }
    },
    methods : {
      goPrev () {
        if (!this.previousMonthDisabled()) {
          let newMonth = dateHelper.shiftMonth(this.firstDayOfMonth, 1);
          this.$emit('changeMonth', newMonth);
        }
      },
      goNext () {
        if (!this.nextMonthDisabled()) {
          let newMonth = dateHelper.shiftMonth(this.firstDayOfMonth, -1);
          this.$emit('changeMonth', newMonth);
        }
      },
      previousMonthDisabled () {
        if (!this.disabled || !this.disabled.to) {
          return false;
        }
        let d = this.firstDayOfMonth;
        return this.disabled.to.getMonth() >= d.getMonth() &&
               this.disabled.to.getFullYear() >= d.getFullYear()
      },
      nextMonthDisabled () {
        if (!this.disabled || !this.disabled.from) {
          return false;
        }
        let d = this.firstDayOfMonth;
        return this.disabled.from.getMonth() <= d.getMonth() &&
               this.disabled.from.getFullYear() <= d.getFullYear()
      }
    },
    mounted() {

    }
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
