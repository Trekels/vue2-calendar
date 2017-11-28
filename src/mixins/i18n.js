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
  },
  methods: {
    printDay(day) {
      let field = this.$calendar.fullDayNames ? 'dayNameLong': 'dayNameShort';
      return this.translations[field][day];
    },
    printMonth(month) {
      let field = this.$calendar.fullMonthNames ? 'monthNameLong': 'monthNameShort';
      return this.translations[field][month];
    },
  },
}
