<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            Events for: {{ date }}
          </div>

          <div class="modal-body">
            <div class="event" v-for="event in events" :class="event.class">
              {{ event.title }}
            </div>
          </div>

          <div class="modal-footer">
              <button class="modal-default-button" @click="$emit('hideModal')">
                close
              </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
    	events: {
    		type: Array,
    		default: () => []
      }
    },
    computed: {
    	date: function () {
    		return this.events.length ? this.events[0].start.split('T')[0] : '';
      }
    }
  }
</script>
<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>