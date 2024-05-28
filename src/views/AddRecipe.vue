<template>
  <div class="overflow-hidden">
    <div class="mt-3 max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8 main-content">
      <div class="main">
        <!-- Card Section -->
        <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <!-- Card -->
          <div class="bg-white rounded-xl shadow p-4 sm:p-7">
            <form>
              <!-- Section -->
              <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                <div class="sm:col-span-12">
                  <h2 class="text-lg font-semibold text-center text-gray-800">
                    Add your recipe here
                  </h2>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-3">
                  <label for="af-submit-application-full-name" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
                    Name of your recipe
                  </label>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <input type="text" class="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500">
                  </div>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-3">
                  <label for="af-submit-application-email" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
                    Give a short description to your recipe
                  </label>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                  <textarea class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <!-- End Col -->


                <div class="sm:col-span-3">
                  <label for="af-submit-application-email" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
                    Add image of your recipe
                  </label>
                </div>

                <div class="sm:col-span-9">
                  <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>

                </div>

                <div class="sm:col-span-3">
                  <label for="af-submit-application-email" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
                    Preparation Time
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <div class="sm:grid-cols-2 inline-flex">
                    <div class="sm:col-span-1 inline-flex w-full">
                      <input type="text" class="mr-2 block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500">
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
                <div class="sm:col-span-3">
                  <label for="af-submit-application-email" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
                    Cooking Time
                  </label>
                </div>
                <div class="sm:col-span-9">
                  <div class="sm:grid-cols-2 inline-flex">
                    <div class="sm:col-span-1 inline-flex w-full">
                      <input type="text" class="mr-2 block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500">
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
                <div class="sm:col-span-3">
                  <label for="af-submit-application-email" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
                    Difficulty
                  </label>
                </div>
                <div class="sm:col-span-9">

                  <div class="p-4">

                      <ul class="grid w-full gap-6 md:grid-cols-3">
                        <li>
                          <input type="radio" id="rookie" name="type_of_cook" value="rookie" class="hidden peer" required @change="updateCookType" v-model="cookType" />
                          <label for="rookie" class="peer-checked:border-primary-100 peer-checked:border-2 peer-checked:text-primary-100 inline-flex items-center text-center justify-between w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer ">
                            <div class="block">
                              <div class="w-full align- pt-2">Easy</div>
                            </div>
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="midbie" name="type_of_cook" value="midbie" class="hidden peer" required @change="updateCookType" v-model="cookType" />
                          <label for="midbie" class="peer-checked:border-primary-100 peer-checked:border-2 peer-checked:text-primary-100 inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer ">
                            <div class="block">
                              <div class="w-full text-lg font-semibold"></div>

                              <div class="w-full text-center pt-2">Medium</div>
                            </div>
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="master" name="type_of_cook" value="master" class="hidden peer" required @change="updateCookType" v-model="cookType" />
                          <label for="master" class="peer-checked:border-primary-100 peer-checked:border-2 peer-checked:text-primary-100 inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer">
                            <div class="block">
                              <div class="w-full text-lg font-semibold"></div>

                              <div class="w-full text-center pt-2">Hard</div>
                            </div>

                          </label>
                        </li>
                      </ul>
                  </div>
                </div>


              </div>
              <!-- End Section -->



              <button type="button" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary-100 text-white hover:bg-primary-200 disabled:opacity-50 disabled:pointer-events-none">
                Save Recipe
              </button>
            </form>
          </div>
          <!-- End Card -->
        </div>
        <!-- End Card Section -->
      </div>

    </div>
  </div>
</template>

<script>

</script>