import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'


Vue.use(ElementUI)

// axios基地址的配置
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
// 在发送请求的时候添加拦截器，设置token
axios.interceptors.request.use(function (config) {
  // console.log(config)
  config.headers.Authorization = localStorage.getItem('token')
  return config;
});
// 把axios添加到vue的原型链中，可以在全局中使用
Vue.prototype.$http = axios

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
