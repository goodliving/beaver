import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import vueBeauty from 'vue-beauty'
import 'vue-beauty/package/style/vue-beauty.min.css'
Vue.use(vueBeauty)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
