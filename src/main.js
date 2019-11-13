import Vue from 'vue';
import App from './App.vue';
// eslint-disable-next-line no-unused-vars
import global from './_globals';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
