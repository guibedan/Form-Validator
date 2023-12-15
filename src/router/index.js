import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cad from '../views/Cad.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cadastro', component: Cad },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;