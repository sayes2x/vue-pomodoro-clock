<template>
  <div>
      <h3>{{ label }}</h3>
      <p>{{ minutes }}:{{ seconds }}</p>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  props: {
    label: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
  },
  computed: {
      minutes: function() {
          return Math.floor(this.time / 60);
      },
      seconds: function() {
          const seconds = this.time % 60;
          return seconds > 9 ? seconds : `0${seconds}`;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-size: 20px;
  margin: 0;
}
p {
  font-size: 60px;
  margin: 0;
}
div {
  margin: 20px auto;
  padding: 10px;
  width: 200px;
  border-radius: 25px;
  border: 5px solid #41B883;
}
</style>
