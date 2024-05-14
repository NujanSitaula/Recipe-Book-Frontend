<template>
  <!-- Include Toaster component -->
  <Toaster ref="toaster" />

  <div class="mt-6">
    <h3 class="my-6">Update your photo and personal details here</h3>
    <hr>
    <form action="#" @submit.prevent="submitForm">
      <div class="grid grid-cols-4 my-8 input-field">
        <div class="col-span-1 w-30">
          <h1 class="text-xl font-medium text-gray-800 ">Name</h1>
        </div>
        <div class="col-span-1 px-6" v-if="user">
          <input type="text" id="firstName"  v-model="firstName" name="firstName" placeholder="Firstname" class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div class="col-span-1 px-6">
          <input type="text" id="lastName" v-model="lastName" name="lastName" class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
      </div>
      <hr>
      <div class="grid grid-cols-4 my-8 input-field">
        <div class="col-span-1 w-30">
          <h1 class="text-xl font-medium text-gray-800 ">Email</h1>
        </div>
        <div class="col-span-2 px-6" v-if="user">
          <input type="email" id="email"  v-model="email" name="email" disabled class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
      </div>
      <hr>
      <div class="grid grid-cols-4 my-8 input-field">
        <div class="col-span-1 w-30">
          <h1 class="text-xl font-medium text-gray-800 ">Your Photo</h1>
        </div>
      </div>

      <div class="flex justify-end mt-5">
        <button class="px-4 py-2 mr-2 text-black border-2 rounded-lg" type="reset">Cancel</button>
        <button class="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg" type="submit" >Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import { watchEffect, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import axios from 'axios';
import { config } from '../../../config.js';
// Import Toaster component
import Toaster from "@/views/Toaster.vue";

axios.defaults.baseURL = config.BASE_URL;

export default {
  // Register Toaster component
  components: { Toaster },
  setup() {
    const toaster = ref(null);
    const userStore = useUserStore();
    const user = ref(null);

    const firstName = ref(userStore.user ? userStore.user.data.firstName : '');
    const lastName = ref(userStore.user ? userStore.user.data.lastName : '');
    const email = ref(userStore.user ? userStore.user.data.email : '');

    const submitForm = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios({
          method: 'patch',
          url: '/user/update',
          headers: { Authorization: `Bearer ${token}` },
          data: {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
          },
        });
        if (response.status === 200) {
          // Update the userStore user data
          userStore.user.data.firstName = firstName.value;
          userStore.user.data.lastName = lastName.value;
          userStore.user.data.email = email.value;
          // Ensure that toaster.value is properly set
          if (toaster.value) {
            toaster.value.showToast(response.data.message, 'success');
          }
        } else {
          if (toaster.value) {
            toaster.value.showToast('Failed to update user details', 'failure');
          }
        }
      } catch (error) {
        if (toaster.value) {
          toaster.value.showToast(error.message, 'failure');
        }
      }
    };

    watchEffect(() => {
      if (userStore.user === null) {
        userStore.fetchUser().then(() => {
          if (userStore.user) {
            firstName.value = userStore.user.data.firstName;
            lastName.value = userStore.user.data.lastName;
            email.value = userStore.user.data.email;
          }
        });
      } else {
        user.value = userStore.user;
        firstName.value = userStore.user.data.firstName;
        lastName.value = userStore.user.data.lastName;
        email.value = userStore.user.data.email;
      }
    });

    return {
      user,
      isLoading: userStore.isLoading,
      error: userStore.error,
      firstName,
      lastName,
      email,
      submitForm,
      // Return toaster ref
      toaster
    };
  },
};
</script>
