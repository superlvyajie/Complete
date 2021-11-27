import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: () => import('../views/Home.vue'),
      children:[
        {
          path:'/',
          redirect:'welcome'
        },
        {
          name:'welcome',
          path:'welcome',
          component:()=>import('../components/mainPages/Welcome.vue')
        },
        {
          path:'users',
          component:()=>import('../components/mainPages/user/UserManagement.vue')
        },
        {
          path:'roles',
          component:()=>import('../components/mainPages/rights/RoleList.vue')
        },
        {
          path:'rights',
          component:()=>import('../components/mainPages/rights/PermissionList.vue')
        },
        {
          path:'goods',
          component:()=>import('../components/mainPages/goods/ProductList.vue')
        },
        {
          path:'params',
          component:()=>import('../components/mainPages/goods/ClassificationParams.vue')
        },
        {
          path:"categories",
          component:()=>import('../components/mainPages/goods/CommodityClassification.vue')
        },
        {
          path:"orders",
          component:()=>import('../components/mainPages/order/OderList.vue')
        },
        {
          path:"reports",
          component:()=>import('../components/mainPages/data/DataReport.vue')
        }
      ]
    },
    {
      path: "/login",
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router
