import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        userProfile: {
            imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
        },
        userEmail: localStorage.getItem('userEmail') || '',
        isLoggedIn: false,
    }),
    actions: {
        setUserProfile(userProfile) {
            this.userProfile = userProfile;
            this.userEmail = localStorage.getItem('userEmail');
        },

        setLoggedIn(value) {
            this.isLoggedIn = value;
        },

        logout() {
            // Clear user state
            this.userProfile = {};
            this.userEmail = '';
            this.isLoggedIn = false;

            // Clear local storage
            localStorage.removeItem('access_token');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userProfile');
        }
    }
});