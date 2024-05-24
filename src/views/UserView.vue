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
        <div class="flex justify-end mt-1 ml-">
          <button type="button" class=" p-2  hover:rounded-3xl rounded-3xl w-24 transition duration-300" :class="{'bg-primary-100 hover:bg-primary-200 text-white': buttonState === 'default', 'bg-gray-500 text-white': buttonState === 'loading', 'bg-gray-300 text-gray-900': buttonState === 'success'}" @click = "followUser">
            <span v-if="buttonState === 'default'">Follow</span>
            <span v-else-if="buttonState === 'loading'">Updating...</span>
            <span v-else-if="buttonState === 'success'">Following</span>
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
    const buttonState = ref('default'); // Add this line

    axios.defaults.baseURL = config.BASE_URL;

    onMounted(async () => {
      isLoading.value = true; // Set isLoading to true when data fetching starts
      try {
        // Fetch user data
        const userResponse = await axios.get(`/user/${route.params.username}`);
        if (userResponse.data.status === 'success') {
          user.value = userResponse.data.data;

          // Fetch follow status
          const followResponse = await axios.get(`/follow/${user.value.id}/status`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          if (followResponse.data.status === 'success' && followResponse.data.isFollowing) {
            buttonState.value = 'success';
          }
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        isLoading.value = false;
      }
    });


    const followUser = async () => {
      try {
        if (buttonState.value === 'default') {
          buttonState.value = 'loading'; // Set buttonState to 'loading' when the follow request starts
          const response = await axios.post(`/follow/${user.value.id}`, '', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          if (response.data.status === 'success') {
            console.log('User followed successfully');
            buttonState.value = 'success'; // Set buttonState to 'success' when the follow request is successful
          }
        } else if (buttonState.value === 'success') {
          buttonState.value = 'loading'; // Set buttonState to 'loading' when the unfollow request starts
          const response = await axios.post(`/unfollow/${user.value.id}`, '', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          if (response.data.status === 'success') {
            console.log('User unfollowed successfully');
            buttonState.value = 'default'; // Set buttonState back to 'default' when the unfollow request is successful
          }
        }
      } catch (error) {
        console.error('Error:', error);
        buttonState.value = 'default'; // Set buttonState back to 'default' if there's an error
      }
    };

    return {
      user,
      isLoading,
      followUser,
      buttonState,
    };
  }
}
</script>