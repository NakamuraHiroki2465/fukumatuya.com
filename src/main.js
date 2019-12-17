import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import App from './App.vue'
import Topheader from './components/Parts/Header.vue'
import Topfooter from './components/Parts/Footer.vue'
import ZLoader from './components/Parts/ZLoader.vue'
import MainPage from './components/MainPage.vue'
import detail from './components/Parts/detail.vue'
import subdetail from './components/Parts/subdetail.vue'
//GlobalなCSSの設定
import'./assets/globalcss.scss'
import '../node_modules/bulma/bulma.sass';
Vue.config.productionTip = false


//Mixinでメソッド、データをグローバルで共有
import GlobalMethod from './mixins/globalMethod.vue';
Vue.mixin(GlobalMethod);

Vue.component('TopHeader',Topheader)
Vue.component('TopFooter',Topfooter)
Vue.component('z-loader',ZLoader)
Vue.component('MainPage',MainPage)
Vue.component('detail',detail)
Vue.component('subdetail',subdetail)

Vue.use(VueRouter)
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
