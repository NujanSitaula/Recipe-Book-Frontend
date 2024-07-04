<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-6 my-1">
    <div v-for="recipe in savedRecipes" :key="recipe.id" class="bg-white rounded-lg shadow-md overflow-hidden hover-zoom relative">
      <Router-link :to="`/recipe/${recipe.id}`">

        <div class="relative">
        <img :src="recipe.image" alt="Recipe Image" class="w-full h-64 object-cover transition-transform duration-300">

        </div>

      <div class="p-4">
        <div class="flex items-center justify-between mb-2">
              <span class="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">{{ recipe.dietary_information && recipe.dietary_information.charAt(0).toUpperCase() + recipe.dietary_information.slice(1).toLowerCase() }}
              </span>
        </div>
          <h3 class="font-bold text-lg">{{ recipe.name }}</h3>
        <p class="text-gray-600 limited-text">{{ recipe.description }}</p>
        <div class="flex items-center mt-2">

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
