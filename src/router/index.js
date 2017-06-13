import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Users/Login.vue'
import SignUp from '@/components/Users/SignUp.vue'
import Layout from '@/components/Layout/Master.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Layout},
    {path: '/login', component: Login},
    {path: '/sign-up', component: SignUp},
    {path: '*', component: Layout, redirect: '/login'},
  ]
})
