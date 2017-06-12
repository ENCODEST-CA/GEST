import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Users/Login.vue'
import Layout from '@/components/Layout/Master.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Layout},
    {path: '/login', component: Login},
    {path: '*', component: Layout, redirect: '/login'}
  ]
})
