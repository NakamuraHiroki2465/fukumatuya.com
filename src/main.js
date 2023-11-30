import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import vueScrollTo from 'vue-scrollto'
import 'buefy/dist/buefy.css'
import '@/assets/tailwind.css'
import {routes} from './routes'
import App from './App.vue'
import Topheader from './components/Parts/Header.vue'
import Topfooter from './components/Parts/Footer.vue'
import MainPage from './components/MainPage.vue'
//GlobalなCSSの設定
import'./assets/globalcss.scss'
import '../node_modules/bulma/bulma.sass';

Vue.config.productionTip = false


//Mixinでメソッド、データをグローバルで共有
import GlobalMethod from './mixins/globalMethod.vue';
Vue.mixin(GlobalMethod);

Vue.component('TopHeader',Topheader)
Vue.component('TopFooter',Topfooter)
Vue.component('MainPage',MainPage)

Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(vueScrollTo)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
       return savedPosition
    } else {
       return { x: 0, y: 0 }
    }
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
