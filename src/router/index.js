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
      component: MjsyCatalog
    },
    {
      path:'/content',
      name:'content',
      component:MjsyContent
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
