<script>
import {defineComponent, ref, watchEffect} from 'vue';
import { useUserStore } from '@/stores/userStore';
import Toaster from "@/views/Toaster.vue";
import Modal from "@/components/profile/ProfileDetailsView.vue";
import axios from 'axios';
import {config} from "../../config.js";

axios.defaults.baseURL = config.BASE_URL;

export default defineComponent({
  name: 'ProfileView',
  components: {Toaster, Modal},

  setup() {
    const userStore = useUserStore();
    const currentTab = ref('profile');
    const user = ref(null);
    const isModalOpen = ref(false);
    const toaster = ref(null); // Add this line

    watchEffect(() => {
      if (userStore.user === null) {
        userStore.fetchUser();
      } else {
        localStorage.setItem('user', JSON.stringify(userStore.user));
      }
    });

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      userStore,
      currentTab,
      user,
      isModalOpen,
      openModal,
      closeModal,
      toaster,// Add this line

    };
  },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      userStore: useUserStore(),
      currentTab: 'profile',
      user: null,
      isModalOpen: false,
      buttonState: 'default',
    };
  },
  methods: {
    validateForm() {

      if (!this.currentPassword) {
        this.currentPasswordError = 'Current password is required';
        return false;
      } else {
        this.currentPasswordError = ''; // Clear the error message when the input field is not empty
      }

      // ... other validation checks

      return true;
      if (this.newPassword !== this.confirmPassword) {
        this.toaster.showToast("Confirm password do not match", 'failure');
        return false;
      }
;
    },
    submitForm() {
      this.buttonState = 'loading'; // Set button state to loading


      if (this.validateForm()) {
        const token = localStorage.getItem('access_token');
        const formData = {
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword
        };

        axios({
          method: 'post',
          url: '/user/reset-password',
          headers: {Authorization: `Bearer ${token}`},
          data: formData
        })
            .then(response => {
              this.toaster.showToast(response.data.message, 'success');

              // Clear the fields
              this.currentPassword = '';
              this.newPassword = '';
              this.confirmPassword = '';

              this.buttonState = 'success'; // Set button state to success
              setTimeout(() => {
                this.buttonState = 'default';
              }, 2000);

            })
            .catch(error => {
              if (error.response && error.response.data) {
                this.toaster.showToast(error.response.data.message, 'failure');
              } else {
                alert('An error occurred');
              }
              this.buttonState = 'default'; // Set button state back to default

            });
      } else {
        this.buttonState = 'default'; // Set button state back to default
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
});
</script>
<style scoped>

@media (max-width: 700px) {
  .pro_main{
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
   
  }
  .main{
    margin-bottom: 150px;
  }
  .pro_image{
    margin-left: auto;
    margin-right: auto;
    display:block;
  }
  .image{
    margin-left: auto;
    margin-right: auto;  
  }
  .profile-name{
    text-align: center;
    margin-top: 0;
    margin-bottom: 100px;
  }
  .profile-icon{
      flex-flow: revert;
  }
  
}
.active-link {
  border-bottom: 2px solid #DB2B39;
  padding-right: 5px;
  padding-left: 5px;
}

</style>

<template>
  <Toaster ref="toaster" />
  <!-- <div class="mt-7 w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto relative bg-white shadow-sm rounded-lg border"> -->
    <div class="overflow-hidden">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
  <div class="mb-20 main">
    <div class="w-full h-52 bg-gray-300 shadow-lg shadow-gray-100" style="background-image: url('https://marketplace.canva.com/EAFIddmg8b0/1/0/1600w/canva-white-minimalist-corporate-personal-profile-linkedin-banner-t5iKXmGyEtU.jpg'); background-position: center; background-size: cover;"></div>
    <div class="flex flex-col absolute ml-5 pro_main" style="margin-top: -40px;">
      <div class=" rounded-full flex items-center justify-center pro_image">
        <img class="w-28 h-28 rounded-full border-2 border-white image " :src="userStore.user && userStore.user.data ? userStore.user.data.image : 'Dwfault.png'" alt="Profile Picture">
        <div class="mt-7 ml-2 profile-name">
        <p class="text-2xl font-semibold text-gray-800">{{userStore.user && userStore.user.data ? userStore.user.data.firstName : 'Loading Name...'}} {{userStore.user && userStore.user.data ? userStore.user.data.lastName : 'Loading Name...'}}</p>
      <p class="text-l font-semibold text-gray-500">@its_kripa</p>
      </div>
        <div class="flex justify-end ml-2 mt-3 profile-icon">
          <button class="flex p-2.5 rounded-xl hover:rounded-3xl hover:bg-gray-100 transition-all duration-300 text-black" @click="openModal">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <Modal v-if="isModalOpen" :isOpen="isModalOpen" @close="closeModal" />
        </div>

      </div>

    </div>
    <div class="flex justify-end mt-1 ml-2">
      <button type="button" class="flex p-2  hover:rounded-3xl rounded-3xl text-gray-800 hover:bg-gray-100 transition duration-300" data-hs-overlay="#hs-overlay-right">
        <svg class="h-6 w-6 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v22H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
        <span class="sr-only">Icon description</span>
        <p class="ml-1">Settings</p>
      </button>

    </div>
  </div>

      <div id="hs-overlay-right" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full overflow-auto w-[448px] z-[80] bg-white border-sx" tabindex="-1">
        <div class="flex justify-between items-center py-3 px-4 border-b ">
          <h3 class="text-xl font-bold text-gray-800">
            Settings
          </h3>
          <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none  " data-hs-overlay="#hs-overlay-right">
            <span class="sr-only">Close modal</span>
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div class="p-4">
          <div class="">
            <h1 class="font-medium">Password</h1>
            <form action="#" @submit.prevent="submitForm">
              <div class="grid grid-cols-1 my-6 input-field">
                <div class="col-span-1 w-30">
                  <input type="password" id="currentPassword" name="currentPassword" v-model="currentPassword" placeholder="Current Password" class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div class="grid grid-cols-1 my-6 input-field">
                <div class="col-span-1 w-30">
                  <input type="password" id="newPassword" name="newPassword" v-model="newPassword" placeholder="New Password" class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div class="grid grid-cols-1 my-6 input-field">
                <div class="col-span-1 w-30">
                  <input type="password" id="confirmPassword" name="confirmPassword" v-model="confirmPassword" placeholder="Confirm Password" class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div class="mt-5">

                <button class="w-full px-4 py-2 text-sm rounded-lg transition duration-75" :class="{'bg-primary-100 text-white': buttonState === 'default', 'bg-gray-500 text-white': buttonState === 'loading', 'bg-green-500 text-white': buttonState === 'success'}" type="button" @click="submitForm">
                  <span v-if="buttonState === 'default'">Update Password</span>
                  <span v-else-if="buttonState === 'loading'">Updating...</span>
                  <span v-else-if="buttonState === 'success'">Success</span>
                </button>
              </div>
            </form>
          </div>


        </div>
        <div class="p-4">
          <div class="">
            <h1 class="font-medium">Notification</h1>
            
          </div>


        </div>


      </div>
      <nav class="mt-7 ml-5">

    <router-link to="/profile/saved" active-class="active-link" class="inline-flex mr-8">
      <p class="pb-2">Saved Recipes</p>
    </router-link>

    <router-link to="/profile/addRecipes" active-class="active-link" class="inline-flex mr-8">
      <p class="pb-2">Add Recipes</p>
    </router-link>

    <router-link to="/profile/settings" active-class="active-link" class="inline-flex mr-8">
      <p class="pb-2">Preferences</p>
    </router-link>
  </nav>
      <hr>
<router-view></router-view>
</div>
  </div>
</template>

<style>

</style>

