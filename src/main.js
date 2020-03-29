import Vue from 'vue'
import App from './App.vue'
import router from './route'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

import http from "@/http";
Vue.use(http);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')