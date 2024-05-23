<template>
  <!-- Modal Button -->
  <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-toggle-password-modal-example"  @click="openModal">
    Open modal
  </button>
  <!-- End Modal Button -->

  <!-- Modal Content -->
  <div id="hs-toggle-password-modal-example" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
      <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
        <div class="flex justify-between items-center py-3 px-4 border-b">
          <h3 class="font-bold text-gray-800">
            Modal example
          </h3>
          <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm" data-hs-overlay="#hs-toggle-password-modal-example">
            <span class="sr-only">Close</span>
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <img :src="qrCodeUrl" alt="2FA QR Code" />
        <div class="p-4 overflow-y-auto">
          <div class="flex justify-center space-x-3" data-hs-pin-input="">
            <input type="text" v-model="otp1" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
            <input type="text" v-model="otp2" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
            <input type="text" v-model="otp3" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
            <input type="text" v-model="otp4" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
            <input type="text" v-model="otp5" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
            <input type="text" v-model="otp6" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
          </div>
          <p class="text-red-500">{{ errorMessage }}</p>
        </div>
        <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
          <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-toggle-password-modal-example">
            Close
          </button>
          <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" @click="verifyTfa">
            Save changes
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal Content -->

</template>
<script>
import axios from "axios";
import {config} from "../../../config.js";
import {getCurrentInstance, onMounted, ref} from "vue";

axios.defaults.baseURL = config.BASE_URL;

export default {
  setup(){
    let emit;

    onMounted(() => {
      const { emit: emitInstance } = getCurrentInstance();
      emit = emitInstance;
    });

    const qrCodeUrl = ref('');
    const otp1 = ref('');
    const otp2 = ref('');
    const otp3 = ref('');
    const otp4 = ref('');
    const otp5 = ref('');
    const otp6 = ref('');
    const errorMessage = ref('');

    const openModal = async () => {
      try {
        const response = await axios.post('user/tfa/generate', "", {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        qrCodeUrl.value = response.data.data.qr_code_url;
      } catch (error) {
        console.error(error);
      }
    };

    const verifyTfa = async () => {
      try {
        const otp = otp1.value + otp2.value + otp3.value + otp4.value + otp5.value + otp6.value;
        const response = await axios.post('user/tfa/verify', {
              otp: otp,
            },
            {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
              },
            });
        if (response.data.status === 'success') {
          // Close the modal
          console.log('OTP Verified');
          emit('close');
        } else {
          alert('OTP Invalid');
          // Set the error message
          alert(response.data.message);
          errorMessage.value = response.data.message;
        }
      } catch (error) {
        errorMessage.value = error.response.data.message;
        console.error(error);
      }
    };

    return {
      qrCodeUrl,
      otp1,
      otp2,
      otp3,
      otp4,
      otp5,
      otp6,
      errorMessage,
      openModal,
      verifyTfa
    };
  },
};
</script>