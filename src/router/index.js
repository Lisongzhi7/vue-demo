import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Fenlei from '@/components/fenlei/Fenlei'
import Guidang from '@/components/guidang/Guidang'
import Lianjie from '@/components/lianjie/Lianjie'
import guanyuwo from '@/components/guanyuwo/Guanyuwo'
import admin from '@/components/admin/Admin'
import detail from '@/components/detail/Detail'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: admin
    },
    {
      path: '/detail',
      name: 'Detail',
      component: detail
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/fenlei',
      name: 'Fenlei',
      component: Fenlei
    },
    {
      path: '/guidang',
      name: 'Guidang',
      component: Guidang
    },
    {
      path: '/lianjie',
      name: 'Lianjie',
      component: Lianjie
    },
    {
      path:'/guanyuwo',
      name:'guanyuwo',
      component: guanyuwo
    }
  ]


})
