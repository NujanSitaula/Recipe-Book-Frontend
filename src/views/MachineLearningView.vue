<template>
  <div class="max-w-2xl mx-auto">
    <!-- Comment 1 -->
    <div class="bg-white shadow-md rounded-lg p-4 mb-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <div class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-700">
            +14
          </div>
        </div>
        <div class="ml-4 w-full">
          <div class="flex justify-between items-center mb-2">
            <div>
              <h4 class="text-gray-900 font-bold">Bonnie Green</h4>
              <span class="text-gray-600 text-sm">Mar. 15, 2022</span>
            </div>
            <div class="text-gray-500">
              ...
            </div>
          </div>
          <p class="text-gray-800">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
          <button class="mt-2 text-blue-500 hover:underline">Reply</button>
        </div>
      </div>
    </div>
    <!-- Comment 2 -->
    <div class="bg-white shadow-md rounded-lg p-4 mb-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <div class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-700">
            +3
          </div>
        </div>
        <div class="ml-4 w-full">
          <div class="flex justify-between items-center mb-2">
            <div>
              <h4 class="text-gray-900 font-bold">Jese Leos</h4>
              <span class="text-gray-600 text-sm">Feb. 12, 2022</span>
            </div>
            <div class="text-gray-500">
              ...
            </div>
          </div>
          <p class="text-gray-800">Much appreciated! Glad you liked it <span class="emoji">😊</span></p>
          <button class="mt-2 text-blue-500 hover:underline">Reply</button>
        </div>
      </div>
    </div>
    <!-- Comment 3 -->
    <div class="bg-white shadow-md rounded-lg p-4 mb-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <div class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-700">
            +12
          </div>
        </div>
        <div class="ml-4 w-full">
          <div class="flex justify-between items-center mb-2">
            <div>
              <h4 class="text-gray-900 font-bold">Danny Hart</h4>
              <span class="text-gray-600 text-sm">Feb. 8, 2022</span>
            </div>
            <div class="text-gray-500">
              ...
            </div>
          </div>
          <p class="text-gray-800">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.</p>
          <button class="mt-2 text-blue-500 hover:underline">Reply</button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center ">
    <h3 class="mt-10 text-2xl font-bold text-gray-700">Upload Image Below To Generate Recipe:</h3>
    <div class="flex items-center justify-center w-full mt-5 relative">
      <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-64 h-64 rounded-lg cursor-pointer bg-white hover:bg-red-50"
          :class="{ 'border-2 border-dashed border-primary-100': !imagePreview, 'opacity-50': isLoading }"
          :style="{ backgroundImage: `url(${imagePreview})`, backgroundSize: 'cover' }"
      >
        <div v-if="!imagePreview" class="flex flex-col items-center justify-center pt-5 pb-6">
          <!-- SVG icon here -->
          <p class="mb-2 text-sm text-primary-100"><span class="font-semibold">Click to upload</span> or drag and drop</p>
          <p class="text-xs text-primary-100">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" @change="onFileChange" />
      </label>
      <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center">
        <div class="loader"></div>
      </div>
      </div>
    <button class="mt-5 px-8 py-3 font-semibold text-white bg-primary-100 rounded hover:bg-primary-200" @click="generateRecipe">Generate Recipe</button>
    <div v-if="recipe" class="mt-5 p-5 border rounded shadow">
      <h2 class="text-2xl font-bold mb-5">{{ recipe.title }}</h2>
      <div v-html="recipe.content" class="text-gray-700"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { config } from "../../config.js";

axios.defaults.baseURL = config.BASE_URL;
export default {
  data() {
    return {
      file: null,
      recipe: null,
      imagePreview: null,
      isLoading: false,
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
      // Create a URL object representing the selected file
      this.imagePreview = URL.createObjectURL(this.file);
    },
    async generateRecipe() {
      if (!this.file) {
        alert('Please select a file');
        return;
      }

      this.isLoading = true;

      const formData = new FormData();
      formData.append('image', this.file);

      try {
        const response = await axios.post('/ml/image', formData);
        if (response.data.status === 'success') {
          this.recipe = {
            title: response.data.data.split('\n\n')[0],
            content: this.formatRecipeContent(response.data.data.split('\n\n').slice(1).join('\n\n')),
          };
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        this.isLoading = false;
      }
    },

    formatRecipeContent(content) {
      const sections = content.split('**').filter(Boolean);

      return sections.map(section => {
        const lines = section.split('\n');

        let [heading, ...items] = lines;

        const formattedHeading = '<h3>' + heading.trim() + '</h3>';
        const formattedItems = items.map(item => '<li>' + item.trim() + '</li>').join('');

        return `
        ${formattedHeading}
        <ul>
          ${formattedItems}
        </ul>
      `;
      }).join('');
    },
  },
};
</script>

<style scoped>

.loader {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #d1914b;
  box-sizing: border-box;
  --c:no-repeat radial-gradient(farthest-side, #d64123 94%,#0000);
  --b:no-repeat radial-gradient(farthest-side, #000 94%,#0000);
  background:
      var(--c) 11px 15px,
      var(--b) 6px 15px,
      var(--c) 35px 23px,
      var(--b) 29px 15px,
      var(--c) 11px 46px,
      var(--b) 11px 34px,
      var(--c) 36px 0px,
      var(--b) 50px 31px,
      var(--c) 47px 43px,
      var(--b) 31px 48px,
      #f6d353;
  background-size: 15px 15px,6px 6px;
  animation: l4 3s infinite;
}
@keyframes l4 {
  0%     {-webkit-mask:conic-gradient(#0000 0     ,#000 0)}
  16.67% {-webkit-mask:conic-gradient(#0000 60deg ,#000 0)}
  33.33% {-webkit-mask:conic-gradient(#0000 120deg,#000 0)}
  50%    {-webkit-mask:conic-gradient(#0000 180deg,#000 0)}
  66.67% {-webkit-mask:conic-gradient(#0000 240deg,#000 0)}
  83.33% {-webkit-mask:conic-gradient(#0000 300deg,#000 0)}
  100%   {-webkit-mask:conic-gradient(#0000 360deg,#000 0)}
}
</style>