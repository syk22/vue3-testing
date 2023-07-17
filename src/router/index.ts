import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "test" */ '../views/TestView.vue'),
  },
  {
    path: '/articles',
    name: 'articles',
    component: () =>
      import(/* webpackChunkName: "articles" */ '../components/routing/ArticleList.vue'),
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: () =>
      import(/* webpackChunkName: "article" */ '../components/routing/ArticleDetail.vue'),
    props: true,
  },
  {
    path: '/:notFound(.*)',
    component: () => import(/* webpackChunkName: "404" */ '../components/routing/404NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
