import { defineStore } from 'pinia';
import { config } from '../../config.js';
import axios from 'axios';

axios.defaults.baseURL = config.BASE_URL;

export const useUserData = defineStore('userData', {
    state: () => ({
        user: null,
        isLoading: false,
        error: null,
    }),
    actions: {
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
            } catch (error) {
                this.error = error.message;
            } finally {
                this.isLoading = false;
            }
        },
    },
});