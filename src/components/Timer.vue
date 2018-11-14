<template>
  <div>
    <div class="adjust-timer-container">
    <AdjustTimer label="Break Length" :time="breakTime" :callUpdateTime="updateTime"></AdjustTimer>
    <AdjustTimer label="Session Length" :time="sessionTime" :callUpdateTime="updateTime"></AdjustTimer>
    </div>
    <Clock :label="activeLabel" :time="activeTime"></Clock>
    <Controls :paused="paused" :callResetTimer="resetTimer" :callStartTimer="startTimer" :callPauseTimer="pauseTimer"></Controls>
  </div>
</template>

<script>
import AdjustTimer from './AdjustTimer';
import Clock from './Clock';
import Controls from './Controls';
import accurateTimer from'../modules/accurateTimer.js';

export default {
  name: 'Timer',
  components: {
    AdjustTimer,
    Clock,
    Controls,
  },
  data() {
    return {
      breakTime: 300,
      sessionTime: 1500,
      activeTime: 1500,
      session: true,
      paused: true,
      timer: null,
      audio: {
        takeABreak: new Audio(require('../assets/take-a-break.mp3')),
        backToWork: new Audio(require('../assets/back-to-work.mp3'))
      }
    }
  },
  methods: {
    updateTime: function(type, amount) {
      if(type === 'Break Length') {
        if (this.breakTime + amount  >= 1 && this.breakTime + amount <= 3600) {
          this.breakTime += amount;
          if(this.session === false) {
            this.activeTime += amount;
          }
        }
      } else {
        if (this.sessionTime + amount  >= 1 && this.sessionTime + amount <= 3600) {
          this.sessionTime += amount;
          if(this.session === true) {
            this.activeTime += amount;
          }
        }
      }
    },
    resetTimer: function() {
      if (this.paused === false) {
        this.timer.cancel();
      }
      this.breakTime = 300;
      this.sessionTime = 1500;
      this.activeTime = 1500;
      this.session = true;
      this.paused = true;
    },
    startTimer: function() {
      this.paused = false;
      this.timer = accurateTimer(this.countdown);
    },
    pauseTimer: function() {
      this.paused = true;
      this.timer.cancel();
    },
    countdown: function() {
      this.activeTime--;
    }
  },
  computed: {
    activeLabel: function() {
      return this.session === true ? 'Session' : 'Break';
    }
  },
  watch: {
    activeTime: function() {
      if (this.activeTime < 0) {
        if (this.session === true) {
          this.activeTime = this.breakTime;
        } else {
          this.activeTime = this.sessionTime;
        }
        this.session = !this.session;
      }
       if (this.activeTime === 0) {
        if (this.session === true) {
          this.audio.takeABreak.play();
        } else {
          this.audio.backToWork.play();
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adjust-timer-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 500px;
  margin: auto;
}
</style>