import './assets/main.css'
import "preline/preline";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useUserData } from './stores/userData.js';
import InstantSearch from 'vue-instantsearch/vue3/es';
import { reactive } from 'vue';

const app = createApp(App)
app.use(InstantSearch);
app.use(createPinia())
app.use(router)

// Check if user is logged in
const token = localStorage.getItem('access_token');
if (token) {
    const userData = useUserData(); // Moved after app.use(pinia)
    // Set user as logged in
    userData.setLoggedIn(true);
            // Set the user profile data in the store
    userData.setUserProfile({imageUrl: localStorage.getItem('userProfile')});
            console.log(localStorage.getItem('userProfile'));
}
const state = reactive({
    isLoggedIn: !!localStorage.getItem('access_token')
});

app.provide('state', state);

app.mount('#app')