<template>
  <h3 class="mt-10 text-2xl">Drag Image Bellow To Generate Recipe:</h3>
  <!-- ... -->
  <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
      <!-- ... -->
      <input id="dropzone-file" type="file" class="hidden" @change="onFileChange" />
    </label>
  </div>
  <button class="bg-primary-200 text-white p-5" @click="generateRecipe">Generate Recipe</button>
  <div v-if="recipe" class="mt-5 p-5 border rounded shadow">
    <h2 class="text-2xl font-bold mb-5">{{ recipe.title }}</h2>
    <div v-html="recipe.content"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null,
      recipe: null,
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
    },
    async generateRecipe() {
      if (!this.file) {
        alert('Please select a file');
        return;
      }

      const formData = new FormData();
      formData.append('image', this.file);

      try {
        const response = await axios.post('https://recipe-book-backend.test/api/v1/ml/image', formData);
        if (response.data.status === 'success') {
          this.recipe = {
            title: response.data.data.split('\n\n')[0],
            content: response.data.data.split('\n\n').slice(1).join('\n\n').replace(/\n/g, '<br />'),
          };
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>