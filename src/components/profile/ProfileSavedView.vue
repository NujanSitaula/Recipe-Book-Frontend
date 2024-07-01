<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-6 my-1">
    <div v-for="recipe in savedRecipes" :key="recipe.id" class="bg-white rounded-lg shadow-md overflow-hidden hover-zoom relative">
      <Router-link :to="`/recipe/${recipe.id}`">

        <div class="relative">
        <img :src="recipe.image" alt="Recipe Image" class="w-full h-64 object-cover transition-transform duration-300">
          <div class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3.172 5.172a4.002 4.002 0 015.656 0L10 6.343l1.172-1.171a4.002 4.002 0 115.656 5.656L10 17.657l-6.828-6.829a4.002 4.002 0 010-5.656z"/>
            </svg>
          </div>
        </div>

      <div class="p-4">
        <div class="flex items-center justify-between mb-2">
              <span class="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">{{ recipe.dietary_information && recipe.dietary_information.charAt(0).toUpperCase() + recipe.dietary_information.slice(1).toLowerCase() }}
              </span>
        </div>
          <h3 class="font-bold text-lg">{{ recipe.name }}</h3>
        <p class="text-gray-600 limited-text">{{ recipe.description }}</p>
        <div class="flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.066 3.28a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.066 3.28c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.066-3.28a1 1 0 00-.364-1.118L2.935 8.707c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.066-3.28z"/>
          </svg>
          <span class="text-gray-600 ml-1">4.9 (409)</span>
          <span class="text-gray-600 ml-4">124.99₺</span>
        </div>
      </div>
      </Router-link>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const savedRecipes = ref([]);
    const isLoading = ref(false);

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get('/saved-recipes', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        console.log('Saved recipes response:', response.data); // Debugging statement
        savedRecipes.value = response.data;
      } catch (error) {
        console.error('Error fetching saved recipes:', error);
      }
    };

    onMounted(() => {
      fetchSavedRecipes();
    });

    return {
      savedRecipes,
      isLoading,
    };
  },
};
</script>


<style scoped>
/* Add any additional styling here */
</style>
