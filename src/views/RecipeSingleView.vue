<template>
  <div v-if="recipe">
    <h1>{{ recipe.name }}</h1>
    <img :src="recipe.image" alt="Recipe Image">
    <p>{{ recipe.description }}</p>
    <!-- Add more fields as needed -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import {config} from "../../config.js";

const route = useRoute();
const recipe = ref(null);
axios.defaults.baseURL = config.BASE_URL;

onMounted(async () => {
  try {
    const response = await axios.get(`/recipe/${route.params.id}`);
    if (response.data.status === 'success') {
      recipe.value = response.data.data;
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
</script>