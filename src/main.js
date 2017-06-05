import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: {
    color: 'indigo',
    hue: 'A200'
  },
  accent: {
    color: 'grey',
    hue: 300
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
