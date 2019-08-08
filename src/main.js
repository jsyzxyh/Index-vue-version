// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入Element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入 vuex
import Vuex from 'vuex'
// 引入 axios
import axios from 'axios'
// 引入 vuex
import store from './store.js'
// 使用axios
Vue.prototype.$axios = axios
// 使用vuex
Vue.use(Vuex)

Vue.config.productionTip = false
// 配置 Element-UI

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
