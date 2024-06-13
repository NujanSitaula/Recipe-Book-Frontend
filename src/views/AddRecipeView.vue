<template>
<Toaster ref="toaster" />
  <div class="overflow-hidden">
    <div class="mt-5 max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8 main-content pb-4">
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
            Instructions
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
              <!-- add recipe basics-->
              <div data-hs-stepper-content-item='{
        "index": 1
      }'>
                <div class="h-auto bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <!-- Card -->
                  <div class="rounded-xl shadow p-4 sm:p-7">
                    <form @submit.prevent="handleNext">
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
                            <input v-model="formData.title" type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your recipe title here" required>
                            <span v-if="errors.title" class="text-red-500 text-xs">{{ errors.title }}</span>
                          </label>
                        </div>


                        <div class="sm:col-span-12">
                          <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">
                            Description
                            <textarea v-model="formData.description" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Give a short description to your recipe"></textarea>
                            <span v-if="errors.description" class="text-red-500 text-xs">{{ errors.description }}</span>
                          </label>
                        </div>



                        <div class="sm:col-span-12">
                          <div class="grid grid-cols-2">
                            <div class="col-span-1">
                              <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">Preview of your image</label>
                              <div class="h-48 w-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">

                                <img v-if="imagePreviewUrl" :src="imagePreviewUrl" alt="Image preview" class="h-48 w-48 p-2 object-cover" />
                              </div>
                            </div>
                            <div class="col-span-1">
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
                                  <input  id="dropzone-file" type="file" class="hidden" @change="handleImageChange"  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div class="sm:col-span-12">
                          <label class="inline-block m-1 text-sm font-medium text-gray-500 mt-2.5">
                            Preparation Time
                          </label>
                          <div class="sm:grid-cols-2 inline-flex">
                            <div class="sm:col-span-1 inline-flex w-full">
                              <input v-model="formData.preparationTime.hours" type="text" class="mr-2 block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500">
                              <label for="hour" class="inline-block text-sm font-medium text-gray-500 mt-1.5">
                                Hours
                              </label>
                            </div>
                            <div class="sm:col-span-1 mx-10 inline-flex w-full">
                              <input v-model="formData.preparationTime.minutes" type="text" class="mr-2 block w-full p-1 text-gray-900 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500">
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
                              <input v-model="formData.cookingTime.hours" type="text" class="mr-2 block w-full p-1 text-gray-900 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500">
                              <label for="hour" class="inline-block text-sm font-medium text-gray-500 mt-1.5">
                                Hours
                              </label>
                            </div>
                            <div  class="sm:col-span-1 mx-10 inline-flex w-full">
                              <input v-model="formData.cookingTime.minutes" type="text" class="mr-2 block w-full p-1 text-gray-900 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500">
                              <label for="minute" class="inline-block text-sm font-medium text-gray-500 mt-1.5">
                                Minutes
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="sm:col-span-12">
                          <label class=" m-1 text-sm font-medium text-gray-500 mt-2.5">
                            Servings
                            <input v-model="formData.servings" type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" placeholder="#">
                            <span v-if="errors.servings" class="text-red-500 text-xs">{{ errors.servings }}</span>

                          </label>
                        </div>

                        <div class="sm:col-span-12">
                          <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">
                            Difficulty
                          </label>
                          <ul class="grid w-full h-full gap-6 md:grid-cols-3">
                            <li>
                              <input type="radio" id="easy" name="type_of_recipe" value="easy" class="hidden peer" required @change="" v-model="formData.difficulty" />
                              <label for="easy" class="peer-checked:border-primary-100 peer-checked:border-2 peer-checked:text-primary-100 inline-flex items-center justify-between w-full  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer ">
                                <div class="w-full text-center p-2">
                                  Easy
                                </div>
                              </label>
                            </li>
                            <li>
                              <input type="radio" id="medium" name="type_of_recipe" value="medium" class="hidden peer" required @change="" v-model="formData.difficulty" />
                              <label for="medium" class="peer-checked:border-primary-100 peer-checked:border-2 peer-checked:text-primary-100 inline-flex items-center justify-between w-full  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer ">
                                <div class="w-full text-center p-2">Medium</div>
                              </label>
                            </li>
                            <li>
                              <input type="radio" id="hard" name="type_of_recipe" value="hard" class="hidden peer" required @change="" v-model="formData.difficulty" />
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

              <!-- add ingredients -->
              <!-- HTML Structure -->
              <div data-hs-stepper-content-item='{"index": 2}' style="display: none;">

                <div class="h-auto bg-gray-50 p-4 sm:p-7 justify-center items-center border border-dashed border-gray-200 rounded-xl grid">
              <form @submit.prevent="handleNext">
                  <div class="sm:col-span-12">

                      <h1 class="text-xl font-semibold text-gray-800">
                        Add your ingredients here
                      </h1>
                      <hr>
                    </div>
                    <h3 class="text-gray-500 grid-cols-2 p-2">
                    </h3>
                      <div id="hs-wrapper-select-for-copy" class="space-y-3 col-span-1">
                        <!-- Select -->
                        <div v-for="(input, index) in ingredientInputs" :key="index" class="relative grid grid-cols-2">
                          <div class="relative col-span-1 mx-3">
                            <div class="relative">
                              <label class=" m-1 text-sm font-medium text-gray-500 mt-2.5">
                                Select Ingredients
                              </label>
                              <div class="relative">
                                <input
                                    v-model="input.search"
                                    @input="filterIngredients(index)"
                                    @focus="showDropdown = index"
                                    @blur="hideDropdown(index)"
                                    type="text"
                                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500 z-50 "
                                    :placeholder="ingredients[0]?.name || 'Select ingredients...'"
                                />
                                <svg class="absolute right-3 top-3 h-5 w-5 text-gray-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                  <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "/>
                                </svg>
                              </div>
                           

                            </div>
                              <div v-if="showDropdown === index" class="absolute mt-2 z-50 w-full max-h-40 p-1 bg-white border border-gray-200 rounded-lg overflow-auto">
                              <div
                                  v-for="ingredient in filteredIngredients[index]"
                                  :key="ingredient.id"
                                  @mousedown.prevent="selectIngredient(index, ingredient)"
                                  class="py-2 px-4 text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg"
                              >
                                {{ ingredient.name }}
                              </div>
                            </div>
                          </div>
                          <div class="grid grid-cols-2">
                            <div class="col-span-1">

                              <label class=" m-1 text-sm font-medium text-gray-500 mt-2.5">
                                Quantity
                              </label>
                          <input v-model="input.selectedQuantity"
                                 type="text" name="quantity"
                                 class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500"
                                 placeholder="2">
                            </div>
                            <div class="relative col-span-1 mx-3">
                              <div class="relative">

                                <label class=" m-1 text-sm font-medium text-gray-500 mt-2.5">
                                Units
                              </label>
                              <input
                                  v-model="unitInputs[index].unitSearch"
                                  @input="filterUnits(index)"
                                  @focus="showUnitDropdown = index"
                                  @blur="hideUnitDropdown(index)"
                                  type="text"
                                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500"
                                  :placeholder="units[0]?.name || 'Units'"
                              />
                              <svg class="absolute right-3 top-11 transform -translate-y-1/2 h-5 w-5 text-gray-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "/>
                              </svg>
                              </div>
                              <div v-if="showUnitDropdown === index" class="absolute mt-2 z-50 w-full max-h-40 p-1 bg-white border border-gray-200 rounded-lg overflow-auto">
                                <div
                                    v-for="unit in filteredUnits[index]"
                                    :key="unit.id"
                                    @mousedown.prevent="selectUnit(index, unit)"
                                    class="py-2 px-4 text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg"
                                >
                                  {{ unit.name }}
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                        <!-- End Select -->
                      </div>

                      <p class="mt-3 text-end">
                        <button @click="addIngredient" type="button" id="hs-copy-select-content" class="mr-2.5 py-1.5 px-2 inline-flex items-center gap-x-1 text-s font-medium rounded-full border border-dashed border-gray-200 bg-white text-primary-100 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                          <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add Ingredient
                        </button>
                      </p>
                </form>
                  </div>
              </div>

              <!-- End of add ingredients -->
              <div data-hs-stepper-content-item='{
        "index": 3
      }' style="display: none;">
                <form @submit.prevent="handleNext">
                  <div class="h-auto bg-gray-50 p-4 sm:p-7  border border-dashed border-gray-200 rounded-xl">
                    <div class="sm:col-span-12">

                      <h1 class="text-xl font-semibold text-gray-800">
                        Cook up your clever steps here
                      </h1>
                      <hr>
                    </div>
                        <!-- Input Group -->
                      <div class="max-w space-y-3 sm:p-7 p-4 justify-center items-center">
                        <div v-for="(step, index) in steps" :key="index">
                          <div class="flex rounded-lg shadow-sm">
                            <span class="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500">{{ index + 1 }}.</span>
                            <input v-model="steps[index]" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
                          </div>
                        </div>
                      </div>

                        <p class="text-end">
                          <button @click="handleAddStep" type="button" data-hs-copy-markup='{
                                  "targetSelector": "#hs-content-for-copy",
                                  "wrapperSelector": "#hs-wrapper-for-copy",
                                  "limit": 0
                                   }' id="hs-copy-content" class="mr-6 py-1.5 px-2 inline-flex items-center gap-x-1 text-s font-medium rounded-full border border-dashed border-gray-200 bg-white text-primary-100 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                              <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            Add Steps
                          </button>
                        </p>
                        <!-- End Input Group -->
                  </div>
                </form>
              </div>
              <!-- End First Content -->

              <div data-hs-stepper-content-item='{
        "index": 4
      }' style="display: none;">
                <div class="h-auto bg-gray-50 border border-dashed border-gray-200 rounded-xl">
                  <!-- Card -->
                  <div class="rounded-xl  p-4 sm:p-7">
                    <form @submit.prevent="handleNext">
                      <div class="sm:col-span-12">
                        <h1 class="text-xl font-semibold text-gray-800">
                          Add the Finishing Details to Perfect Your Recipe
                        </h1>
                      </div>
                      <!-- Section -->
                      <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 px-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                        <!-- End Col -->
                        <div class="sm:col-span-12">
                          <label class=" m-1 text-sm font-medium text-gray-500 mt-2.5">
                            Meal Type
                            <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
                              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center ps-3">
                                  <input id="meal-breakfast" type="radio" name="meal-type" value="breakfast" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500">
                                  <label for="meal-breakfast" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Breakfast</label>
                                </div>
                              </li>
                              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center ps-3">
                                  <input id="meal-lunch" type="radio" name="meal-type" value="lunch" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-100 ">
                                  <label for="meal-lunch" class="w-full py-3 ms-2 text-sm font-medium text-gray-900">Lunch</label>
                                </div>
                              </li>
                              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center ps-3">
                                  <input id="meal-dinner" type="radio" name="meal-type" value="dinner" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                                  <label for="meal-dinner" class="w-full py-3 ms-2 text-sm font-medium text-gray-900">Dinner</label>
                                </div>
                              </li>
                              <li class="w-full border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center ps-3">
                                  <input id="meal-dessert" type="radio" name="meal-type" value="dessert" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                                  <label for="meal-dessert" class="w-full py-3 ms-2 text-sm font-medium text-gray-900">Dessert</label>
                                </div>
                              </li>
                              <li class="w-full border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center ps-3">
                                  <input id="meal-snack" type="radio" name="meal-type" value="snack" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                                  <label for="meal-snack" class="w-full py-3 ms-2 text-sm font-medium text-gray-900">Snack</label>
                                </div>
                              </li>
                            </ul>

                          </label>
                          </div>


                        <div class="sm:col-span-12 mb-2 relative">
                          <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">
                            Select Cuisine
                          </label>
                          <div @click="toggleDropdown" class="bg-white border border-gray-200 text-sm font-medium text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full p-2.5 cursor-pointer">
                            {{ selectedCuisine || 'Choose a cuisine that matches your recipe' }}
                          </div>
                          <div v-if="isDropdownOpen" class="absolute bg-white border border-gray-200 rounded-lg mt-1 max-h-40 overflow-auto w-full z-10">
                            <div
                                v-for="cat in category"
                                :key="cat.id"
                                @click="selectCuisine(cat.name)"
                                class="p-2 cursor-pointer hover:bg-gray-100"
                            >
                              {{ cat.name }}
                            </div>
                          </div>
                        </div>


                        <div class="sm:col-span-12">
                          <label class=" m-1 text-sm font-medium text-gray-500 mt-2.5">
                            Dietary Information
                            <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
                              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center ps-3">
                                  <input id="vegan" type="radio" name="diet-type" value="vegan" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500">
                                  <label for="vegan" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Vegan</label>
                                </div>
                              </li>
                              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center ps-3">
                                  <input id="vegetarian" type="radio" name="diet-type" value="vegetarian" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-100 ">
                                  <label for="vegetarian" class="w-full py-3 ms-2 text-sm font-medium text-gray-900">Vegetarian</label>
                                </div>
                              </li>
                              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center ps-3">
                                  <input id="non-vegetarian" type="radio" name="diet-type" value="non-veg" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                                  <label for="non-vegetarian" class="w-full py-3 ms-2 text-sm font-medium text-gray-900">Non-Vegetarian</label>
                                </div>
                              </li>
                              <li class="w-full border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center ps-3">
                                  <input id="halal" type="radio" name="diet-type" value="halal" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                                  <label for="halal" class="w-full py-3 ms-2 text-sm font-medium text-gray-900">Halal</label>
                                </div>
                              </li>

                            </ul>

                          </label>

                        </div>


                        <div class="sm:col-span-12">
                          <label class="inline-block m-1 text-sm font-medium text-gray-500 mt-2.5">
                            Additional Notes

                          </label>
                            <textarea class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Some tips to enhance your recipe"></textarea>

                        </div>
                      </div>
                    </form>
                  </div>
                  <!-- End Card -->

                </div>
              </div>


              <!-- Final Content -->
              <div data-hs-stepper-content-item='{
        "isFinal": true
      }' style="display: none;">
                <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <h3 class="text-gray-500">
                    Your recipe is posted successfully
                  </h3>

                </div>
              </div>
              <!-- End Final Content -->

              <!-- Button Group -->
              <div class="mt-5 flex justify-between items-center gap-x-2">
                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn="">
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  Back
                </button>
                <button @click.stop.prevent="handleNext() ? null : $event.stopImmediatePropagation()" type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-primary-100 text-white hover:bg-primary-200" data-hs-stepper-next-btn="true">
