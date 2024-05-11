import './assets/main.css'
import "preline/preline";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useUserStore } from './stores/userStore';

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Check if user is logged in
const token = localStorage.getItem('access_token');
if (token) {
    const userStore = useUserStore(); // Moved after app.use(pinia)
    // Set user as logged in
    userStore.setLoggedIn(true);
    // You can also set other user details here if you have them stored in local storage

    const userProfileString = localStorage.getItem('userProfile');
            // Set the user profile data in the store
    userStore.setUserProfile({imageUrl: localStorage.getItem('userProfile')});
            console.log(localStorage.getItem('userProfile'));
}


app.mount('#app')