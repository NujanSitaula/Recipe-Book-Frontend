import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/userStore';

import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import RecipeSingleView from "@/views/RecipeSingleView.vue";
import RecipeSearchView from "@/views/RecipeSearchView.vue";
import ProfileView from '@/views/ProfileView.vue';

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
      component: LoginView,
      meta: { requiresGuest: true }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { requiresGuest: true }
    },
    {
      path: '/recipe/:id', // Add a new route for the RecipeSingleView
      name: 'recipeSingle',
      component: RecipeSingleView,
      props: true
    },
    {
      path: '/search',
      name: 'search',
      component: RecipeSearchView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some(record => record.meta.requiresGuest) && userStore.isLoggedIn) {
    // This route requires guest, check if logged in
    // if yes, redirect to home page.
    next({ name: 'home' })
  } else {
    next() // make sure to always call next()!
  }
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some(record => record.meta.requiresGuest) && userStore.isLoggedIn) {
    // This route requires guest, check if logged in
    // if yes, redirect to home page.
    next({ name: 'home' })
  } else {
    next() // make sure to always call next()!
  }
})

export default router