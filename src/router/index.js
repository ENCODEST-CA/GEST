import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Users/Login.vue'
import NewTasts from '@/components/Users/NewTasts.vue'
import SignUp from '@/components/Users/SignUp.vue'
import Layout from '@/components/Layout/Master.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Layout, children: [
    	{path: '/NewTasts', component: NewTasts},
    ]},
    {path: '/login', component: Login},
    {path: '/sign-up', component: SignUp},
    //---En caso de que no encuentre ninguna de las rutas declaradas redirecciona al login
    {path: '*', component: Layout, redirect: '/login'},
  ]
})
