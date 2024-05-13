<style scoped>

@media only screen and (max-width: 480px) {
  .input-field {
    display: block;
    width: 100%;
  }
}
</style>
<template>
  <Toaster ref="toaster" />
  <div class="mt-6">
    <h3 class="my-6">Update your photo and personal details here</h3>
    <hr>
    <form action="#" @submit.prevent="submitForm">
      <div class="grid grid-cols-4 my-8 input-field">
        <div class="col-span-1 w-30">
          <h1 class="text-xl font-medium text-gray-800 ">Name</h1>
        </div>
        <div class="col-span-1 px-6">
          <input type="text" id="firstName" value="Nujan" name="firstName" v-model="firstName" placeholder="Firstname" class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div class="col-span-1 px-6">
          <input type="text" id="lastName" value="Sitaula" name="lastName" v-model="lastName"  :placeholder="lastName" class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
      </div>
      <hr>

      <div class="flex justify-end mt-5">
        <button class="px-4 py-2 mr-2 text-black border-2 rounded-lg" type="reset">Cancel</button>
        <button class="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg" type="submit">Save</button>
      </div>
    </form>
  </div>
  <!-- ... -->
  <div v-if="user">
    <h2>Welcome, {{ user.data.email }}!</h2>
  </div>
  <!-- ... -->
</template>

<script>
import { onMounted, watchEffect } from 'vue';
import { useUserData } from '@/stores/userData';

export default {
  setup() {
    const userData = useUserData();

    onMounted(() => {
      userData.fetchUser();
    });

    watchEffect(() => {
      if (userData.user === null) {
        userData.fetchUser();
      }
    });

    return {
      user: userData.user,
      isLoading: userData.isLoading,
      error: userData.error,
    };
  },
};
</script>