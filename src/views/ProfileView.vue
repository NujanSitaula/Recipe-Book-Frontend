<script>
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/userStore';

export default defineComponent({
    setup() {
        const userStore = useUserStore();

        return {
            userStore
        };
    }
});
</script>

<template>
    <div class="mt-auto bg w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto relative">
      <div class="w-full h-60 bg-gray-300 mb-10"></div>
      <div class="flex flex-col items-center absolute top-0 left-0 right-0">
        <div class="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mt-48">
          <img class="w-20 h-20 rounded-full" :src="userStore.userProfile?.imageUrl" alt="Profile Picture">
        </div>
      </div>
      <nav class="mt-10">
        <router-link to="/profile" class="mr-4">My Recipes</router-link>
        <router-link to="/profile/saves" class="mr-4">My Saves</router-link>
        <router-link to="/profile/settings">Settings</router-link>
      </nav>
      <router-view />
    </div>
  </template>