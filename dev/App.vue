<template>
  <vue-calendar
    :show-limit="3"
    :events="events"
    :disable="disabledDays"
    :highlight="highlightDays"
    @month-changed="monthChanged"
  ></vue-calendar>
</template>

<script>
  import dataGenerator from './data/data-generator';

  export default {
    data() {
      return {
        monthStart: null,
        monthEnd: null
      }
    },
    computed: {
      hasMonth() {
        return this.monthStart && this.monthEnd;
      },
      events() {
        if (this.hasMonth) {
          return dataGenerator.mockEvents(this.monthStart, this.monthEnd);
        }
      },
      disabledDays() {
        if (this.hasMonth) {
          return dataGenerator.mockDays(this.monthStart, this.monthEnd);
        }
      },
      highlightDays() {
        if (this.hasMonth) {
          return dataGenerator.mockDays(this.monthStart, this.monthEnd);
        }
      }
    },
    methods: {
      monthChanged(start, end) {
        this.monthStart = start;
        this.monthEnd = end;
      },
      dayClicked(...args) {
        console.log('DayClickEvent:', args);
      },
      eventClicked(...args) {
        console.log('EventClickEvent:', args);
      }
    },
    mounted() {
      
    }
  }
</script>
