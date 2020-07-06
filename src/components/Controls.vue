<template>
  <div>
      <button v-if="paused === true" @click="start"><svgicon icon="media-play" width="30" height="30"></svgicon></button>
      <button v-else @click="pause"><svgicon icon="media-pause" width="30" height="30"></svgicon></button>
      <button @click="reset"><svgicon icon="arrow-sync" width="30" height="30"></svgicon></button>
  </div>
</template>

<script>
import '../compiled-icons/media-play.js';
import '../compiled-icons/media-pause.js';
import '../compiled-icons/arrow-sync.js';

export default {
  name: 'Controls',
  props: {
    paused: {
        type: Boolean,
        required: true
    },
    callResetTimer: {
        type: Function,
        required: true
    },
    callStartTimer: {
        type: Function,
        required: true
    },
    callPauseTimer: {
        type: Function,
        required: true
    }
  },
  methods: {
      start: function() {
        this.callStartTimer();
      },
      pause: function() {
          this.callPauseTimer();
      },
      reset: function() {
        this.callResetTimer();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: #41B883;
  font-size: 30px;
}
img {
  color: white;
}
</style>
