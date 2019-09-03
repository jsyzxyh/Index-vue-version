import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/views/Index')
const gift = () => import('@/views/gift')
const campusRecuit = () => import('@/views/campusRecuit')
const studyWeb = () => import('@/views/studyWeb')
const FrontEnd = () => import('@/views/FrontEnd')
const error = () => import('@/components/error/error')
const found404 = () => import('@/components/error/404')
const HTML = () => import('@/components/front/Html')
const CSS = () => import('@/components/front/CSS')
const Javascript = () => import('@/components/front/Javascript')
const Network = () => import('@/components/front/Network')
const HTML1 = () => import('@/views/HTML/HTML1')
const HTML2 = () => import('@/views/HTML/HTML2')
const CSS1 = () => import('@/views/CSS/CSS1')
const CSS2 = () => import('@/views/CSS/CSS2')
const CSS3 = () => import('@/views/CSS/CSS3')
const CSS4 = () => import('@/views/CSS/CSS4')
const CSS5 = () => import('@/views/CSS/CSS5')
const CSS6 = () => import('@/views/CSS/CSS6')
const CSS5_1 = () => import('@/views/CSS/CSS5-1')
const CSS5_2 = () => import('@/views/CSS/CSS5-2')
const CSS6_1 = () => import('@/views/CSS/CSS6-1')
const CSS6_2 = () => import('@/views/CSS/CSS6-2')
const JS1 = () => import('@/views/JS/JS1')
const JS2 = () => import('@/views/JS/JS2')
const JS3 = () => import('@/views/JS/JS3')
const Network1 = () => import('@/views/Network/Network1')
const Network2 = () => import('@/views/Network/Network2')
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
      path: '/CSS5_1',
      name: 'CSS5_1',
      component: CSS5_1
    },
    {
      path: '/CSS5_2',
      name: 'CSS5_2',
      component: CSS5_2
    },
    {
      path: '/CSS6_1',
      name: 'CSS6_1',
      component: CSS6_1
    },
    {
      path: '/CSS6_2',
      name: 'CSS6_2',
      component: CSS6_2
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
            },
            {
              name: 'CSS3',
              path: 'CSS3',
              component: CSS3
            },
            {
              name: 'CSS4',
              path: 'CSS4',
              component: CSS4
            },
            {
              name: 'CSS5',
              path: 'CSS5',
              component: CSS5
            },
            {
              name: 'CSS6',
              path: 'CSS6',
              component: CSS6
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
              component: JS1
            },
            {
              name: 'This',
              path: 'This',
              component: JS2
            },
            {
              name: 'debounseAndThrottle',
              path: 'debounseAndThrottle',
              component: JS3
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
