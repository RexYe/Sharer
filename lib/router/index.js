import Vue from 'vue';
import Router from 'vue-router';

const Hello = resolve => require(['@/pages/Hello/Hello.vue'], resolve);
const AboutMe = resolve => require(['@/pages/AboutMe/AboutMe.vue'], resolve);
const Shop = resolve => require(['@/pages/Shop/Shop.vue'], resolve);
const ShopCar = resolve => require(['@/pages/ShopCar/ShopCar.vue'], resolve);
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/aboutme',
    component: AboutMe
  }, {
    path: '/shop',
    component: Shop
  }, {
    path: '/shopcar',
    component: ShopCar
  }]
});