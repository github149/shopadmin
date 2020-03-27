import Vue from 'vue'
import Router from 'vue-router'
// 导入Login组件，注意不要添加后缀名
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import List from '@/components/list/List'
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [

      // 展示在home 的 <router-view> 中
      {
        path: 'list',
        component: List
      }

      // ...其他子路由
    ]
  }
  ]
})
router.beforeEach((to, from, next) => {
  // 判断是否登录
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
