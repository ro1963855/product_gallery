import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Detail from '@/components/Detail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/vue/product_gallery/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
    },
  ],
});
