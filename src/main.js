import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 重置样式
import 'normalize.css'
//加载全局样式
import './assets/styles/common.less'

// 引入element-ui
// import 'element-ui/lib/theme-chalk/index.css'
// import element from './element/index'
// Vue.use(element)

//全局引入element-ui 按需引入是全局引入3倍，也就说用了1/3就是一样
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
