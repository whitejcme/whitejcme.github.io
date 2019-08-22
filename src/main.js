import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VuePageTransition from 'vue-page-transition';

import 'expose-loader?$!expose-loader?jQuery!jquery';
window.$ = window.jQuery = require("jquery");

Vue.use(VuePageTransition);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
