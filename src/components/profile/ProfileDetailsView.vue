<style scoped>

@media only screen and (max-width: 480px) {
  .input-field {
    display: block;
    width: 100%;
    margin-left: 0;
    margin-right: auto;
  }
}
.closing {
  transition: all 1s ease-out;
  opacity: 0;

}
</style>
<template>
  <!-- Include Toaster component -->
  <Toaster ref="toaster" />
  <div v-if="isOpen" id="hs-bg-gray-on-hover-cards" class="fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto flex justify-center items-center bg-gray-900 bg-opacity-50" @click.self="closeModal">
    <div class="bg-white border shadow-sm rounded-xl w-full sm:max-w-4xl m-3 p-4" :class="{ 'closing': isClosing }" @click.stop>
      <div class="flex justify-between items-center py-3 px-4 border-b">
        <h3 class="font-bold text-gray-800">
          Edit Profile
        </h3>
        <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100" @click="closeModal">
          <span class="sr-only">Close</span>
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
      </div>

      <div class="p-4 overflow-y-auto">
        <div class="sm:divide-y divide-gray-200">
          <div class="mt-6">
            <h3 class="my-6">Update your photo and personal details here</h3>
            <hr />
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-4 my-8 input-field">
                <div class="col-span-1 w-30">
                  <h1 class="text-xl font-medium text-gray-800">Name</h1>
                </div>
                <div class="col-span-1 px-6">
                  <input type="text" id="firstName" v-model="firstName" name="firstName" placeholder="Firstname" class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div class="col-span-1 px-6">
                  <input type="text" id="lastName" v-model="lastName" name="lastName" placeholder="Lastname"  class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>
              </div>
              <hr />
              <div class="grid grid-cols-4 my-8 input-field">
                <div class="col-span-1 w-30">
                  <h1 class="text-xl font-medium text-gray-800">Email</h1>
                </div>
                <div class="col-span-2 px-6">
                  <input type="email" id="email" v-model="email" name="email" disabled class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 disabled:opacity-50"/>
                </div>
              </div>
              <hr />
              <div class="grid grid-cols-4 my-8 input-field">
                <div class="col-span-1 w-30">
                  <h1 class="text-xl font-medium text-gray-800">Your Photo</h1>
                </div>
                <div class="col-span-2 px-6 flex">
                  <img class="w-24 h-24 rounded-full border-2 border-white" :src="tempImageUrl" alt="Profile Picture"/>
                  <div class="flex items-center justify-center w-full ml-10">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
                      <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.
                    5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                      <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </label>
                    <input id="dropzone-file" type="file" class="hidden" @change="handleFileUpload" />
                  </div>
                </div>
              </div>
              <div class="flex justify-end mt-5">
                <button class="px-4 py-2 mr-2 text-black border-2 rounded-lg" type="reset">Cancel</button>
                <button class="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg" type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useUserStore } from '@/stores/userStore';
import axios from 'axios';
import { config } from '../../../config.js';
import Toaster from "@/views/Toaster.vue";
import { getCurrentInstance } from 'vue';

axios.defaults.baseURL = config.BASE_URL;

export default {
  components: { Toaster },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const toaster = ref(null);
    const userStore = useUserStore();
    const file = ref(null); // Add this
    const tempImageUrl = ref(localStorage.getItem('tempImageUrl') || null);
    const { emit } = getCurrentInstance();
    const isClosing = ref(false);

    const user = ref(null);
    const firstName = ref(userStore.user ? userStore.user.data.firstName : '');
    const lastName = ref(userStore.user ? userStore.user.data.lastName : '');
    const email = ref(userStore.user ? userStore.user.data.email : '');

    const handleFileUpload = (event) => {
      if (event.target.files && event.target.files.length > 0) {
        file.value = event.target.files[0]; // Update this line
        const reader = new FileReader();
        reader.onload = () => {
          tempImageUrl.value = reader.result;
          localStorage.setItem('tempImageUrl', reader.result); // Add this line
        };
        reader.readAsDataURL(event.target.files[0]); // Update this line
      } else {
        console.log('No file selected');
      }
    };

    const submitForm = async (event) => {
      event.preventDefault();

      try {
        const token = localStorage.getItem('access_token');
        const formData = new FormData();

        // Fetch user's data from userStore
        const userData = userStore.user.data;

        // Append user's data to formData
        for (const key in userData) {
          if (key !== 'image') {
            formData.append(key, userData[key]);
          }
        }

        // Check if a new image is selected
        if (tempImageUrl.value) {
          const response = await fetch(tempImageUrl.value);
          const blob = await response.blob();
          const file = new File([blob], "profile.jpg", { type: blob.type });
          formData.append('image', file);
          try {
            userStore.user.data.image = tempImageUrl.value; // Update userStore.user.data.image
            localStorage.setItem('userImage', tempImageUrl.value); // Update local storage
            tempImageUrl.value = null;
          } catch (error) {
            if (error instanceof DOMException && error.name === 'QuotaExceededError') {
              toaster.value.showToast('Failed to save image. Local storage quota exceeded.', 'failure');
              return;
            } else {
              throw error;
            }
          }
        }
        formData.append('firstName', firstName.value);
        formData.append('lastName', lastName.value);
        formData.append('email', email.value);

        // Send the form data to update user details
        const response = await axios({
          method: 'post',
          url: '/user/update',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
          data: formData,
        });

        if (response.status === 200) {
          userStore.user.data.firstName = firstName.value;
          userStore.user.data.lastName = lastName.value;
          userStore.user.data.email = email.value;
          // If a new image is selected, update tempImageUrl and local storage
          if (tempImageUrl.value) {
            userStore.user.data.image = tempImageUrl.value;
            localStorage.setItem('userImage', tempImageUrl.value);
            tempImageUrl.value = null;
          }

          // Show success message
          if (toaster.value) {
            toaster.value.showToast(response.data.message, 'success');
          }
          setTimeout(closeModal, 1000);
        } else {
          // Show failure message
          if (toaster.value) {
            toaster.value.showToast('Failed to update user details', 'failure');
          }
        }
      } catch (error) {
        // Show failure message and log error
        if (toaster.value) {
          toaster.value.showToast(error.message, 'failure');
          console.log(error);
        }
      }
    };
    const closeModal = () => {
      isClosing.value = true;
      setTimeout(() => {
        emit('close'); // Emit the 'close' event
        isClosing.value = false;
      }, 300);
    };


    watch(() => userStore.user, (newValue, oldValue) => {
      if (newValue === null) {
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
      handleFileUpload,
      submitForm,
      toaster,
      tempImageUrl,
      closeModal,
      isClosing,
    };
  },
};
</script>