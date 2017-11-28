<template>
  <div :class="wrapperClass">
    <calendar-header
      :disabled="disabledDays"
    >
    </calendar-header>

    <calendar-body
      :events="events"
      :disabled="disabledDays"
      :highlight="highlightDays"
    >
    </calendar-body>
  </div>
</template>

<script>
  import header from './calendar-header';
  import body from './calendar-body.vue';
  import dateHelper from '../utils/calendar';

  export default {
    name: 'vue-calendar',
    props: {
      showLimit: {
        type: Number,
        default: 3
      },
      events: {
        type: Array,
        default: () => []
      },
      disabled: {
        type: Object,
        default: () => ({})
      },
      highlight: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        disabledDays: this.disabled,
        highlightDays: this.highlight,
        wrapperClass: this.$calendar.class,
      }
    },
    watch: {
      disabled(days) {
        this.disabledDays = days;
      },
      highlight(days) {
        this.highlightDays = days;
      }
    },
    methods: {
      changeMonth(monthStart) {
        this.$emit('monthChanged', this.monthStart);
      },
    },
    components: {
      'calendar-body': body,
      'calendar-header': header,
    },
    mounted() {
      this.$calendar.eventBus.$on('changeMonth', this.changeMonth);
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
