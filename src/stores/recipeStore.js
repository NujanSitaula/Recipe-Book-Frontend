import { defineStore } from 'pinia';
import axios from 'axios';

export const useRecipeStore = defineStore('recipeStore', {
    state: () => ({
        recipe: {
            step1Data: {},
            // Add more steps if needed
        }
    }),
    actions: {
        async saveStepData(step, data) {
            try {
                const response = await axios.post('/recipe', data,{
                    headers:{
                        'authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    }
                });
                if (response.status !== 200) {
                    alert('Failed to save step data');
                }
                this.recipe[`step${step}Data`] = data;  // Store the step data in the state
            } catch (error) {
                console.error('Failed to save step data:', error);
            }
        }
    }
});