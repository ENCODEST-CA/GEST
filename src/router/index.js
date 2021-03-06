import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/Users/SignIn.vue'
import SignUp from '@/components/Users/SignUp.vue'
import Layout from '@/components/Layout/Master.vue'

Vue.use(Router)

export default new Router({
  routes: [{
        path: '/dashboard', 
        name: 'dashboard', 
        component: Layout,
        meta: { requiresAuth: true }
      },
    {path: '/login', component: SignIn},
    {path: '/sign-up', component: SignUp},
    {path: '*', component: Layout, redirect: '/login'},
  ]
})
