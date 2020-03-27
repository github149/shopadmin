// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入axios，在原型上添加属性，让每一个实例,都可以调用
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/login.css'
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
// 请求拦截器
axios.interceptors.request.use(config => {
  if (!config.url.endsWith('/login')) {
    config.headers['Authorization'] = localStorage.getItem('token')
  }
  return config
})
axios.interceptors.response.use(
  response => {
    console.log(response)
    if (response.data.meta.status === 401) {
      router.push('/login')
      localStorage.removeItem('token')
    }
    return response
  }
)
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
