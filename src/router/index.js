import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import gift from '@/components/gift'
import campusRecuit from '@/components/campusRecuit'
import studyWeb from '@/components/studyWeb'
import error from '@/components/error/error'
import found404 from '@/components/error/404'

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
