// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入Element-UI
import {
  Button,
  Input,
  Form,
  FormItem,
  Collapse,
  CollapseItem,
  Container,
  Main,
  Aside,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Table,
  TableColumn,
  Backtop
} from 'element-ui'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入prismjs
// import Prism from 'prismjs'
// 引入 vuex
import Vuex from 'vuex'
// 引入 axios
import axios from 'axios'
// 引入 vuex
import store from './store'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-light.css'
Vue.use(VueHighlightJS)
// 使用 axios
Vue.prototype.$axios = axios
// 使用 vuex
Vue.use(Vuex)

Vue.config.productionTip = false
// 配置 Element-UI
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Container)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Backtop)
// Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