<!--                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-primary-100 text-white hover:bg-primary-200" data-hs-stepper-next-btn="true">-->
                  Next
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
                <button @click="postRecipeData" type="submit" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-primary-100 text-white hover:bg-primary-200" data-hs-stepper-finish-btn="" style="display: none" >
                  Finish
                </button>
                <RouterLink  to="/" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-primary-100 text-white hover:bg-primary-200 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn="" style="display: none;">
                  Go back to Recipes
                </RouterLink>
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

<script setup>
import axios from 'axios';
import { config } from "../../config.js";
import { ref, onMounted, reactive, nextTick } from 'vue';
import Toaster from './Toaster.vue';

axios.defaults.baseURL = config.BASE_URL;

const ingredientInputs = ref([
  {
    selectedIngredientId: '',
    selectedQuantity: ''
  }
]);
const showDropdown = ref(null);
const currentStep = ref(1);
const toaster = ref();
const errors = reactive({
  title: '',
  description: '',
  preparationTime: '',
  cookingTime: '',
  servings: '',
  difficulty: ''
});
const units = ref([]);
const selectedImage = ref(null);
const imagePreviewUrl = ref('');
const ingredients = ref([]);
const filteredIngredients = ref([[]]);
const recipeIngredients = ref([]);
const formData = reactive({
  title: '',
  description: '',
  preparationTime: {
    hours: '0',
    minutes: '0'
  },
  cookingTime: {
    hours: '0',
    minutes: '0'
  },
  servings: '',
  difficulty: '',
  image: ''
});

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
const handleImageChange = (event) => {
  selectedImage.value = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    imagePreviewUrl.value = reader.result;
  };
  reader.readAsDataURL(selectedImage.value);
};

