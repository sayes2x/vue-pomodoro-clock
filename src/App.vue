<template>
  <div id="app">
    <h1>Pomodoro Timer</h1>
    <Timer></Timer>
    <p>Designed and Coded by</p>
    <a href="https://www.scottaprice.com" target="_blank">Scott A Price</a>
    <p>Sound effects obtained from <a href="https://www.zapsplat.com" target="_blank">https://www.zapsplat.com</a></p>
  </div>
</template>

<script>
import Timer from './components/Timer.vue'

export default {
  name: 'App',
  components: {
    Timer
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  background-color: #00a99e;
  text-align: center;
  color: white;
}
a {
  text-decoration: none;
  color: white;
}
h1 {
  font-size: 40px;
}
svgicon {
  display: inline-block;
  width: 16px;
  height: 16px;
  color: inherit;
  vertical-align: middle;
  fill: none;
  stroke: currentColor;
}
.vue-svg-fill {
  fill: currentColor;
  stroke: none;
}
</style>
