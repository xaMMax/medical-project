import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import ConsultationDetails from "@/views/ConsultationDetails.vue";
import DashboardPage from "@/views/DashboardPage.vue";
import ConsultationsListComponent from "@/components/ConsultationsListComponent.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/consultations',
    name: 'consultationsList',
    component: ConsultationsListComponent,
    meta: { requiresAuth: true },
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterComponent,
  },
  {
    path: '/consultations/:id',
    name: 'consultationDetails',
    component: ConsultationDetails,
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = !!localStorage.getItem('accessToken');

    if (requiresAuth && !isAuthenticated) {
      next('/login');
    } else {
      next();
    }
});

export default router;
