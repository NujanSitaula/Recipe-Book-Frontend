<template>
  <!-- <div class="mt-7 w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto relative bg-white shadow-sm rounded-lg border"> -->
  <div class="overflow-hidden">
    <div class="max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-20 main">
        <div class="w-full h-52 bg-gray-300 shadow-lg shadow-gray-100" style="background-image: url('https://marketplace.canva.com/EAFIddmg8b0/1/0/1600w/canva-white-minimalist-corporate-personal-profile-linkedin-banner-t5iKXmGyEtU.jpg'); background-position: center; background-size: cover;">
        </div>
        <div class="flex flex-col absolute ml-5 pro_main" style="margin-top: -40px;">
          <div class="rounded-full flex items-center justify-center pro_image" v-if="user">
            <img class="w-28 h-28 rounded-full border-2 border-white image "  :src="user.image" alt="Profile Picture">
            <div class="mt-10 ml-2 profile-name " >
              <p class="text-2xl font-semibold text-gray-800 inline-flex">{{ user.firstName }} {{ user.lastName }}</p> <p class="text-l font-semibold text-gray-500 inline-flex">@{{ user.username }}</p>


              <div class=" pt-2">
                <button type="button" class="py-1 px-2 mr-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-followers-modal">
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
                      <div class="p-4 overflow-y-auto grid grid-cols-3" v-for="(followers,index) in followers" :key="index">
                        <div class="col-span-1">
                          <p class="mt-1 text-gray-800">
                            <img class="w-14 h-14 rounded-full border-2 border-white image " :src="followers.image" alt="User Image" />
                          </p>
                        </div>
                        <div class="col-span-1">
                          <p class="mt-1 text-gray-800" >
                            {{ followers.firstName }} {{ followers.lastName }} <br> @{{ followers.username }}
                          </p>
                        </div>
                        <div class="col-span-1">
                          <button type="button" class=" p-2  hover:rounded-3xl rounded-3xl w-24 transition duration-300" :class="{'bg-primary-100 hover:bg-primary-200 text-white': !followers.isFollowing, 'bg-gray-300 text-gray-900': followers.isFollowing}" @click = "followUser(followers)">
                            <span v-if="!followers.isFollowing">Follow</span>
                            <span v-else>Unfollow</span>
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <button type="button" class="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-200 text-black hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-followee-modal">
                  {{ followees.length }} Following
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
                      <div class="p-4 overflow-y-auto grid grid-cols-3" v-for="(followees,index) in followees" :key="index">
                        <div class="col-span-1">
                          <p class="mt-1 text-gray-800" >
                            <img class="w-14 h-14 rounded-full border-2 border-white image " :src="followees.image" alt="User Image" />
                          </p>
                        </div>
                        <div class="col-span-1">
                          <p class="mt-1 text-gray-800" >
                            {{ followees.firstName }} {{ followees.lastName }} <br> @{{ followees.username }}
                          </p>
                        </div>
                        <div class="col-span-1">
                          <button type="button" class=" p-2  hover:rounded-3xl rounded-3xl w-24 transition duration-300" :class="{'bg-primary-100 hover:bg-primary-200 text-white': !followees.isFollowing, 'bg-gray-300 text-gray-900': followees.isFollowing}" @click = "followUser(followees)">
                            <span v-if="!followees.isFollowing">Follow</span>
                            <span v-else>Unfollow</span>
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>

          </div>

        </div>
        <div class="flex justify-end mt-1 ml-">
          <button type="button" class=" p-2  hover:rounded-3xl rounded-3xl w-24 transition duration-300" :class="{'bg-primary-100 hover:bg-primary-200 text-white': user && !user.isFollowing, 'bg-gray-500 text-white': user && user.isFollowing}" @click = "followUser(user)">
            <span v-if="user && !user.isFollowing">Follow</span>
            <span v-else>Unfollow</span>
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
    const followers = ref([]);
    const followees = ref([]);

    axios.defaults.baseURL = config.BASE_URL;

    onMounted(async () => {
      isLoading.value = true; // Set isLoading to true when data fetching starts
      try {
        // Fetch user data
        const userResponse = await axios.get(`/user/${route.params.username}`);
        if (userResponse.data.status === 'success') {
          user.value = userResponse.data.data;

          // Fetch followers data
          const followersResponse = await axios.get(`/followers/${user.value.id}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });

          if (followersResponse.data.status === 'success') {
            followers.value = followersResponse.data.data;
            // Initialize isFollowing for each follower
            for (let follower of followers.value) {
              const followStatusResponse = await axios.get(`/follow/${follower.id}/status`, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
              });
              follower.isFollowing = followStatusResponse.data.isFollowing;
            }
          }

          // Fetch followees data
          const followeeResponse = await axios.get(`/followees/${user.value.id}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });

          if (followeeResponse.data.status === 'success'){
            followees.value = followeeResponse.data.data;
            // Initialize isFollowing for each followee
            for (let followee of followees.value) {
              const followStatusResponse = await axios.get(`/follow/${followee.id}/status`, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
              });
              followee.isFollowing = followStatusResponse.data.isFollowing;
            }
          }
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        isLoading.value = false;
      }
    });

    const followUser = async (user) => {
      try {
        if (!user.isFollowing) {
          const response = await axios.post(`/follow/${user.id}`, '', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          if (response.data.status === 'success') {
            user.isFollowing = true;
          }
        } else {
          const response = await axios.post(`/unfollow/${user.id}`, '', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          if (response.data.status === 'success') {
            user.isFollowing = false;
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return {
      user,
      isLoading,
      followUser,
      followers,
      followees,
    };
  }
};
</script>