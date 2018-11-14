import Vue from 'vue';
import App from './App.vue';
import VueSVGIcon from 'vue-svgicon';

Vue.use(VueSVGIcon, {
  tagname: 'svgicon',
  classPrefix: 'vue-svg'
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
