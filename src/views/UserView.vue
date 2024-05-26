<template>
  <!-- <div class="mt-7 w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto relative bg-white shadow-sm rounded-lg border"> -->
  <div class="overflow-hidden">
    <div class="max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-20 main">
        <div class="w-full h-52 bg-gray-300 shadow-lg shadow-gray-100" style="background-image: url('https://marketplace.canva.com/EAFIddmg8b0/1/0/1600w/canva-white-minimalist-corporate-personal-profile-linkedin-banner-t5iKXmGyEtU.jpg'); background-position: center; background-size: cover;">
        </div>
        <div class="flex flex-col absolute ml-5 pro_main" style="margin-top: -40px;">
          <div class=" rounded-full flex items-center justify-center pro_image" v-if="user">
            <img class="w-28 h-28 rounded-full border-2 border-white image "  :src="userImage" alt="Profile Picture">
            <div class="mt-7 ml-2 profile-name" >
              <p class="text-2xl font-semibold text-gray-800">{{ user.firstName }} {{ user.lastName }}</p>
              <p class="text-l font-semibold text-gray-500">@{{ user.username }}</p>
            </div>
          </div>
          <div class="inline-flex pt-2">
            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-followers-modal">
              {{ followers.length }} Followers
            </button>

            <div id="hs-followers-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
              <div class="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                  <div class="flex justify-between items-center py-3 px-4 border-b">
                    <h3 class="font-bold text-gray-800">
                      Followers
                    </h3>
                    <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-followers-modal">
                      <span class="sr-only">Close</span>
                      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="p-4 overflow-y-auto" >
                    <p class="mt-1 text-gray-800" v-for="(followers,index) in followers" :key="index">
                      {{ followers.firstName }} {{ followers.lastName }} @{{ followers.username }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-followee-modal">
              {{ followee.length }} Following
            </button>

            <div id="hs-followee-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
              <div class="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                  <div class="flex justify-between items-center py-3 px-4 border-b">
                    <h3 class="font-bold text-gray-800">
                      Following
                    </h3>
                    <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-followee-modal">
                      <span class="sr-only">Close</span>
                      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="p-4 overflow-y-auto grid grid-cols-3">
                    <div class="col-span-1">
                      <p class="mt-1 text-gray-800" v-for="(followee,index) in followee" :key="index">
                        <img class="w-14 h-14 rounded-full border-2 border-white image " :src="userImage" alt="User Image" />
                      </p>
                    </div>
                    <div class="col-span-1">
                    <p class="mt-1 text-gray-800" v-for="(followee,index) in followee" :key="index">
                      {{ followee.firstName }} {{ followee.lastName }} <br> @{{ followee.username }}
                    </p>
                    </div>
                    <div class="col-span-1">
                      <button type="button" class=" p-2  hover:rounded-3xl rounded-3xl w-24 transition duration-300" :class="{'bg-primary-100 hover:bg-primary-200 text-white': buttonState === 'default', 'bg-gray-500 text-white': buttonState === 'loading', 'bg-gray-300 text-gray-900': buttonState === 'success'}" @click = "followUser">
                        <span v-if="buttonState === 'default'">Follow</span>
                        <span v-else-if="buttonState === 'loading'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="1.5em" viewBox="0 0 22 22"><circle cx="4" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3"/></circle><circle cx="12" cy="12" r="3" fill="currentColor"><animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3"/></circle><circle cx="20" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3"/></circle></svg></span>
                        <span v-else-if="buttonState === 'success'">Unfollow</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div class="flex justify-end mt-1 ml-">
          <button type="button" class=" p-2  hover:rounded-3xl rounded-3xl w-24 transition duration-300" :class="{'bg-primary-100 hover:bg-primary-200 text-white': buttonState === 'default', 'bg-gray-500 text-white': buttonState === 'loading', 'bg-gray-300 text-gray-900': buttonState === 'success'}" @click = "followUser">
            <span v-if="buttonState === 'default'">Follow</span>
            <span v-else-if="buttonState === 'loading'">
              <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="1.5em" viewBox="0 0 22 22"><circle cx="4" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3"/></circle><circle cx="12" cy="12" r="3" fill="currentColor"><animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3"/></circle><circle cx="20" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3"/></circle></svg></span>
            <span v-else-if="buttonState === 'success'">Unfollow</span>
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
  computed: {
    userImage() {
      return localStorage.getItem('userImage');
    }
  },

  setup() {
    const route = useRoute();
    const user = ref(null);
    const isLoading = ref(false);
    const buttonState = ref('default');
    const followers = ref([]);
    const followee = ref([]);
    let userImage = localStorage.getItem('userImage');

    axios.defaults.baseURL = config.BASE_URL;

    onMounted(async () => {
      isLoading.value = true; // Set isLoading to true when data fetching starts
      try {
        // Fetch user data
        const userResponse = await axios.get(`/user/${route.params.username}`);
        if (userResponse.data.status === 'success') {
          user.value = userResponse.data.data;

          console.log(user.value);
          // Fetch follow status
          const followResponse = await axios.get(`/follow/${user.value.id}/status`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          if (followResponse.data.status === 'success' && followResponse.data.isFollowing) {
            buttonState.value = 'success';
          }
          const followersResponse = await axios.get(`/followers/${user.value.id}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });

          if (followersResponse.data.status === 'success') {
            followers.value = followersResponse.data.data;
          }

          const followeeResponse = await axios.get(`/followees/${user.value.id}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });

          if (followeeResponse.data.status === 'success'){
            followee.value = followeeResponse.data.data;
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
      followers,
      followee,
    };
  }
}
</script>