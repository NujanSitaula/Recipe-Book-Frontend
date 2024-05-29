<template>

  <div class="overflow-hidden">
    <div class="mt-5 max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8 main-content">
      <div class="main">
        <div class="p-4 bg-white rounded-lg">
          <!-- Stepper -->

          <div data-hs-stepper="">
            <!-- Stepper Nav -->
            <ul class=" flex flex-row gap-x-2 relative">
              <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group"  data-hs-stepper-nav-item='{
        "index": 1
      }'>
        <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
          <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-primary-100 hs-stepper-active:text-white hs-stepper-success:bg-primary-100 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
            <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
            <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          <span class="ms-2 text-sm font-medium text-gray-800">
            Basics
          </span>
        </span>
                <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-primary-100 hs-stepper-completed:bg-teal-600"></div>
              </li>

              <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{
        "index": 2
      }'>
        <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
          <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-primary-100 hs-stepper-active:text-white hs-stepper-success:bg-primary-100 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
            <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
            <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          <span class="ms-2 text-sm font-medium text-gray-800">
            Ingredients
          </span>
        </span>
                <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-primary-100 hs-stepper-completed:bg-teal-600"></div>
              </li>
              <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{
        "index": 3
      }'>
        <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
          <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-primary-100 hs-stepper-active:text-white hs-stepper-success:bg-primary-100 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
            <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
            <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          <span class="ms-2 text-sm font-medium text-gray-800">
            Recipe Steps
          </span>
        </span>
                <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-primary-100 hs-stepper-completed:bg-teal-600"></div>
              </li>

              <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{
          "index": 4
        }'>
        <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
          <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-primary-100 hs-stepper-active:text-white hs-stepper-success:bg-primary-100 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
            <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">4</span>
            <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          <span class="ms-2 text-sm font-medium text-gray-800">
            Final Details
          </span>
        </span>
                <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-primary-100 hs-stepper-completed:bg-teal-600"></div>
              </li>

              <!-- End Item -->
            </ul>
            <!-- End Stepper Nav -->

            <!-- Stepper Content -->
            <div class="mt-5 sm:mt-8">
<!--              add recipe basics-->
              <div data-hs-stepper-content-item='{
        "index": 1
      }'>
                <div class="h-auto bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <component :is="currentStepComponent" :initialData="currentStepData" @updateData="updateStepData" />

                </div>
              </div>
              <!-- end of add recipes basics -->

              <!-- First Contnet -->
              <div data-hs-stepper-content-item='{
        "index": 2
      }' style="display: none;">
                <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <h3 class="text-gray-500">
                    Second content
                  </h3>
                </div>
              </div>
              <!-- End First Content -->
              <div data-hs-stepper-content-item='{
        "index": 3
      }' style="display: none;">
                <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <h3 class="text-gray-500">
                    Third content
                  </h3>
                </div>
              </div>
              <!-- End First Content -->

              <!-- First Content -->
              <div data-hs-stepper-content-item='{
        "index": 4
      }' style="display: none;">
                <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <h3 class="text-gray-500">
                    Fourth content
                  </h3>
                </div>
              </div>
              <!-- End First Contnet -->

              <!-- Final Contnet -->
              <div data-hs-stepper-content-item='{
        "isFinal": true
      }' style="display: none;">
                <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <h3 class="text-gray-500">
                    Final content
                  </h3>
                </div>
              </div>
              <!-- End Final Contnet -->

              <!-- Button Group -->
              <div class="mt-5 flex justify-between items-center gap-x-2">
                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn="">
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  Back
                </button>
                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-primary-100 text-white hover:bg-primary-200 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn="" @click="handleNext">
                  Next
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-primary-100 text-white hover:bg-primary-200 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn="" style="display: none;">
                  Finish
                </button>
                <button type="reset" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-primary-100 text-white hover:bg-primary-200 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn="" style="display: none;">
                  Reset
                </button>
              </div>
              <!-- End Button Group -->
            </div>
            <!-- End Stepper Content -->
          </div>
          <!-- End Stepper -->
        </div>
      </div>
    </div>
  </div>

</template>
<script lang="ts">
import { ref, computed } from 'vue';
import { useRecipeStore } from '../stores/recipeStore';
import BasicRecipeView from '@/components/recipe/BasicRecipeView.vue';

export default {
  setup() {
    const recipeStore = useRecipeStore();
    const step = ref(1);
    const steps = [BasicRecipeView]; // Add more steps if needed
    const currentStepData = ref({});

    const currentStepComponent = computed(() => {
      return steps[step.value - 1];
    });

    const updateStepData = (data) => {
      currentStepData.value = data;
    };

    const handleNext = async () => {
      await recipeStore.saveStepData(step.value, currentStepData.value);
      if (step.value < steps.length) {
        step.value++;
        currentStepData.value = recipeStore.recipe[`step${step.value}Data`];
      } else {
        console.log('All steps completed');
      }
    };


    return {
      currentStepComponent,
      currentStepData,
      handleNext,
      updateStepData
    };
  }
};
</script>