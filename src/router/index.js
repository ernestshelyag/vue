import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/pages/mainPage'
import directivi from '@/pages/directivi'
import testPage from '@/pages/testPage'
import lesson3 from '@/pages/lesson3'
import les4components from '@/pages/les4components'
import artuh from '@/pages/artuh'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/testPage',
      name: 'testPage',
      component: testPage
    },
    {
      path: '/directivi',
      name: 'directivi',
      component: directivi
    },
    {
      path: '/lesson3',
      name: 'lesson3',
      component: lesson3
    },
    {
      path: '/les4components',
      name: 'les4components',
      component: les4components
    },
    {
      path: '/artuh',
      name: 'artuh',
      component: artuh
    }


  ]
})
