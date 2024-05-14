import { defineStore } from 'pinia';
import { config } from '../../config.js';
import axios from 'axios';

axios.defaults.baseURL = config.BASE_URL;

export const useUserStore = defineStore('userData', {
    state: () => ({
        userProfile: {
            imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
        },
        userEmail: localStorage.getItem('userEmail') || '',
        isLoggedIn: false,
        user: null,
        isLoading: false,
        error: null,
    }),
    actions: {
        setUserProfile(userProfile) {
            this.userProfile = userProfile;
            this.userEmail = localStorage.getItem('userEmail');
        },

        setLoggedIn(value) {
            this.isLoggedIn = value;
        },

        async fetchUser() {
            this.isLoading = true;
            this.error = null;

            try {
                const response = await axios.get('/user/profile', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    },
                });

                if (response.status !== 200) {
                    throw new Error('Failed to fetch user data');
                }

                this.user = response.data;
                localStorage.setItem('user', JSON.stringify(this.user));
            } catch (error) {
                this.error = error.message;
            } finally {
                this.isLoading = false;
            }
        },

        logout() {
            // Clear user state
            this.userProfile = {};
            this.userEmail = '';
            this.isLoggedIn = false;
            this.user = null;
            this.isLoading = false;
            this.error = null;

            // Clear local storage
            localStorage.removeItem('access_token');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userProfile');
            localStorage.removeItem('user');
        }
    }
});
