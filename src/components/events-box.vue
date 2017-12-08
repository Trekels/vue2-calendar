<template>
  <div class="events">
    <div 
      :key="index"
      class="events-container"
      v-for="(event, index) in events"
    >
      <div class="event">
        {{ event.title }}
      </div>
    </div>
    <p v-if="more" class="more-link" @click.stop="showMore">
      {{ showMoreLabel }}
    </p>
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
      more: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        dayEvents: this.events
      };
    },
    watch: {
      events(events) {
        this.dayEvents = events;
      }
    },
    methods: {
      showMore() {

      }
    }
  }
</script>

<style>
  .event{
    cursor: pointer;
    font-size:12px;
    margin-bottom:2px;
    color: rgba(0,0,0,.87);
    padding:0 0 0 4px;
    height: 18px;
    line-height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: rgb(212,220,236);
    margin-left: 4px;
  }
  .more-link{
    cursor: pointer;
    padding-left: 8px;
    padding-right: 2px;
    color: rgba(0,0,0,.38);
    font-size: 14px;
  }
</style>
