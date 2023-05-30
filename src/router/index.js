import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Layout = () => import('@/views/Layout')


// 路由规则
const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,
    // children: [
    //   {
    //     name:'ChaXun',
    //     path: '/chaxun',
    //     component: ChaXun,
    //   },
     
    // ]
  },
 ]
 const router = new VueRouter({
  routes
})

export default router
