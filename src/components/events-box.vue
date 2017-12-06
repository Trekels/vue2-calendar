<template>
  <div class="events">
    <div class="events-container" :class="eventContainerClasses(event)"
         v-for="(event, index) in events"
         v-show="index <= (showLimit - 1)"
         @click.stop="eventClick(event)"
    >
     <div class="event" :class="eventClasses(event)">
       <slot :title="event.title"></slot>
     </div>
    </div>
    <p v-if="events.length > showLimit" class="more-link" @click.stop="eventClick">
      {{ moreText }}
    </p>
  </div>
</template>
<script>
  import languages from '../utils/languages';

  export default {
    props: {
      events: {
        type: Array,
        default: () => []
      },
      day: {
        type: Object,
        default: () => {}
      },
      showLimit: {
        type: Number,
        default: 3
      },
      locale: {
        type: String,
        default: 'en'
      }
    },
    computed: {
      moreText: function () {
        return languages[this.locale].showMore;
      }
    },
    methods: {
      eventClick: function(event) {
        this.$emit('eventClicked', event, this.day);
      },
      eventContainerClasses: function (event) {
        return event.containerClass ? event.containerClass : '';
      },
      eventClasses: function (event) {
        return event.class ? event.class : ''
      },
      selectDay: function() {
        this.$emit('showMore', this.events);
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