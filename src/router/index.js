import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/userStore.js';

import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import RecipeSingleView from "@/views/RecipeSingleView.vue";
import RecipeSearchView from "@/views/RecipeSearchView.vue";
import ProfileView from '@/views/ProfileView.vue';
import ProfileDetailsView from '@/components/profile/ProfileDetailsView.vue';
import ProfileSavedView from '@/components/profile/ProfileSavedView.vue';
import TfaSetupView from "@/components/profile/TfaSetupView.vue";
import MyRecipesView from "@/components/profile/MyRecipesView.vue";
import AddRecipeView from "@/views/AddRecipeView.vue";
import CategoryView from "@/views/CategoryView.vue";




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
      component: ProfileView,
      redirect: '/profile/myrecipes',
      meta: { requiresAuth: true },
      children: [{
        path: 'details',
        name: 'details',
        component: ProfileDetailsView
      },{
        path: 'saved',
        name: 'saved',
        component: ProfileSavedView
      }, {
        path: 'setup-tfa',
        name: 'setup-tfa',
        component: TfaSetupView
      },{
        path: 'myrecipes',
        name: 'myrecipes',
        component: MyRecipesView
      }
    ]
    },
    {
      path: '/checkuser',
      name: 'checkuser',
      component: () => import('../views/CheckView.vue')
    },
    {
      path: '/aitool',
      name: 'aitool',
      component: () => import('../views/MachineLearningView.vue')
    },
    {
      path: '/:username',
      name: 'user',
      component: () => import('../views/UserView.vue')

    },
    {
        path: '/addRecipe',
        name: 'addRecipe',
        component: AddRecipeView,
        meta: { requiresAuth: true }

    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoryView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some(record => record.meta.requiresAuth) && !userStore.isLoggedIn) {
    // This route requires auth, check if logged in
    // if not, redirect to login page.
    next({ name: 'login' })
  } else if (to.matched.some(record => record.meta.requiresGuest) && userStore.isLoggedIn) {
    // This route requires guest, check if logged in
    // if yes, redirect to home page.
    next({ name: 'home' })
  } else {
    next() // make sure to always call next()!
  }
})

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100)
  }
});



export default router