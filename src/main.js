// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import devices from './base/BaseDevice'
import database from './base/BaseDB'


Vue.config.productionTip = false;
Vue.prototype.$devices = devices;
Vue.prototype.$database = database;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
