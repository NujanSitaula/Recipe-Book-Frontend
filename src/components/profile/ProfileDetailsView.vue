<template>
  <div v-if="user">
    <h1>Welcome, {{ user.name }}!</h1>
    <p>Your email: {{ user.email }}</p>
  </div>
  <div v-else-if="isLoading">Loading user details...</div>
  <div v-else-if="error">Error: {{ error }}</div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore.js';

const userStore = useUserStore();
userStore.fetchUser();
</script>