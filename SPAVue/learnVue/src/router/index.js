import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  /* HelloWorld.vue模版，并赋值给变量HelloWorld,这里是“@”相当于“../” */
import About from '@/components/About'
import Recruit from '@/components/Recruit'
import ChildOne from '@/components/AboutChild/ChildOne'
import ChildTwo from '@/components/AboutChild/ChildTwo'
import User from '@/components/User'
import TestVuex from '@/components/TestVuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 嵌套路由
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: '/',
          component: ChildOne
        },
        {
          path: 'two',
          component: ChildTwo
        }
      ]	
    },
    {
      path: '/recruit',
      name: 'Recruit',
      component: Recruit
    },
    // 动态路径参数 以冒号开头
    { 
      path: '/user/:userId',
      component: User,
      name: 'User',
      props: true,
      children: [
        {
          path: 'one',
          component: ChildOne
        },
        {
          path: 'two',
          component: ChildTwo
        }
      ] 
    },
    {
      path: '/testVuex',
      name: 'TestVuex',
      component: TestVuex
    },
  ]
})
