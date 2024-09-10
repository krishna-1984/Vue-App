import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductsList from '../views/ProductsList.vue';
import ContactPage from '../views/ContactPage.vue';
import CartPage from '../views/CartPage.vue';
import LoginPage from '../views/LoginPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/home', component: HomePage, name: 'Home' },
  { path: '/products', component: ProductsList, name: 'Products' },
  { path: '/contact', component: ContactPage, name: 'Contact' },
  { path: '/cart', component: CartPage, name: 'Cart' },
  { path: '/login', component: LoginPage, name: 'Login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

