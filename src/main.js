import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "@/assets/thecharity/css/bootstrap.css"
import "@/assets/thecharity/css/elegant-fonts.css"
import "@/assets/thecharity/css/font-awesome.css"
import "@/assets/thecharity/css/bootstrap.css"
import "@/assets/thecharity/css/bootstrap.min.css"
import "@/assets/thecharity/css/swiper.css"
import "@/assets/thecharity/css/swiper.min.css"
import "@/assets/thecharity/css/themify-icons.css"
import "@/assets/thecharity/style.css"
import "@/assets/thecharity/js/swiper.js"

Vue.use(VueCarousel);
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
