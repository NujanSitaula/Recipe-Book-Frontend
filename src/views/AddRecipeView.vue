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
                    <!-- Card -->
                    <div class="rounded-xl shadow p-4 sm:p-7">
                      <form @input="updateFormData">
                        <div class="sm:col-span-12">
                          <h1 class="text-xl font-semibold text-gray-800">
                            Lets start with the basics
                          </h1>
                        </div>
                        <!-- Section -->
                        <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 px-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                          <!-- End Col -->

                          <div class="sm:col-span-12">
                            <label class=" m-1 text-sm font-medium text-gray-500 mt-2.5">
                              Recipe Title
                              <input v-model="formData.title" type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your recipe title here">
                            </label>
                          </div>


                          <div class="sm:col-span-12">
                            <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">
                              Description
                              <textarea v-model="formData.description" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Give a short description to your recipe"></textarea>
                            </label>
                          </div>



                          <div class="sm:col-span-12">
                            <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">
                              Add image of your recipe
                            </label>
                            <div class="flex items-center justify-start w-64">
                              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                  </svg>
                                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input  id="dropzone-file" type="file" class="hidden" />
                              </label>
                            </div>
                          </div>


                          <div class="sm:col-span-12">
                            <label class="inline-block m-1 text-sm font-medium text-gray-500 mt-2.5">
                              Preparation Time
                            </label>
                            <div class="sm:grid-cols-2 inline-flex">
                              <div class="sm:col-span-1 inline-flex w-full">
                                <input v-model="formData.preparationTime" type="text" class="mr-2 block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500">
                                <label for="hour" class="inline-block text-sm font-medium text-gray-500 mt-1.5">
                                  Hours
                                </label>
                              </div>
                              <div class="sm:col-span-1 mx-10 inline-flex w-full">
                                <input type="text" class="mr-2 block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500">
                                <label for="minute" class="inline-block text-sm font-medium text-gray-500 mt-1.5">
                                  Minutes
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-12">
                            <label class="block m-1 text-sm font-medium text-gray-500 mt-2.5">
                              Cooking Time
                            </label>
                            <div class="sm:grid-cols-2 inline-flex">
                              <div class="sm:col-span-1 inline-flex w-full">
                                <input v-model="formData.cookingTime" type="text" class="mr-2 block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500">
                                <label for="hour" class="inline-block text-sm font-medium text-gray-500 mt-1.5">
                                  Hours
                                </label>
                              </div>
                              <div class="sm:col-span-1 mx-10 inline-flex w-full">
                                <input type="text" class="mr-2 block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500">
                                <label for="minute" class="inline-block text-sm font-medium text-gray-500 mt-1.5">
                                  Minutes
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="sm:col-span-12">
                            <label class=" m-1 text-sm font-medium text-gray-500 mt-2.5">
                              Servings
                              <input v-model="formData.servings" type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder="#">
                            </label>
                          </div>

                          <div class="sm:col-span-12">
                            <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">
                              Difficulty
                            </label>
                            <ul class="grid w-full h-full gap-6 md:grid-cols-3">
                              <li>
                                <input type="radio" id="easy" name="type_of_recipe" value="easy" class="hidden peer" required @change="" v-model="easy" />
                                <label for="easy" class="peer-checked:border-primary-100 peer-checked:border-2 peer-checked:text-primary-100 inline-flex items-center justify-between w-full  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer ">
                                  <div class="w-full text-center p-2">
                                    Easy
                                  </div>
                                </label>
                              </li>
                              <li>
                                <input type="radio" id="medium" name="type_of_recipe" value="midbie" class="hidden peer" required @change="" v-model="medium" />
                                <label for="medium" class="peer-checked:border-primary-100 peer-checked:border-2 peer-checked:text-primary-100 inline-flex items-center justify-between w-full  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer ">
                                  <div class="w-full text-center p-2">Medium</div>
                                </label>
                              </li>
                              <li>
                                <input type="radio" id="hard" name="type_of_recipe" value="master" class="hidden peer" required @change="" v-model="hard" />
                                <label for="hard" class="peer-checked:border-primary-100 peer-checked:border-2 peer-checked:text-primary-100 inline-flex items-center justify-between w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer">
                                  <div class="w-full text-center p-2">Hard</div>
                                </label>
                              </li>
                            </ul>

                          </div>


                        </div>
                      </form>
                    </div>
                    <!-- End Card -->

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

              <div data-hs-stepper-content-item='{
        "index": 4
      }' style="display: none;">
                <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <h3 class="text-gray-500">
                    Fourth content
                  </h3>
                </div>
              </div>


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
                <button @click="postRecipeData" type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-primary-100 text-white hover:bg-primary-200 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn="" style="display: none;">
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

<script>
import axios from 'axios';
import {config} from "../../config.js";

axios.defaults.baseURL = config.BASE_URL
export default {

  data() {
    return {
      formData: {
        title: '',
        description: '',
        preparationTime: '',
        cookingTime: '',
        servings: '',
        // difficulty: '',
        // image: '',
      },
      // easy: '',
      // medium: '',
      // hard: '',
    }
  },
  methods: {
    async postRecipeData() {
      try {
        const response = await axios.post('/recipe', {

            name: this.formData.title,
            description: this.formData.description,
            prep_time: this.formData.preparationTime,
            cook_time: this.formData.cookingTime,
            servings: this.formData.servings,
        }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        });

        if (response.status === 200) {
          console.log('Recipe data posted successfully');
        } else {
          console.log('Failed to post recipe data');
        }
      } catch (error) {
        console.error('An error occurred while posting recipe data:', error);
      }
    },
    updateFormData() {
      console.log(this.formData);
    },
    handleNext() {
      console.log('next');
    }
  }
}

</script>
