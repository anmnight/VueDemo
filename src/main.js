// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import devices from './base/BaseDevice'
import mui from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(mui);
Vue.config.productionTip = false;
Vue.prototype.$devices = devices;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
