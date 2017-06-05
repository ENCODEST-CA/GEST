import Vue from 'vue'
import Router from 'vue-router'
import HeaderNav from '@/components/HeaderNav'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: HeaderNav
    },
  ]
})
