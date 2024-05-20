<script>
import {defineComponent, ref, watchEffect} from 'vue';
import { useUserStore } from '@/stores/userStore';
import Toaster from "@/views/Toaster.vue";
import Modal from "@/components/profile/ProfileDetailsView.vue";

export default defineComponent({
  name: 'ProfileView',
  components: {Toaster, Modal},

  setup() {
    const userStore = useUserStore();
    const currentTab = ref('profile');
    const user = ref(null);
    const isModalOpen = ref(false); // Add this line

    watchEffect(() => {
      if (userStore.user === null) {
        userStore.fetchUser();
      } else {
        localStorage.setItem('user', JSON.stringify(userStore.user));
      }
    });

    const openModal = () => { // Add this method
      isModalOpen.value = true;
    };

    const closeModal = () => { // Add this method
      isModalOpen.value = false;
    };

    return {
      userStore,
      currentTab,
      user,
      isModalOpen, // Add this line
      openModal, // Add this line
      closeModal // Add this line
    };
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
  
}
.active-link {

  border-bottom: 2px solid #2563EB;
  padding-right: 5px;
  padding-left: 5px;
}

</style>

<template>

  <!-- <div class="mt-7 w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto relative bg-white shadow-sm rounded-lg border"> -->
    <div class="overflow-hidden">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
  <div class="mb-28 main">
    <div class="w-full h-52 bg-gray-300 shadow-lg shadow-gray-100" style="background-image: url('https://marketplace.canva.com/EAFIddmg8b0/1/0/1600w/canva-white-minimalist-corporate-personal-profile-linkedin-banner-t5iKXmGyEtU.jpg'); background-position: center; background-size: cover;"></div>
    <div class="flex flex-col items-center absolute ml-5 pro_main" style="margin-top: -40px;">
      <div class=" rounded-full flex items-center justify-center pro_image">
        <img class="w-28 h-28 rounded-full border-2 border-white image " :src="userStore.user && userStore.user.data ? userStore.user.data.image : 'Dwfault.png'" alt="Profile Picture">
        <div class="mt-7 ml-2 profile-name">
        <p class="text-2xl font-semibold text-gray-800">{{userStore.user && userStore.user.data ? userStore.user.data.firstName : 'Loading Name...'}} {{userStore.user && userStore.user.data ? userStore.user.data.lastName : 'Loading Name...'}}</p>
      <p class="text-l font-semibold text-gray-500">@its_kripa</p>
      </div>
        <div class="flex justify-end ml-2 mt-3">
          <button class="flex p-2.5 bg-blue-500 rounded-xl hover:rounded-3xl hover:bg-blue-500 transition-all duration-300 text-white" @click="openModal">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <Modal v-if="isModalOpen" :isOpen="isModalOpen" @close="closeModal" />
        </div>
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

    <router-link to="/profile/password" active-class="active-link" class="inline-flex mr-8">
      <p class="pb-2">Password</p>
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

