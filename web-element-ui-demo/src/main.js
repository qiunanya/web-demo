import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from '@/script/api'
import Ajax from '@/script/http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$api = window.Api = Api;
Vue.prototype.$ajax = window.Ajax = Ajax;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
