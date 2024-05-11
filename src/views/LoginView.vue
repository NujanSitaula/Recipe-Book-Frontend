<template>
  <Toaster ref="toaster" />
  <div class="grid grid-cols-1 md:grid-cols-12 gap-0">
    <div class="md:col-span-6 md:order-2">
      <!-- Masonry Cards -->
      <div class="p-4 sm:p-14">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-gray-800">Sign in</h1>
          <p class="mt-2 text-sm text-gray-600">
            Don't have an account yet?
            <a class="text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/signup.html">
              Sign up here
            </a>
          </p>
        </div>

        <div class="mt-5">
          <button @click="signIn" type="button" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
            <svg class="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
              <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
              <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
              <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
              <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
            </svg>
            Sign in with Google
          </button>

          <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">Or</div>

          <!-- Form -->
          <form action="#" @submit.prevent="handleLogin">
            <div class="grid gap-y-4">
              <!-- Form Group -->
              <div>
                <label for="email" class="block text-sm mb-2">Email address</label>
                <div class="relative">
                  <input type="email" v-model="data.email" id="email" name="email" class="py-3 px-4 border-gray-200 shadow-sm ring-inset ring-gray-300 ring-1 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error">
                  <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                  </div>
                </div>
                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <!-- End Form Group -->

              <!-- Form Group -->
              <div>
                <div class="flex justify-between items-center">
                  <label for="password" class="block text-sm mb-2">Password</label>
                  <a class="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">Forgot password?</a>
                </div>
                <div class="relative">
                  <input type="password" v-model="data.password" id="password" name="password" class="py-3 px-4 block w-full border-0 border-gray-200 shadow-sm ring-inset ring-gray-300 ring-1 rounded-lg text-sm focus:border-blue-5 focus:ring-blue-5 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="password-error">
                  <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                  </div>
                </div>
                <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
              </div>
              <!-- End Form Group -->

              <!-- Checkbox -->
              <div class="flex items-center">
                <div class="flex">
                  <input id="remember-me" name="remember-me" type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500">
                </div>
                <div class="ms-3">
                  <label for="remember-me" class="text-sm">Remember me</label>
                </div>
              </div>
              <!-- End Checkbox -->

              <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Sign in</button>
            </div>
          </form>
          <!-- End Form -->
        </div>
      </div>

    </div>

    <!-- Login Form -->
    <div class="hidden md:block col-span-6 md:col-span-6 md:order-1 bg-gray-50">
      <div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <h1 class="block text-2xl font-bold text-gray-800">Trending Now</h1>
        <div class="grid sm:grid-cols-12 gap-6">

          <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">

            <!-- Card -->
            <a class="group relative block rounded-xl overflow-hidden" href="#">
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://cdn.apartmenttherapy.info/image/upload/v1558444399/k/archive/feeabd11cd6af3bdcfac46ae5e782b5501094c58.jpg" alt="Image Description">
              </div>
              <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                  Omelette
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>
          <!-- End Col -->

          <div class="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
            <!-- Card -->
            <a class="group relative block rounded-xl overflow-hidden" href="#">
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://thehappyfoodie.co.uk/wp-content/uploads/2022/03/125_AmmuChickenBiryani.jpg" alt="Image Description">
              </div>
              <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                  Biryani
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>
          <!-- End Col -->

          <div class="col-span-12 md:col-span-4">
            <!-- Card -->
            <a class="group relative block rounded-xl overflow-hidden" href="#">
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://www.pressurecookrecipes.com/wp-content/uploads/2020/04/instant-pot-chicken-curry-scaled.jpg" alt="Image Description">
              </div>
              <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                  Chicken Curry
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>
          <!-- End Col -->

          <div class="col-span-12 sm:col-span-6 md:col-span-4">
            <!-- Card -->
            <a class="group relative block rounded-xl overflow-hidden" href="#">
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://cookshop.babylonmercantile.com/cdn/shop/products/simosa.jpg" alt="Image Description">
              </div>
              <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                 Samosa
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>
          <!-- End Col -->

          <div class="col-span-12 sm:col-span-6 md:col-span-4">
            <!-- Card -->
            <a class="group relative block rounded-xl overflow-hidden" href="#">
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://www.aheadofthyme.com/wp-content/uploads/2021/02/pasta-bake-with-sausage-baked-ziti-5.jpg" alt="Image Description">
              </div>
              <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                  Rich Pasta
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Masonry Cards -->
    </div>
  </div>
</template>

<<script setup>
import { config } from '../../config.js';
import { reactive, ref } from "vue";
import axios from "axios";
import { useUserStore } from '@/stores/userStore';
import Toaster from './Toaster.vue';
import router from '@/router';

axios.defaults.baseURL = config.BASE_URL;

const data = reactive({
  email: null,
  password: null
});

const toaster = ref();

// Define userStore here
const userStore = useUserStore();

const handleLogin = () => {
  axios.post('/user/login', {
    email: data.email,
    password: data.password
  })
      .then(response => {
        // Store the access_token in local storage
        localStorage.setItem('access_token', response.data.access_token);

        // Manually update isLoggedIn value
        userStore.setLoggedIn(true);

        // Extract the image URL
        const imageUrl = response.data.data.image;
        const email = response.data.data.email;
        localStorage.setItem('userProfile', imageUrl);
        localStorage.setItem('userEmail', email);
        // Update the user profile in the store
        userStore.setUserProfile({ imageUrl: imageUrl, email: email });


        // Show success toast
        // toaster.value.showToast('Login successful');
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          alert(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          alert('Request made but no response received, might be a network issue.');
        } else {
          // Something happened in setting up the request that triggered an Error
          alert('Error', error.message);
        }
        console.error('Error:', error);
      });
};
</script>