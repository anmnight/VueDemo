import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MjsyContent from '@/components/mjsyqt/MjsyContentView'
import MjsyCatalog from '@/components/mjsyqt/MjsyCatalogView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'catalogs',
      component: MjsyCatalog,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/content',
      name: 'content',
      component: MjsyContent
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ],
  scrollBehavior:function (to,from,savedPosition) {

    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
