<template>
    <div class="calendar-header">
        <div class="header-left">
            <slot name="header-left">
            </slot>
        </div>
        <div class="header-center">
            <span class="prev-month" @click.stop="goPrev"> < </span>
            <span class="title"> {{title}} </span>
            <span class="next-month" @click.stop="goNext"> > </span>
        </div>
        <div class="header-right">
            <slot name="header-right">
            </slot>
        </div>
    </div>
</template>
<script type="text/babel">
  import dateHelper from '../utils/date-tools';

  export default {
    props: ['locale', 'fullMonthNames', 'firstDayOfMonth'],
    computed: {
      title () {
        return dateHelper.localMonthName(this.locale, this.firstDayOfMonth.getMonth(), this.fullMonthNames);
      }
    },
    methods : {
      goPrev () {
        let newMonth = dateHelper.shiftMonth(this.firstDayOfMonth, 1);
        this.$emit('changeMonth', newMonth);
      },
      goNext () {
	      let newMonth = dateHelper.shiftMonth(this.firstDayOfMonth, -1);
        this.$emit('changeMonth', newMonth);
      }
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
