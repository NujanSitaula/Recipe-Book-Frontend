<script>
import { defineComponent, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import Toaster from "@/views/Toaster.vue";


export default defineComponent({
  name: 'ProfileView',
  components: {Toaster},
  setup() {
    const userStore = useUserStore();
    const currentTab = ref('profile');

    return {
      userStore,
      currentTab
    };
  }
});
</script>
<style scoped>
.active-link {
  border-bottom: 2px solid blue;
}

@media (max-width: 700px) {
  .active-link {
    border-bottom: 2px solid blue;
  }
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
    margin-top: 0px;
    margin-bottom: 100px;
  }
  
}
</style>

<template>

  <!-- <div class="mt-7 w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto relative bg-white shadow-sm rounded-lg border"> -->
    <div class="overflow-hidden">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
  <div class="mb-28 main">
    <div class="w-full h-52 bg-gray-300 shadow-lg shadow-gray-100" style="background-image: url('https://marketplace.canva.com/EAFIddmg8b0/1/0/1600w/canva-white-minimalist-corporate-personal-profile-linkedin-banner-t5iKXmGyEtU.jpg'); background-repeat: none; background-position: center; background-size: cover;"></div>
    <div class="flex flex-col items-center absolute ml-5 pro_main" style="margin-top: -40px;">
      <div class=" rounded-full flex items-center justify-center pro_image">
        <img class="w-28 h-28 rounded-full border-2 border-white image " :src="userStore.userProfile?.imageUrl" alt="Profile Picture">
        <div class="mt-7 ml-2 profile-name">
        <p class="text-2xl font-semibold text-gray-800">Kripa Didi</p>
      <p class="text-l font-semibold text-gray-500">@its_kripa</p>
      </div>
      </div>
      

    </div>
    
  </div>
  <nav class="mt-7 ml-5">
    <router-link to="/profile/details"  active-class="active-link" class="inline-flex mr-8">
      <p class="pb-2">Profile Details</p>
    </router-link>

    <router-link to="/profile/saved" active-class="active-link" class="inline-flex mr-8">
      <p class="pb-2">Saved Recipes</p>
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

