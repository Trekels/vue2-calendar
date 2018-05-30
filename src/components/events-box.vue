<template>
  <div class="events">
    <div
      :key="index"
      class="event"
      :class="event.classes"
      @click.stop="eventClicked(event)"
      v-for="(event, index) in eventList"
    >
      <div class="event-title">
        {{ event.title }}
      </div>
    </div>
    <span v-if="more" class="more-link" @click.stop="showAll()">
      <template v-if="displayShowMoreCount">{{ showMoreCount }}</template>
      {{ showMoreLabel }}
    </span>
  </div>
</template>

<script>
  import i18nMixin from '../mixins/i18n';

  export default {
    name: 'events-box',
    mixins: [ i18nMixin ],
  	props: {
  		events: {
  			type: Array,
        required: true
      },
      displayShowMoreCount: {
        type: Boolean,
        default: false
      }
    },
    computed:{
      showLimit() {
        return this.$calendar.showLimit;
      },
      eventList() {
        return this.events.slice(0, this.showLimit);
      },
      more() {
        return this.events.length > this.showLimit;
      },
      /**
       * Returns the number of remaining events over the show limit.
       * @return {Number}
       */
      showMoreCount() {
        return this.events.length - this.showLimit;
      }
    },
    methods: {
      eventClicked(event) {
        this.$calendar.eventBus.$emit('event-clicked', event);
      },
      showAll() {
        this.$calendar.eventBus.$emit('show-all', this.events);
      }
    }
  }
</script>

<style lang="scss">
  .events {
    font-size: 12px;
    cursor: pointer;
    padding: 0 0 0 4px;

    .event{
      height: 18px;
      line-height: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0 4px 2px 0;
      color: rgba(0,0,0,.87);
      background-color: rgb(212,220,236);
    }
    .more-link{
      color: rgba(0,0,0,.38);
    }
  }
</style>
