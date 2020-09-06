// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import VueParticles from 'vue-particles'
import '@/assets/icon/iconfont.css'
Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.use(ElementUI)
AOS.init();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
