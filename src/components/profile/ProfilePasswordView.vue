<style scoped>

@media only screen and (max-width: 480px) {
  .input-field {
    display: block;
    width: 100%;
  }
}
</style>
<template>
  <Toaster ref="toaster" />
  <div class="mt-6">
    <h3 class="my-6">Please enter your current password to change your password</h3>
    <hr>
    <form action="#" @submit.prevent="submitForm">
    <div class="grid grid-cols-4 my-8 input-field">
      <div class="col-span-1 w-30">
        <h1 class="text-xl font-medium text-gray-800 ">Current Password</h1>
      </div>
      <div class="col-span-2 px-6">
        <input type="password" id="currentPassword" name="currentPassword" v-model="currentPassword" class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
    </div>
    <hr>
      <div class="grid grid-cols-4 my-8 input-field">
        <div class="col-span-1 w-30">
          <h1 class="text-xl font-medium text-gray-800 ">New Password</h1>
        </div>
        <div class="col-span-2 px-6">
          <input type="password" id="newPassword" name="newPassword" v-model="newPassword" class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
      </div>
      <hr>
      <div class="grid grid-cols-4 my-8 input-field">
        <div class="col-span-1 w-30">
          <h1 class="text-xl font-medium text-gray-800 ">Confirm Password</h1>
        </div>
        <div class="col-span-2 px-6">
          <input type="password" id="confirmPassword" name="confirmPassword" v-model="confirmPassword" class="w-full h-11 px-2 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
      </div>
      <hr>

    <div class="flex justify-end mt-5">
      <button class="px-4 py-2 mr-2 text-black border-2 rounded-lg" type="reset">Cancel</button>
      <button class="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg" type="button" @click="submitForm">Update Password</button>
    </div>
</form>
  </div>

</template>

<script>

import { config } from '../../../config.js';
import axios from 'axios';
import {ref} from "vue";
import Toaster from "../../views/Toaster.vue";

axios.defaults.baseURL = config.BASE_URL;

export default {
  components: {Toaster},
  setup() {
    const toaster = ref(null);
    return { toaster };
  },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  },
  methods: {
    validateForm() {
      if (!this.currentPassword) {
        this.toaster.showToast('Current password is required', 'failure');
        return false;
      }

      if (this.newPassword !== this.confirmPassword) {
        this.toaster.showToast("Confirm password do not match", 'failure');
        return false;
      }

      // If all checks pass, return true
      return true;
    },
    submitForm() {

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
            })
            .catch(error => {
              if (error.response && error.response.data) {
                this.toaster.showToast(error.response.data.message, 'failure');
              } else {
                alert('An error occurred');
              }
            });
      }
    }

  }

};
</script>