const unitInputs = ref([
  {
    selectedUnitId: '',
    unitSearch: '',
  }
]);
const showUnitDropdown = ref(null);
const filteredUnits = ref([[]]);

const getUnits = async () => {
  try {
    const response = await axios.get('/unit');
    if (response.status === 200) {
      units.value = response.data.data;

    } else {
      console.log('Failed to get units');
    }
  } catch (error) {
    console.error('An error occurred while getting units:', error);
  }
};

const filterUnits = (index) => {
  const searchTerm = unitInputs.value[index].unitSearch.toLowerCase();
  filteredUnits.value[index] = units.value.filter(unit =>
      unit.name.toLowerCase().startsWith(searchTerm)
  );
};

const selectUnit = (index, unit) => {
  unitInputs.value[index].selectedUnitId = unit.id;
  unitInputs.value[index].unitSearch = unit.name; // Ensure the selected unit name is displayed
  showUnitDropdown.value = null;
};

const hideUnitDropdown = (index) => {
  setTimeout(() => {
    showUnitDropdown.value = null;
  }, 200);
};
const getIngredients = async () => {
  try {
    const response = await axios.get('/ingredient');
    if (response.status === 200) {
      ingredients.value = response.data.data;
      if (ingredients.value.length > 0) {
        ingredientInputs.value[0].selectedIngredientId = ingredients.value[0].id;
      }
    } else {
      console.log('Failed to get ingredients');
    }
  } catch (error) {
    console.error('An error occurred while getting ingredients:', error);
  }
};

