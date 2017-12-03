export default {
  data() {
    return {
      translations: this.$calendar.translations 
    }
  },
  computed: {
    locale() {
      return this.$calendar.locale;
    },
    dayOffset() {
      return this.$calendar.firstDay;
    }
  },
  methods: {
    printDay(day) {
      let field = this.$calendar.fullDayNames ? 'dayNameLong': 'dayNameShort';
      let dayIndex = parseInt(day + this.dayOffset) % 7;

      return this.translations[field][dayIndex];
    },
    printMonth(month) {
      let field = this.$calendar.fullMonthNames ? 'monthNameLong': 'monthNameShort';
      return this.translations[field][month];
    }
  }
}
