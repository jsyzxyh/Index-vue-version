import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import gift from '@/components/gift'
import campusRecuit from '@/components/campusRecuit'
import studyWeb from '@/components/studyWeb'
import error from '@/components/error/error'
import found404 from '@/components/error/404'
import Html from '@/components/front/Html'
import Css from '@/components/front/Css'
import Javascript from '@/components/front/Javascript'
import Network from '@/components/front/Network'
import FrontEnd from '@/components/front/FrontEnd'
import sidebar2 from '@/components/subcomponents/sidebar2.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/gift',
      name: 'gift',
      component: gift
    },
    {
      path: '/campusRecuit',
      name: 'campusRecuit',
      component: campusRecuit
    },
    {
      path: '/studyWeb',
      name: 'studyWeb',
      component: studyWeb
    },
    {
      path: '/FrontEnd',
      name: 'FrontEnd',
      component: FrontEnd,
      menuShow: true,
      children: [
        {
          path: '/FrontEnd/Html',
          component: {
            default: Html,
            aside: sidebar2
          },
          name: 'HTML', // 当前路由的name
          leaf: true, // 只有一个节点
          menuShow: true,
          children: [
            { path: '/Html/info', component: Html, name: 'HTML要点', menuShow: true }
          ]
        },
        {
          path: '/FrontEnd/Css',
          component: {
            default: Html,
            aside: sidebar2
          },
          name: 'CSS', // 当前路由的name
          menuShow: true,
          children: [
            { path: '/Css/info', component: Css, name: 'CSS要点', menuShow: true }
          ]
        },
        {
          path: '/FrontEnd/Javascript',
          component: {
            default: Html,
            aside: sidebar2
          },
          name: 'Javascript', // 当前路由的name
          menuShow: true,
          children: [
            { path: '/Javascript/info', component: Javascript, name: 'JS要点', menuShow: true }
          ]
        },
        {
          path: '/FrontEnd/Network',
          component: {
            default: Html,
            aside: sidebar2
          },
          name: 'Network', // 当前路由的name
          menuShow: true,
          children: [
            { path: '/Network/info', component: Network, name: '网络要点', menuShow: true }
          ]
        }
      ]
    },
    {
      path: '/error',
      name: 'error',
      component: error
    },
    {
      path: '/404',
      name: 'found404',
      component: found404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
