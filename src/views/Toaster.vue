<template>
  <transition name="slide-fade">
    <div v-if="show" class="fixed top-0 right-0 m-6 max-w-sm w-full z-50">
      <div class="rounded-lg shadow-lg overflow-hidden toaster" :class="{ 'bg-green-100': type === 'success', 'bg-red-100': type === 'failure' }">
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <!-- Success Icon -->
              <svg v-if="type === 'success'" class="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <!-- Failure Icon -->
              <svg v-if="type === 'failure'" class="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm leading-5 font-medium text-gray-900">
                {{ message }}
              </p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button @click="show = false" class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
                <!-- Close Icon -->
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
const message = ref('');
const type = ref('success');

const showToast = (msg, toastType = 'success') => {
  message.value = msg;
  type.value = toastType;
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, 3000);
};
// Expose showToast function
defineExpose({ showToast });
</script>
<style scoped>
.toaster {
  z-index: 9999;
}
.toaster.bg-green-100 {
  background-color: #d1e7dd; /* Light green */
}
.toaster.bg-red-100 {
  background-color: #fecaca; /* Light red */
}
</style>