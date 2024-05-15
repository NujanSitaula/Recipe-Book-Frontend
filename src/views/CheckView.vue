<template>
  <div v-if="userStore.isAuthenticated" class="container mx-auto mt-8">
    <div class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="text-center mb-4">
        <h2 class="text-2xl font-bold">{{ userStore.user.name }}</h2>
        <p class="text-gray-600">{{ userStore.user.email }}</p>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">Profile Information</h3>
        <div class="flex flex-col space-y-2">
          <div>
            <span class="font-semibold">Username:</span> {{ userStore.user.username }}
          </div>
          <div>
            <span class="font-semibold">Bio:</span> {{ userStore.user.bio }}
          </div>
          <!-- Add more user information fields here -->
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="text-center text-red-600">You need to be logged in to view this page.</p>
  </div>
</template>

<script>
import { useUserStore } from '../stores/checkUser.js';
import { onMounted } from 'vue';

export default {
  setup() {
    const userStore = useUserStore();

    // Fetch user profile information when the component is mounted
    onMounted(() => {
      if (userStore.isAuthenticated) {
        userStore.fetchUserProfile();
      }
    });

    return {
      userStore
    };
  }
};
</script>
