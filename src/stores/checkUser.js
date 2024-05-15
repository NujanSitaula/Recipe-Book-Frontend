import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        token: '',
        user: {}
    }),
    actions: {
        setToken(token) {
            this.token = token;
            localStorage.setItem('token', token);
        },
        setUser(user) {
            this.user = user;
        },
        clearToken() {
            this.token = '';
            localStorage.removeItem('token');
        },
        async fetchUserProfile() {
            try {
                const response = await fetch('user/profile', {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                });
                const user = await response.json();
                this.setUser(user);
            } catch (error) {
                console.error('Failed to fetch user profile:', error);
                // Handle error
            }
        }
    }
});
