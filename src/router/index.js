import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import gift from '@/views/gift'
import campusRecuit from '@/views/campusRecuit'
import studyWeb from '@/views/studyWeb'
// import Dashboard from '@/views/dashboard'
import FrontEnd from '@/views/FrontEnd'
import error from '@/components/error/error'
import found404 from '@/components/error/404'
import HTML from '@/components/front/Html'
import CSS from '@/components/front/Css'
import Javascript from '@/components/front/Javascript'
import Network from '@/components/front/Network'
import HTML1 from '@/views/HTML/HTML1'
import HTML2 from '@/views/HTML/HTML2'
import CSS1 from '@/views/CSS/CSS1'
import CSS2 from '@/views/CSS/CSS2'
import letConst from '@/views/JS/letConst'
import This from '@/views/JS/This'
import Network1 from '@/views/Network/Network1'
import Network2 from '@/views/Network/Network2'
Vue.use(Router)

export default new Router({
  // mode: 'history',
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
      // redirect: '/dashboard',
      component: FrontEnd,
      children: [
        {
          name: 'HTML',
          path: 'HTML',
          component: HTML,
          children: [
            {
              name: 'HTML1',
              path: 'HTML1',
              component: HTML1
            },
            {
              name: 'HTML2',
              path: 'HTML2',
              component: HTML2
            }
          ]
        },
        {
          name: 'CSS',
          path: 'CSS',
          component: CSS,
          children: [
            {
              name: 'CSS1',
              path: 'CSS1',
              component: CSS1
            },
            {
              name: 'CSS2',
              path: 'CSS2',
              component: CSS2
            }
          ]
        },
        {
          name: 'Javascript',
          path: 'Javascript',
          component: Javascript,
          children: [
            {
              name: 'letConst',
              path: 'letConst',
              component: letConst
            },
            {
              name: 'This',
              path: 'This',
              component: This
            }
          ]
        },
        {
          name: 'Network',
          path: 'Network',
          component: Network,
          children: [
            {
              name: 'Network1',
              path: 'Network1',
              component: Network1
            },
            {
              name: 'Network2',
              path: 'Network2',
              component: Network2
            }
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
