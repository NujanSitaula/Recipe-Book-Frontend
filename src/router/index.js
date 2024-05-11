import { createRouter, createWebHistory } from 'vue-router';
import { IStaticMethods } from "preline/preline";

import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import RecipeSingleView from "@/views/RecipeSingleView.vue";


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
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/recipe/:id', // Add a new route for the RecipeSingleView
      name: 'recipeSingle',
      component: RecipeSingleView,
      props: true
    }
  ]
})

export default router
