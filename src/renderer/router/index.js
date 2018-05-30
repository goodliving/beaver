import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';

Vue.use(iView);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})