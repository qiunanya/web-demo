import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.use(ViewUI)

Vue.config.productionTip = false

Vue.directive('mycommand', {
  inserted (el, binding, vnode) {
    const { value } = binding
    if (value !== 'qiunanya') {
      el.parentNode && el.parentNode.removeChild(el)
    }
    console.log(el.parentNode, value, vnode);
    return false
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
