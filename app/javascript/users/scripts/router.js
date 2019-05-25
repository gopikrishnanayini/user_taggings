import Vue from 'vue';
import Router from 'vue-router';
import List from '../List';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: "active",
  routes: [{
      path: '/',
      name: 'User',
      component: List,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
});
