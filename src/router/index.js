import { createRouter, createWebHistory } from 'vue-router';
import { IStaticMethods } from "preline/preline";

import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import Login from "@/views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/sovia',
      name: 'sovia',
      component: Login
    }
  ]
})

export default router