const addIngredient = () => {
  for (let i = 0; i < ingredientInputs.value.length; i++) {
    const currentInput = ingredientInputs.value[i];
    const currentUnitInput = unitInputs.value[i]; // Get the corresponding unit input
    if (currentInput.selectedIngredientId && currentInput.selectedQuantity && currentUnitInput.selectedUnitId) {
      const ingredient = {
        id: currentInput.selectedIngredientId,
        quantity: currentInput.selectedQuantity,
        unit: currentUnitInput.selectedUnitId // Add the selected unit's ID
      };
      recipeIngredients.value.push(ingredient);
    } else {
      toaster.value.showToast('Please select an ingredient, a unit, and enter a quantity for all inputs.','failure');
      return;
    }
  }
  ingredientInputs.value.push({
    selectedIngredientId: '',
    selectedQuantity: '',
    search: '',
  });
  unitInputs.value.push({
    selectedUnitId: '',
    unitSearch: '',
  });
  filteredIngredients.value.push([]);
  filteredUnits.value.push([]);
};

const filterIngredients = (index) => {
  const searchTerm = ingredientInputs.value[index].search.toLowerCase();
  filteredIngredients.value[index] = ingredients.value.filter(ingredient =>
      ingredient.name.toLowerCase().includes(searchTerm)
  );
};

