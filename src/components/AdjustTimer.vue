<template>
  <div>
      <h2>{{ label }}</h2>
      <button @click="adjustTime(60)"><svgicon icon="plus" width="30" height="30"></svgicon></button>
      <span>{{ minutes }}</span>
      <button @click="adjustTime(-60)"><svgicon icon="minus" width="30" height="30"></svgicon></button>
  </div>
</template>

<script>
import '../compiled-icons/minus.js';
import '../compiled-icons/plus.js';

export default {
  name: 'AdjustTimer',
  props: {
    label: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    callUpdateTime: {
        type: Function,
        required: true
    }
  },
  computed: {
      minutes: function() {
          return this.time / 60;
      }
  },
  methods: {
      adjustTime: function(amount) {
          this.callUpdateTime(this.label, amount);
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
  color: white;
  font-size: 30px;
}
span {
  font-size: 45px;
}
</style>
