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
      let field = this.$calendar.fullMonthNames ? 'dayNameLong': 'dayNameShort';
      return this.translations[field][month];
    },
    printMonth(month) {
      let field = this.$calendar.fullMonthNames ? 'monthNameLong': 'monthNameShort';
      return this.translations[field][month];
    },
  },
}
