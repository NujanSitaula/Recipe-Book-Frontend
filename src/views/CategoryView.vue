<template>
  <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto main-content">
    <div class=" gap-y-8 lg:gap-y-0 lg:gap-x-6" v-if="singleCategory.data">
      <div >
        <div class="relative w-full h-64 flex">
          <img :src="singleCategory.data.image" alt="Category Image" class="w-full h-64 object-cover rounded-lg shadow-md">
          <div class="absolute inset-0 bg-black rounded-lg opacity-50"></div>
          <h1 class="absolute bottom-2 top-0 left-0 right-0 text-white flex items-center text-4xl font-bold justify-center px-2 py-1">{{ singleCategory.data.name }}</h1>
        </div>
        <p class="text-black text-xl px-2 my-3 py-1  ">{{ singleCategory.data.description }}</p>

<!--        Cuisine filter starts-->
        <div class="my-4 flex items-center" v-if="!loading.value">
          <h2 class="text-xl font-bold mb-2">Filter by Cuisine:</h2>
          <VueNextSelect :options="categories.data"
                         label-by="name"
                         value-by="id"
                         v-model="selectedCategory"
                         class="scrollable-select w-full mx-2"
                         >
          </VueNextSelect>
          </div>
<!--        Cuisine filter ends-->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-6">
        <div v-for="recipe in singleCategory.data.recipes" :key="recipe.id" class="bg-white rounded-lg shadow-md overflow-hidden hover-zoom relative">
          <router-link :to="`/recipe/${recipe.id}`">
            <div class="relative">
              <img :src="recipe.image" alt="Recipe Image" class="w-full h-64 object-cover transition-transform duration-300">
              <div class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3.172 5.172a4.002 4.002 0 015.656 0L10 6.343l1.172-1.171a4.002 4.002 0 115.656 5.656L10 17.657l-6.828-6.829a4.002 4.002 0 010-5.656z"/>
                </svg>
              </div>
            </div>
          </router-link>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">{{ recipe.dietary_information && recipe.dietary_information.charAt(0).toUpperCase() + recipe.dietary_information.slice(1).toLowerCase() }}</span>
            </div>
            <router-link :to="`/recipe/${recipe.id}`">
              <h3 class="font-bold text-lg">{{ recipe.name }}</h3>
            </router-link>
            <p class="text-gray-600 limited-text">{{ recipe.description }}</p>
            <div class="flex items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.066 3.28a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.066 3.28c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.066-3.28a1 1 0 00-.364-1.118L2.935 8.707c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.066-3.28z"/>
              </svg>
              <span class="text-gray-600 ml-1">4.9 (409)</span>
              <span class="text-gray-600 ml-4">124.99₺</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { getSingleCategory, getCategories } from '../api/Categories.js';
import { onMounted, reactive, ref, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import VueNextSelect from 'vue-next-select';
import 'vue-next-select/dist/index.min.css';


const route = useRoute();
const router = useRouter();
const singleCategory = reactive({data: {}});
const categories = reactive({data: []});
const loading = ref(true);
const selectedCategory = ref('');

onMounted(async () => {
  window.scrollTo(0,0);
  try {
    const categoryId = route.params.id;
    singleCategory.data = await getSingleCategory(categoryId);
    loading.value = false;

  } catch (error) {
    console.error('Error:', error);
  }
  try {
    categories.data = await getCategories();
    console.log(categories.data); // Add this line

  } catch (error) {
    console.error('Error:', error);
  }
});

watch(selectedCategory, (newCategoryId) => {
  if (newCategoryId) {
    router.push(`/category/${newCategoryId}`);
  }
});

watchEffect(async () => {
  const categoryId = route.params.id;
  if (categoryId) {
    try {
      singleCategory.data = await getSingleCategory(categoryId);
      categories.data = await getCategories();
    } catch (error) {
      console.error('Error:', error);
    }
  }
});
</script>

<style scoped>

.scrollable-select ::v-deep .vue-dropdown {
  border: 1px solid #ccc;
  border-radius: 6px;
  max-height: 10px; /* Adjust dropdown max height */
  overflow-y: auto; /* Enable vertical scroll */
}

.scrollable-select ::v-deep .vue-dropdown-item {
  padding: 10px;
  background-color: #fff;
}

.scrollable-select ::v-deep .vue-dropdown-item:hover {
  background-color: #e2e8f0; /* Light blue on hover */
}

.scrollable-select ::v-deep .vue-dropdown-item.highlighted {
  background-color: #f0f0f0; /* Light gray for highlighted items */
}

.scrollable-select ::v-deep .vue-dropdown-item.selected {
  background-color: rgba(219,43,57,0.75) /* Light green for selected item */
}

.scrollable-select ::v-deep .vue-select-header .vue-input input {
  border-radius:10px;
  padding: 10px;
  width: 100%;
}

.scrollable-select ::v-deep .vue-select-header .icon.arrow-downward {
  fill: #333;
}
</style>