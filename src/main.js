import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import App from './App.vue'
import Topheader from './components/Parts/Header.vue'
import Topfooter from './components/Parts/Footer.vue'
import ZLoader from './components/Parts/ZLoader.vue'
import MainPage from './components/MainPage.vue'

//GlobalなCSSの設定
import './assets/stylesheet/globalcss.scss'

Vue.config.productionTip = false

Vue.component('TopHeader',Topheader)
Vue.component('TopFooter',Topfooter)
Vue.component('z-loader',ZLoader)
Vue.component('MainPage',MainPage)

Vue.use(VueRouter)
const router = new VueRouter({
  routes
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
