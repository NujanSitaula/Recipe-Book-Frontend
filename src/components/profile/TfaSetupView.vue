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
            <input type="text" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
            <input type="text" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
            <input type="text" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
            <input type="text" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
            <input type="text" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
            <input type="text" class="block size-[46px] text-center border-gray-200 border rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="⚬" data-hs-pin-input-item="">
          </div>
        </div>
        <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
          <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-toggle-password-modal-example">
            Close
          </button>
          <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
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

axios.defaults.baseURL = config.BASE_URL;

export default {
  data() {
    return {
      qrCodeUrl: '',
      tfaCode: '',
    };
  },
  methods: {
    async openModal() {
      try {
        const response = await axios.post('user/tfa/generate', "", {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        this.qrCodeUrl = response.data.data.qr_code_url;
      } catch (error) {
        console.error(error);
      }
    },
    async verifyTfa() {
      try {
        const response = await axios.post('user/tfa/verify', {
          code: this.tfaCode,
        });
        if (response.data.status === 'success') {
          // Handle successful verification
        } else {
          // Handle failed verification
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>