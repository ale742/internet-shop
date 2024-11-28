import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import DetailView from '@/views/DetailView.vue';

const routes = [
  { path: '/',
    name: 'Home',
    component: HomeView
  },
  { path: '/about',
    name: 'About',
    component: AboutView
  },
  { path: '/detail/:id',
    name: 'detail',
    component: () => import(`../views/DetailView.vue`)
  },
  { path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;