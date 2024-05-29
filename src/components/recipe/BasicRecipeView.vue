<template>
          <!-- Card -->
          <div class="bg-white rounded-xl shadow p-4 sm:p-7">
            <form>
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
                    <input type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your recipe title here">
                  </label>
                </div>


                <div class="sm:col-span-12">
                  <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">
                    Description
                  <textarea class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Give a short description to your recipe"></textarea>
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
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>
                </div>


                <div class="sm:col-span-12">
                  <label class="inline-block m-1 text-sm font-medium text-gray-500 mt-2.5">
                    Preparation Time
                  </label>
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
                <div class="col-span-12">
                  <label class="block m-1 text-sm font-medium text-gray-500 mt-2.5">
                    Cooking Time
                  </label>
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

                <div class="sm:col-span-12">
                  <label class=" m-1 text-sm font-medium text-gray-500 mt-2.5">
                    Servings
                    <input type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder="#">
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

</template>

<script>

</script>