<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-6 my-1">
      <a href="/addrecipe" class="bg-red-50 rounded-lg shadow-md overflow-hidden hover-zoom relative flex flex-col justify-center items-center cursor-pointer">
        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#DB2B39">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M4 12H20M12 4V20" stroke="#DB2B39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
        <p class="text-primary-100 text-l">Add Recipe</p>
      </a>
      <div v-for="recipe in userRecipes" :key="recipe.id" class="bg-white rounded-lg shadow-md overflow-hidden hover-zoom relative ">
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
          </div>
        </Router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const userRecipes = ref([]);
    const isLoading = ref(true);

    const fetchUserRecipes = async () => {
      const user = JSON.parse(localStorage.getItem('user')); // Fetch the user data from local storage
      if (user && user.data) { // Check if user data exists
        const userId = user.data.id; // Get the user ID from the user data
        try {
          const response = await axios.get(`/recipe/user/${userId}`,{
            headers:{
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            }
          });
          // Create a new array with the fetched recipes and assign it to userRecipes.value
          userRecipes.value = [...response.data.data];
          console.log('User recipes:', userRecipes.value); // Debugging statement
        } catch (error) {
          console.error('Error fetching user recipes:', error);
          throw error; // Throw the error to stop execution
        } finally {
          isLoading.value = false; // Set isLoading to false after the data fetch
        }
      }
    };

    // Watch the user data in local storage
    watch(() => localStorage.getItem('user'), () => {
      // Add a delay before starting the data fetching
      setTimeout(fetchUserRecipes, 100); // Delay of 1 second
    }, { immediate: true });

    // Add a watch to update isLoading whenever userRecipes changes
    watch(userRecipes, () => {
      isLoading.value = userRecipes.value.length === 0;
    }, { immediate: true }); // Run the watcher immediately when the component is created

    return {
      userRecipes,
      isLoading,
    };
  },
};
</script>