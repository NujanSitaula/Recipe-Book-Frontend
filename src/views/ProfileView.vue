<script>
import { defineComponent, ref, watchEffect } from 'vue';
import { useUserStore } from '@/stores/userStore';
import Toaster from "@/views/Toaster.vue";
import Modal from "@/components/profile/ProfileDetailsView.vue";
import axios from 'axios';
import { config } from "../../config.js";

axios.defaults.baseURL = config.BASE_URL;

export default defineComponent({
  name: 'ProfileView',
  components: { Toaster, Modal },

  setup() {
    const userStore = useUserStore();
    const currentTab = ref('profile');
    const user = ref(null);
    const isModalOpen = ref(false);
    const toaster = ref(null);
    const twoFactorEnabled = ref(false);
    const privateAccountEnabled = ref(false);

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
      toaster,
      twoFactorEnabled,
      privateAccountEnabled,
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
      settingEnabled: false,
      twoFactorEnabled: false,
      privateAccountEnabled: false,
      recipeRecommendations: false,
      friendsActivities: false,
      promotionalUpdates: false,
      systemNotifications: false,
      cookType: '',
    };
  },
  methods: {
    async fetchUser() {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await axios.get('/user/setting', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        if (response.status !== 200) {
          alert('Failed to fetch user data');
        }

        this.user = response.data.data[0];
        // localStorage.setItem('user', JSON.stringify(this.user));
        this.twoFactorEnabled = this.user['2fa'] === 1;
        this.privateAccountEnabled = this.user['private_account'] === 1;
        this.recipeRecommendations = this.user['recipe_recommendation'] === 1;
        this.friendsActivities = this.user['friends_activities'] === 1;
        this.promotionalUpdates = this.user['promotional_updates'] === 1;
        this.systemNotifications = this.user['system_notification'] === 1;
        this.cookType = this.user['cook_type'];
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },
    async toggleSetting(settingKey, event) {
      const enabled = event.target.checked ? 1 : 0;
      const settingsUpdate = {};
      settingsUpdate[settingKey] = enabled;

      try {
        const response = await axios.post('/user/setting', settingsUpdate, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        if (response.status !== 200) {
          alert('Failed to update user settings');
        }
        console.log(localStorage.getItem('access_token'));

        this.user[settingKey] = enabled;
        console.log(this.user);
        localStorage.setItem('user', JSON.stringify(this.user));
      } catch (error) {
        alert('An error occurred while updating user settings');
      }
    },
    async updateCookType(event) {
      const cookType = event.target.value;
      try {
        const response = await axios.post('/user/setting', { 'cook_type' :cookType }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        if (response.status !== 200) {
          alert('Failed to update user cook type');
        }

        this.user['cook_type'] = cookType;
        localStorage.setItem('user', JSON.stringify(this.user));
      } catch (error) {
        alert('An error occurred while updating user cook type');
      }
    },
    validateForm() {
      if (!this.currentPassword) {
        this.toaster.showToast('Current password is required', 'failure');
        return false;
      }

      if (this.newPassword !== this.confirmPassword) {
        this.toaster.showToast("Confirm password do not match", 'failure');
        return false;
      }

      return true;
    },
    submitForm() {
      this.buttonState = 'loading';

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
          headers: { Authorization: `Bearer ${token}` },
          data: formData
        })
            .then(response => {
              this.toaster.showToast(response.data.message, 'success');

              this.currentPassword = '';
              this.newPassword = '';
              this.confirmPassword = '';

              this.buttonState = 'success';
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
              this.buttonState = 'default';
            });
      } else {
        this.buttonState = 'default';
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  },
  mounted() {
    this.fetchUser();
  },

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
    display: flex;
    justify-content: flex-end;
  }
  .settings{
    display: none;
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
    <div class="max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8 main-content">
  <div class="mb-20 main">
    <div class="w-full h-52 bg-gray-300 shadow-lg shadow-gray-100" style="background-image: url('https://marketplace.canva.com/EAFIddmg8b0/1/0/1600w/canva-white-minimalist-corporate-personal-profile-linkedin-banner-t5iKXmGyEtU.jpg'); background-position: center; background-size: cover;"></div>
    <div class="flex flex-col absolute ml-5 pro_main" style="margin-top: -40px;">
      <div class=" rounded-full flex items-center justify-center pro_image">
        <img class="w-28 h-28 rounded-full border-2 border-white image " :src="userStore.user && userStore.user.data ? userStore.user.data.image : 'Dwfault.png'" alt="Profile Picture">
        <div class="mt-7 ml-2 profile-name">
        <p class="text-2xl font-semibold text-gray-800">{{userStore.user && userStore.user.data ? userStore.user.data.firstName : 'Loading Name...'}} {{userStore.user && userStore.user.data ? userStore.user.data.lastName : 'Loading Name...'}}</p>
      <p class="text-l font-semibold text-gray-500">@{{userStore.user && userStore.user.data ? userStore.user.data.username : 'Loading Username...'}}</p>
      </div>
        <div class="ml-2 mt-3 profile-icon">
        <button class="flex p-2.5 rounded-xl hover:rounded-3xl hover:bg-gray-100 transition-all duration-300 text-black" @click="openModal">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <Modal v-if="isModalOpen" :isOpen="isModalOpen" @close="closeModal" />
      </div>
      </div>
    </div>
    <div class="flex justify-end mt-1 ml-2 settings ">
      <button type="button" class="flex p-2  hover:rounded-3xl rounded-3xl text-gray-800 hover:bg-gray-100 transition duration-300" data-hs-overlay="#hs-overlay-right">
        <svg class="h-6 w-6 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v22H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
        <span class="sr-only">Icon description</span>
        <p class="ml-1 ">Settings</p>
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
            <h1 class="font-medium my-3">Preferences</h1>
            <h3 class="my-3">Type of cook</h3>
            <ul class="grid w-full gap-6 md:grid-cols-3">
              <li>
                <input type="radio" id="rookie" name="type_of_cook" value="rookie" class="hidden peer" required @change="updateCookType" v-model="cookType" />
                <label for="rookie" class="peer-checked:border-primary-100 peer-checked:border-2 peer-checked:text-primary-100 inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer ">
                  <div class="block">
                    <div class="w-full text-lg font-semibold">
                      <img src="https://svgshare.com/i/16HV.svg"/>
                    </div>
                    <div class="w-full text-center pt-2">Rookie</div>
                  </div>
                </label>
              </li>
              <li>
                <input type="radio" id="midbie" name="type_of_cook" value="midbie" class="hidden peer" required @change="updateCookType" v-model="cookType" />
                <label for="midbie" class="peer-checked:border-primary-100 peer-checked:border-2 peer-checked:text-primary-100 inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer ">
                  <div class="block">
                    <div class="w-full text-lg font-semibold"></div>
                    <img src="https://svgshare.com/i/16H8.svg"/>
                    <div class="w-full text-center pt-2">Midbie</div>
                  </div>
                </label>
              </li>
              <li>
                <input type="radio" id="master" name="type_of_cook" value="master" class="hidden peer" required @change="updateCookType" v-model="cookType" />
                <label for="master" class="peer-checked:border-primary-100 peer-checked:border-2 peer-checked:text-primary-100 inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer">
                  <div class="block">
                    <div class="w-full text-lg font-semibold"></div>
                    <img src="https://svgshare.com/i/16JR.svg"/>
                    <div class="w-full text-center pt-2">Master</div>
                  </div>

                </label>
              </li>
            </ul>
          </div>
        </div>
        <div class="p-4">
          <div class="">
            <h1 class="font-medium my-3">Notification</h1>
            <!-- Toggle -->
            <hr>
            <div class="grid grid-cols-2 mt-5">
              <p>Recipe Recommendations</p>
              <div class="flex justify-end">

                <input v-model="recipeRecommendations" @change="toggleSetting('recipe_recommendation', $event)" type="checkbox" class="relative w-[3.25rem] h-7 bg-gray-300 checked:bg-none checked:bg-primary-100 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent  ring-offset-white focus:outline-none appearance-none before:inline-block before:size-6 before:bg-white checked:before:bg-red-50 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200">
                <label for="toggle-count-switch" class="inline-block p-2">
                </label>
              </div>
            </div>
            <div class="flex justify-center mb-4">
            </div>
            <hr>
            <div class="grid grid-cols-2 mt-5">
              <p>Friends Activities</p>
              <div class="flex justify-end">
                <input v-model="friendsActivities" @change="toggleSetting('friends_activities', $event)" type="checkbox" class="relative w-[3.25rem] h-7 bg-gray-300 checked:bg-none checked:bg-primary-100 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent  ring-offset-white focus:outline-none appearance-none before:inline-block before:size-6 before:bg-white checked:before:bg-red-50 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200">
                <label for="toggle-count-switch" class="inline-block p-2">
                </label>
              </div>
            </div>
            <div class="flex justify-center mb-4">
            </div>
            <hr>
            <div class="grid grid-cols-2 mt-5">
              <p>Promotional updates</p>
              <div class="flex justify-end">

                <input v-model="promotionalUpdates" @change="toggleSetting('promotional_updates', $event)" type="checkbox" class="relative w-[3.25rem] h-7 bg-gray-300 checked:bg-none checked:bg-primary-100 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent  ring-offset-white focus:outline-none appearance-none before:inline-block before:size-6 before:bg-white checked:before:bg-red-50 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200">
                <label for="toggle-count-switch" class="inline-block p-2">
                </label>
              </div>
            </div>
            <div class="flex justify-center mb-4">
            </div>
            <hr>
            <div class="grid grid-cols-2 mt-5">
              <p>System Notifications</p>
              <div class="flex justify-end">
                <input v-model="systemNotifications" @change="toggleSetting('system_notification', $event)" type="checkbox" class="relative w-[3.25rem] h-7 bg-gray-300 checked:bg-none checked:bg-primary-100 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent  ring-offset-white focus:outline-none appearance-none before:inline-block before:size-6 before:bg-white checked:before:bg-red-50 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200">
                <label for="toggle-count-switch" class="inline-block p-2">
                </label>
              </div>
            </div>
            <div class="flex justify-center mb-4">
            </div>
            <hr>
          </div>
        </div>
        <div class="p-4">
          <div class="">
            <h1 class="font-medium my-3">Security</h1>
            <div class="grid grid-cols-2 mt-5">
              <p>2 Factor Authentication</p>
              <div class="flex justify-end">
                <input type="checkbox"  v-model="twoFactorEnabled" @change="toggleSetting('2fa', $event)" class="relative w-[3.25rem] h-7 bg-gray-300 checked:bg-none checked:bg-primary-100 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent  ring-offset-white focus:outline-none appearance-none before:inline-block before:size-6 before:bg-white checked:before:bg-red-50 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200">
                <label for="toggle-count-switch" class="inline-block p-2">
                </label>
              </div>
            </div>
            <div class="grid grid-cols-2 mt-5 mb-5">
              <p>Private Account</p>
              <div class="flex justify-end">
                <input type="checkbox" v-model="privateAccountEnabled" @change="toggleSetting('private_account', $event)" class="relative w-[3.25rem] h-7 bg-gray-300 checked:bg-none checked:bg-primary-100 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent  ring-offset-white focus:outline-none appearance-none before:inline-block before:size-6 before:bg-white checked:before:bg-red-50 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200">
                <label for="toggle-count-switch" class="inline-block p-2">
                </label>
              </div>
            </div>
            <hr>
            <h3 class="my-3">Password</h3>
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
              <div class="mt-5 mb-5">
                <button class="w-full px-4 py-2 text-sm rounded-lg transition duration-75" :class="{'bg-primary-100 text-white': buttonState === 'default', 'bg-gray-500 text-white': buttonState === 'loading', 'bg-green-500 text-white': buttonState === 'success'}" type="button" @click="submitForm">
                  <span v-if="buttonState === 'default'">Update Password</span>
                  <span v-else-if="buttonState === 'loading'">Updating...</span>
                  <span v-else-if="buttonState === 'success'">Success</span>
                </button>
              </div>
            </form>
        </div>
            <hr>
            <h3 class="my-3">Account Deactivation</h3>
            <button class="w-full px-4 py-2 text-sm rounded-lg transition duration-75 bg-primary-100 text-white" type="button">
              <span>Deactivate</span>
            </button>
          </div>
      </div>

      <nav class="mt-7 ml-5">

    <router-link to="/profile/saved" active-class="active-link" class="inline-flex mr-8">
      <p class="pb-2">Saved Recipes</p>
    </router-link>

    <router-link to="/profile/setup-tfa" active-class="active-link" class="inline-flex mr-8">
      <p class="pb-2">Setup 2FA</p>
    </router-link>

    <router-link to="/" active-class="active-link" class="inline-flex mr-8">
      <p class="pb-2">Preferences</p>
    </router-link>
  </nav>
      <hr>
<router-view></router-view>
</div>
  </div>
</template>
