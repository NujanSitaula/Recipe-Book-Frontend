import './assets/main.css'
import "preline/preline";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useUserStore } from './stores/userStore';
import { reactive } from 'vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Check if user is logged in
const token = localStorage.getItem('access_token');
if (token) {
    const userStore = useUserStore(); // Moved after app.use(pinia)
    // Set user as logged in
    userStore.setLoggedIn(true);
            // Set the user profile data in the store
    userStore.setUserProfile({imageUrl: localStorage.getItem('userProfile')});
            console.log(localStorage.getItem('userProfile'));
}
const state = reactive({
    isLoggedIn: !!localStorage.getItem('access_token')
});

app.provide('state', state);

app.mount('#app')