const selectIngredient = (index, ingredient) => {
  ingredientInputs.value[index].selectedIngredientId = ingredient.id;
  ingredientInputs.value[index].search = ingredient.name;
  showDropdown.value = null;
};

const hideDropdown = (index) => {
  setTimeout(() => {
    showDropdown.value = null;
  }, 200);
};
const validateForm = () => {
  errors.title = formData.title ? '' : 'Title is required';
  errors.description = formData.description ? '' : 'Description is required';
  errors.preparationTime = formData.preparationTime.hours && formData.preparationTime.minutes ? '' : 'Preparation time is required'; // Corrected here
  errors.cookingTime = formData.cookingTime.hours && formData.cookingTime.minutes ? '' : 'Cooking time is required';
  errors.servings = formData.servings ? '' : 'Servings is required';
  errors.difficulty = formData.difficulty ? '' : 'Difficulty is required';

  const isValid = !Object.values(errors).some(error => error);
  return isValid;
};
const handleNext = () => {
  if (!validateForm()) {
    console.log('Form is invalid, cannot proceed to the next step');
    toaster.value.showToast('Fill up the form properly before proceeding','failure');
    return false;
  } else {
    currentStep.value += 1;
    return true;
  }
};

const postRecipeData = async () => {
  try {
    const response = await axios.post('/recipe', {
      name: formData.title,
      description: formData.description,
      prep_time: formData.preparationTime,
      cook_time: formData.cookingTime,
      servings: formData.servings,
      difficulty: formData.difficulty,
      instructions: steps.value,
      ingredients: recipeIngredients.value.map(ingredient => ({
        id: ingredient.id,
        quantity: ingredient.quantity,
        unit: ingredient.unit // Include the unit property
      })),
    },{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);
    if (response.status === 200) {
      console.log('Recipe data posted successfully');
    } else {
      console.log('Failed to post recipe data');
    }
  } catch (error) {
    console.error('An error occurred while posting recipe data:', error);
  }
};
const steps = ref(['']);
const handleAddStep = () => {
  steps.value.push('');
};

const category = ref([]);
const selectedCuisine = ref('');
const isDropdownOpen = ref(false);

const getCategory = async () => {
  try {
    const response = await axios.get('/category');
    if (response.status === 200) {
      category.value = response.data.data;
    } else {
      console.log('Failed to get categories');
    }
  } catch (error) {
    console.error('An error occurred while getting categories:', error);
  }
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectCuisine = (cuisine) => {
  selectedCuisine.value = cuisine;
  isDropdownOpen.value = false;
};

onMounted(() => {
  scrollToTop();
  getIngredients();
  getUnits();
  getCategory();

});
</script>





