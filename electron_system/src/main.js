import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element ui 方式为完整引入 + 引入e ui样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入axios 用于做数据请求
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入fontawesome字体图标
// 使用方法字体图标请参考官网
import 'font-awesome/css/font-awesome.min.css'


// 将axios使用 作为一个全局的配置
Vue.use(VueAxios,axios)

// 使用e ui
Vue.use(ElementUI)



//当前开发环境的提醒 关闭
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
