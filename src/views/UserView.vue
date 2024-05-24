<template>
  <Toaster ref="toaster" />
  <!-- <div class="mt-7 w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto relative bg-white shadow-sm rounded-lg border"> -->
  <div class="overflow-hidden">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-20 main">
        <div class="w-full h-52 bg-gray-300 shadow-lg shadow-gray-100" style="background-image: url('https://marketplace.canva.com/EAFIddmg8b0/1/0/1600w/canva-white-minimalist-corporate-personal-profile-linkedin-banner-t5iKXmGyEtU.jpg'); background-position: center; background-size: cover;">
        </div>
        <div class="flex flex-col absolute ml-5 pro_main" style="margin-top: -40px;">
          <div class=" rounded-full flex items-center justify-center pro_image">
            <img class="w-28 h-28 rounded-full border-2 border-white image "  alt="Profile Picture">
            <div class="mt-7 ml-2 profile-name" v-if="user">

              <p class="text-2xl font-semibold text-gray-800">{{ user.firstName }} {{ user.lastName }}</p>
              <p class="text-l font-semibold text-gray-500">@{{ user.username }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-end mt-1 ml-2 settings ">
          <button type="button" class="flex p-2  hover:rounded-3xl rounded-3xl text-gray-800 hover:bg-gray-100 transition duration-300" data-hs-overlay="#hs-overlay-right">
            <svg class="h-6 w-6 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v22H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
            <span class="sr-only">Icon description</span>
            <p class="ml-1 ">Settings</p>
          </button>

        </div>
      </div>
    </div>
  </div>



</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import {config} from "../../config.js";

export default {
  setup() {
    const route = useRoute();
    const user = ref(null);
    const isLoading = ref(false);

    axios.defaults.baseURL = config.BASE_URL;

    onMounted(async () => {
      isLoading.value = true; // Set isLoading to true when data fetching starts
      try {
        const response = await axios.get(`/user/${route.params.username}`);
        if (response.data.status === 'success') {
          user.value = response.data.data;
      console.log(user);

        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        isLoading.value = false; // Set isLoading to false when data fetching is completed
      }
    });

    return {
      user
    };
  }
}
</script>