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
          component:()=>import('../components/mainPages/UserManagement.vue')
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
