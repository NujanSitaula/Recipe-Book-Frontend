import { defineStore } from 'pinia';
import axios from "axios";

export const useUserStore = defineStore('user', {
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
                const token = localStorage.getItem('access_token');

                const response = await axios.get('/user/profile', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                this.user = response.data;

                // Store user details in local storage for persistence
                localStorage.setItem('user', JSON.stringify(this.user));
            } catch (error) {
                this.error = error.response?.data?.message || 'Failed to fetch user details';
            } finally {
                this.isLoading = false;
            }
        },
    },
});
