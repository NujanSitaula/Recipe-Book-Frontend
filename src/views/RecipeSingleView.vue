<template>

  <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto main-content">
    <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
      <div class="lg:col-span-2">
        <div class="py-6 lg:pe-8">
          <div class="space-y-5 lg:space-y-8">
            <a @click="$router.back()" class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline" href="#">
              <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Recipes
            </a>
            <div v-if="isLoading">
              <div role="status" class="max-w-sm animate-pulse">
                <div class="h-10 bg-gray-200 rounded-full w-96 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <div v-else-if="recipe">
              <h2 class="text-3xl font-bold lg:text-5xl inline">{{ recipe.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ') }}</h2>
              <a class="items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 ml-2" href="#">
                {{ recipe && recipe.dietary_information ? recipe.dietary_information.charAt(0).toUpperCase() + recipe.dietary_information.slice(1).toLowerCase() : '' }}
              </a>
              <div class="grid grid-cols-2">
                <div class="col-span-1 flex gap-x-5 mt-5 ">
                  <div class="flex items-center align-center ">
                    <svg style="margin-right: -5px; margin-top:5px;"  width="32px" height="32px" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#DB2B39"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.5 21H4C4 17.134 7.13401 14 11 14C11.1681 14 11.3348 14.0059 11.5 14.0176M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z" stroke="#DB2B39" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <p class="text-sm text-gray-800"><RouterLink :to="'/' +recipe.user.username">{{ recipe.user.firstName }} {{ recipe.user.lastName }}</RouterLink></p>
                  </div>
                  <div class="flex items-center align-center">
                    <svg style="margin-right: -5px; margin-top:5px;" width="32px" height="32px" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#DB2B39"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M7 3V5M17 3V5M3 9H21M13.5 13.0001L7 13M10 17.0001L7 17M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#DB2B39" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <p class="text-xs sm:text-sm text-gray-800">{{ formatDate(recipe.created_at) }}</p>
                  </div>
                  <div class="flex items-center align-center">
                    <svg style="margin-right: -5px; margin-top:5px;" width="32px" height="32px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="DB2B39"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12.9543C5.51239 14.0398 5.95555 15.076 6.73197 15.8348C7.50838 16.5936 8.55445 17.0128 9.64 17.0003H10.2L11.86 18.7323C12.0291 18.9036 12.2598 19 12.5005 19C12.7412 19 12.9719 18.9036 13.141 18.7323L14.8 17.0003H15.36C16.4456 17.0128 17.4916 16.5936 18.268 15.8348C19.0444 15.076 19.4876 14.0398 19.5 12.9543V8.04428C19.4731 5.7845 17.6198 3.97417 15.36 4.00028H9.64C7.38021 3.97417 5.5269 5.7845 5.5 8.04428V12.9543Z" stroke="#DB2B39" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.5 8.25024C9.08579 8.25024 8.75 8.58603 8.75 9.00024C8.75 9.41446 9.08579 9.75024 9.5 9.75024V8.25024ZM15.5 9.75024C15.9142 9.75024 16.25 9.41446 16.25 9.00024C16.25 8.58603 15.9142 8.25024 15.5 8.25024V9.75024ZM9.5 11.2502C9.08579 11.2502 8.75 11.586 8.75 12.0002C8.75 12.4145 9.08579 12.7502 9.5 12.7502V11.2502ZM15.5 12.7502C15.9142 12.7502 16.25 12.4145 16.25 12.0002C16.25 11.586 15.9142 11.2502 15.5 11.2502V12.7502ZM9.5 9.75024H15.5V8.25024H9.5V9.75024ZM9.5 12.7502H15.5V11.2502H9.5V12.7502Z" fill="#DB2B39"></path> </g></svg>
                    <p class="text-xs sm:text-sm text-gray-800"> Comments</p>
                  </div>
                </div>
                <div class="col-span-1">
                  <div class="flex justify-end items-center gap-x-2">
                      </div>
                </div>
              </div>
              <hr class="my-2">
          </div>
          </div>
         </div>
        <div v-if="recipe" class="col-span-2 ">
          <div>
            <img class="w-full h-96 object-cover" :src="recipe.image" :alt="recipe.name">
            <div class=" border-r-2 px-8 border-l-2 border-b-2 pb-8">
            <div class="grid grid-cols-4 py-3">
              <div class="col-span-1 border-r border-gray-300 px-4 text-center">
                <p class="text-gray-600">Prep Time</p>
                <p v-if="prep_time">{{ prep_time_in_minutes }} minutes</p>
              </div>
              <div class="col-span-1 border-r border-gray-300 px-4 text-center">
                <p class="text-gray-600">Cook Time</p>
                <p v-if="cook_time">{{ cook_time_in_minutes }} minutes</p>
              </div>
              <div class="col-span-1 border-r border-gray-300 px-4 text-center">
                <p class="text-gray-600">Servings</p>
                <p>{{ recipe.servings }}</p>
              </div>
              <div class=" flex justify-end col-span-1 px-4 text-center gap-x-2">
                <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="#DB2B39" stroke-width="1.44" stroke-linejoin="round"></path> </g></svg>
                <svg width="32px" height="32px" viewBox="-1 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>share</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke-width="1.04" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-312.000000, -726.000000)" fill="#DB2B39"> <path d="M331,750 C329.343,750 328,748.657 328,747 C328,745.343 329.343,744 331,744 C332.657,744 334,745.343 334,747 C334,748.657 332.657,750 331,750 L331,750 Z M317,742 C315.343,742 314,740.657 314,739 C314,737.344 315.343,736 317,736 C318.657,736 320,737.344 320,739 C320,740.657 318.657,742 317,742 L317,742 Z M331,728 C332.657,728 334,729.343 334,731 C334,732.657 332.657,734 331,734 C329.343,734 328,732.657 328,731 C328,729.343 329.343,728 331,728 L331,728 Z M331,742 C329.23,742 327.685,742.925 326.796,744.312 L321.441,741.252 C321.787,740.572 322,739.814 322,739 C322,738.497 321.903,738.021 321.765,737.563 L327.336,734.38 C328.249,735.37 329.547,736 331,736 C333.762,736 336,733.762 336,731 C336,728.238 333.762,726 331,726 C328.238,726 326,728.238 326,731 C326,731.503 326.097,731.979 326.235,732.438 L320.664,735.62 C319.751,734.631 318.453,734 317,734 C314.238,734 312,736.238 312,739 C312,741.762 314.238,744 317,744 C318.14,744 319.179,743.604 320.02,742.962 L320,743 L326.055,746.46 C326.035,746.64 326,746.814 326,747 C326,749.762 328.238,752 331,752 C333.762,752 336,749.762 336,747 C336,744.238 333.762,742 331,742 L331,742 Z" id="share" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
              </div>
            </div>
            <p class="py-5 text-lg"> {{ recipe.description }}</p>
            <div class="col-span-1">
              <h3 class="text-4xl mt-6">Ingredients</h3>
              <table class="mt-4 w-full">
                <tbody>
                <tr v-for="ingredient in ingredients" :key="ingredient.id" class="border-b border-t border-gray-400 cursor-pointer"
                    @click="ingredient.isClicked = !ingredient.isClicked">
                  <td class="border-r border-gray-400 w-10 ">
                      <div class="flex gap-x-2 align-middle my-1.5 text-xl hover:text-primary-100">
<!--                        <svg v-if="!ingredient.isClicked"  width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#c0bfbf" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>-->
<!--                        <svg v-else width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>-->
                        <svg v-if="!ingredient.isClicked"  fill="#CDC2BF" class="tick-icon" width="32px" height="32px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#ffff" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"></path></g></svg>
                        <svg v-else fill="#DB2B39" width="32px" height="32px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"></path></g></svg>
                      </div>
                      </td>
                      <td>
                    <li class="flex gap-x-2 align-middle  mx-2"
                        :class="{ 'strikethrough': ingredient.isClicked }"
                    >
                      <div class="flex-1">
                        <p>{{ ingredient.quantity }} {{ ingredient.unitName }} {{ ingredient.name }}</p>
                      </div>
                    </li>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
              <div class="col-span-2">
              <h3 class="text-4xl mt-6">Instructions</h3>
                <div>
                  <div
                      v-for="(instruction, index) in instructions"
                      :key="index"
                      :class="['instruction flex items-center p-4 bg-gray-100 rounded-lg cursor-pointer mt-2', { active: instruction.active }]"
                      @click="toggleActive(index)"
                  >
                    <div class="numbering flex items-center justify-center w-10 h-10 rounded-full bg-primary-200 text-white font-bold mr-4"
                         :class="{ 'bg-green-500': instruction.active }">
                      <svg v-if="instruction.active" fill="#ffff" width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"></path></g></svg>
                      <span v-else>{{ index + 1 }}</span>
                    </div>
                    <div class="w-10/12">
                      <p>{{ instruction.title ? instruction.title.charAt(0).toUpperCase() + instruction.title.slice(1) : '' }}</p>
                    </div>
                  </div>
                </div>
              </div>
            <div  v-if="recipe.additional_notes" class="col-span-1 flex bg-red-100 rounded-2xl p-2 mr-6">

              <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7C9.23858 7 7 9.23858 7 12C7 13.3613 7.54402 14.5955 8.42651 15.4972C8.77025 15.8484 9.05281 16.2663 9.14923 16.7482L9.67833 19.3924C9.86537 20.3272 10.6862 21 11.6395 21H12.3605C13.3138 21 14.1346 20.3272 14.3217 19.3924L14.8508 16.7482C14.9472 16.2663 15.2297 15.8484 15.5735 15.4972C16.456 14.5955 17 13.3613 17 12C17 9.23858 14.7614 7 12 7Z" stroke="#DB2B39" stroke-width="1.344"></path> <path d="M12 4V3" stroke="#DB2B39" stroke-width="1.344" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 6L19 5" stroke="#DB2B39" stroke-width="1.344" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 12H21" stroke="#DB2B39" stroke-width="1.344" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 12H3" stroke="#DB2B39" stroke-width="1.344" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 5L6 6" stroke="#DB2B39" stroke-width="1.344" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 17H14" stroke="#DB2B39" stroke-width="1.344" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              <div>
              <h3 class="my-auto text-xl">Chef 's Note</h3>
                <p>{{ recipe.additional_notes }}</p>
              </div>
            </div>
          </div>
            <!-- Comment Section Starts -->
            <section class="bg-white antialiased">
              <div class="max-w-2xl px-4 py-2">
                <div class="flex justify-between items-center mb-6">
                  <h2 class="text-lg lg:text-2xl font-bold text-gray-900">Discussion ({{ comments ? comments.length : 0 }})</h2>
                </div>
                <div v-if="username">
                  <form class="mb-6" @submit.prevent="postComment">
                    <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                      <label for="comment" class="sr-only">Your comment</label>
                      <textarea v-model="commentContent" id="comment" rows="6" class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none" placeholder="Write a comment..." required></textarea>
                    </div>
                    <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-100 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                      Post comment
                    </button>
                  </form>
                </div>
                <div v-else> <!-- If user is not logged in -->
                  <p>You need to be logged in to post a comment.</p>
                  <router-link to="/login">Login</router-link>
                </div>
                <div v-if="comments && comments.length > 0">
                  <div v-for="comment in comments" :key="comment.id">
                    <article class="p-6 text-base bg-white rounded-lg">
                      <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                          <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold"><img class="mr-2 w-6 h-6 rounded-full" :src="comment.user.image" alt="Michael Gough">{{ comment.user.firstName }} {{ comment.user.lastName }}</p>
                          <p class="text-sm text-gray-600">
                            <time datetime="2022-02-08" title="February 8th, 2022">{{ comment.created_at }}</time>
                          </p>
                        </div>
                        <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50" type="button">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                          </svg>
                          <span class="sr-only">Comment settings</span>
                        </button>
                        <!-- Dropdown menu -->
                        <div id="dropdownComment1" class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow">
                          <ul class="py-1 text-sm text-gray-700" aria-labelledby="dropdownMenuIconHorizontalButton">
                            <li>
                              <a href="#" class="block py-2 px-4 hover:bg-gray-100">Edit</a>
                            </li>
                            <li>
                              <a href="#" class="block py-2 px-4 hover:bg-gray-100">Remove</a>
                            </li>
                            <li>
                              <a href="#" class="block py-2 px-4 hover:bg-gray-100">Report</a>
                            </li>
                          </ul>
                        </div>
                      </footer>
                      <p class="text-gray-500">{{ comment.comment }}</p>
                      <div class="flex items-center mt-4 space-x-4">
                        <button v-if="username"  @click="showReplyField(comment.id)" type="button" class="flex items-center text-sm text-gray-500 hover:underline font-medium">
                          <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                          </svg>
                          Reply
                        </button>
                        <div v-if="replyingTo === comment.id">
                          <form @submit.prevent="postReply(comment.id)">
                            <input v-model="replyContent" type="text" placeholder="Write a reply..." required>
                            <button type="submit">Post Reply</button>
                          </form>
                        </div>
                      </div>
                    </article>
                    <div v-for="reply in comment.replies" :key="reply.id">
                      <article class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg">
                        <footer class="flex justify-between items-center mb-2">
                          <div class="flex items-center">
                            <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold"><img class="mr-2 w-6 h-6 rounded-full" :src="reply.user.image" alt="Jese Leos">{{ reply.user.firstName }} {{ reply.user.lastName }}</p>
                            <p class="text-sm text-gray-600">
                              <time datetime="2022-02-12" title="February 12th, 2022">{{ reply.created_at }}</time>
                            </p>
                          </div>
                          <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50" type="button">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                            <span class="sr-only">Comment settings</span>
                          </button>
                          <!-- Dropdown menu -->
                          <div id="dropdownComment2" class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow">
                            <ul class="py-1 text-sm text-gray-700" aria-labelledby="dropdownMenuIconHorizontalButton">
                              <li>
                                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Edit</a>
                              </li>
                              <li>
                                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Remove</a>
                              </li>
                              <li>
                                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Report</a>
                              </li>
                            </ul>
                          </div>
                        </footer>
                        <p class="text-gray-500">{{ reply.reply }}</p>
                        <!--                    <div class="flex items-center mt-4 space-x-4">-->
                        <!--                      <button type="button" class="flex items-center text-sm text-gray-500 hover:underline font-medium">-->
                        <!--                        <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">-->
                        <!--                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />-->
                        <!--                        </svg>-->
                        <!--                        Reply-->
                        <!--                      </button>-->
                        <!--                    </div>-->
                      </article>
                    </div>
                    <hr>
                  </div>
                </div>
                <div v-else>
                  <div class="flex items-center gap-2">
                    <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 01-6 0 3 3 0 016 0zm-6 0a3 3 0 006 0 3 3 0 00-6 0zm6 0a3 3 0 01-6 0 3 3 0 016 0zm-6 0a3 3 0 006 0 3 3 0 00-6 0zm6 0a3 3 0 01-6 0 3 3 0 016 0zm0 0a3 3 0 00-6 0 3 3 0 006 0zm0 0a3 3 0 01-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span class="text-gray-500">No Comments Yet! Be the first to comment</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- Comment Section Ends -->
          <div>
          </div>
          </div>
        </div>
      </div>
<!--Sticky Sidebar start-->
      <div  class="col-span-1 p-3 mt-12">
        <div class="sticky top-20 start-0 p-2 rounded-xl">

          <div v-if="userRecipes && userRecipes.length > 0 && recipe" class="sticky top-20 start-0 py-2 rounded-xl">
            <h3 class="font-bold mx-1 text-2xl">More From {{ recipe.user.firstName }}</h3>
            <div  v-for="userRecipe in userRecipes.slice(0, 5)" :key="userRecipe.id">


              <router-link :to="`/recipe/${userRecipe.id}`"
                           class="flex flex-col items-center md:flex-row md:max-w-xl hover:transition-transform my-3"
                           v-if="userRecipe.id !== recipe.id">
              <img class="md:object-cover  w-full h-96 object-co md:h-28 md:w-28 md:ml-1 shadow-lg hover:transform-scale" :src="userRecipe.image" :alt="userRecipe.name">
              <div class="flex flex-col justify-between p-4 leading-normal" >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{{ userRecipe.name }}</h5>
                <p class="mb-3 font-normal text-gray-700 three-line-clamp">{{ userRecipe.description }}</p>
              </div>
            </router-link>
              </div>
          </div>


        </div>
      </div>
<!--Sticky Sidebar ends-->
    </div>
  </div>


</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { config } from "../../config.js";

const route = useRoute();
const recipe = ref(null);
const isLoading = ref(false);
const comments = ref([]);
const replyingTo = ref(null);
const replyContent = ref('');
const commentContent = ref('');

const user = ref(null);
const isLoadingButton = ref(false);

let userData = JSON.parse(localStorage.getItem('user'));
let username = userData ? userData.data.username : null;
const prep_time = ref(null);
const prep_time_in_minutes = ref(0);
const cook_time = ref(null);
const cook_time_in_minutes = ref(0);
const ingredients = ref([]);
const instructions = ref(null);
const userRecipes = ref([]);
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const isCollapsed = ref(true);
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

axios.defaults.baseURL = config.BASE_URL;

const handleFollowUnfollow = async (user) => {
  isLoadingButton.value = true;
  try {
    const response = await axios.post(`/follow/${user.id}`, '', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    if (response.data.status === 'success') {
      user.isFollowing = !user.isFollowing;
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    isLoadingButton.value = false;
  }
};
const fetchUserRecipes = async (userId) => {
  try {
    const response = await axios.get(`/recipe/user/${userId}`);
    if (response.data.status === 'success') {
      userRecipes.value = response.data.data;
      console.log("userrecipes",userRecipes.value); // Debugging statement
    } else {
      console.error('Error: Unexpected response from server:', response.data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const fetchRecipeData = async (id) => {
  isLoading.value = true;
  try {
    const getUnitName = async (unitId) => {
      try {
        const response = await axios.get(`/unit/${unitId}`);
        return response.data.data.name;
      } catch (error) {
        console.error('Error fetching unit name:', error);
        return null;
      }
    };

    const getIngredientName = async (ingredientId) => {
      try {
        const response = await axios.get(`/ingredient/${ingredientId}`);
        return response.data.data.name;
      } catch (error) {
        console.error('Error fetching ingredient name:', error);
        return null;
      }
    };

    // Fetch recipe data
    const recipeResponse = await axios.get(`/recipe/${id}`);
    if (recipeResponse.data.status === 'success') {
      recipe.value = recipeResponse.data.data;
      user.value = recipe.value.user;
      console.log('Recipe:', recipe.value); // Debugging statement

      prep_time.value = JSON.parse(recipe.value.prep_time);
      prep_time_in_minutes.value = Number(prep_time.value.hours) * 60 + Number(prep_time.value.minutes);
      cook_time.value = JSON.parse(recipe.value.cook_time);
      cook_time_in_minutes.value = Number(cook_time.value.hours) * 60 + Number(cook_time.value.minutes);
      instructions.value = JSON.parse(recipe.value.instructions)
          .filter(instruction => instruction && instruction.trim().length)
          .map(instruction => ({ title: instruction, active: false }));

      // Transform ingredients object into an array
      const ingredientsData = JSON.parse(recipe.value.ingredients);
      if (typeof ingredientsData === 'object' && ingredientsData !== null) {
        const ingredientsArray = Object.entries(ingredientsData).map(([id, details]) => ({ id, ...details }));

        const ingredientPromises = ingredientsArray.map(async (ingredient) => {
          const ingredientName = await getIngredientName(ingredient.id);
          const unitName = await getUnitName(ingredient.unit);
          return { ...ingredient, name: ingredientName, unitName: unitName };
        });

        ingredients.value = await Promise.all(ingredientPromises);
        if (recipe.value && recipe.value.user) {
          await fetchUserRecipes(recipe.value.user.id);
        }
      } else {
        console.error('Error: Ingredients data is not an object', ingredientsData);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    isLoading.value = false;
  }
  ingredients.value = await Promise.all(ingredientPromises);
  ingredients.value.forEach(ingredient => {
    ingredient.isClicked = false;
  });

try {
    // Fetch comments data
    const commentsResponse = await axios.get(`/comment/${route.params.id}`);
    if (commentsResponse.data.status === 'success') {
      comments.value = commentsResponse.data.data;
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    isLoading.value = false;
  }
}

const showReplyField = (commentId) => {
  replyingTo.value = commentId;
};

const postComment = async () => {
  try {
    const response = await axios.post(`/comment`, { comment: commentContent.value, recipe_id: recipe.value.id },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          }
        });
    if (response.data.status === 'success') {
      const newComment = response.data.data[0];
      comments.value.unshift(newComment);
      newComment.user.image = response.data.data[0].user.image;
      commentContent.value = '';
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const postReply = async (commentId) => {
  try {
    const response = await axios.post(`/comment/${commentId}/reply`, { reply: replyContent.value },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          }
        });
    if (response.data.status === 'success') {
      const commentIndex = comments.value.findIndex(comment => comment.id === commentId);
      const newComment = { ...comments.value[commentIndex] };
      const newReply = response.data.data[0];
      newComment.replies = [...(newComment.replies || []), newReply];
      newReply.user.image = response.data.data[0].user.image;
      comments.value.splice(commentIndex, 1, newComment);
      replyContent.value = '';
      replyingTo.value = null;
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
onMounted(() => {
  fetchRecipeData(route.params.id);
});

watch(() => route.params.id, (newId) => {
  fetchRecipeData(newId);
});

const toggleActive = (index) => {
  if (instructions.value[index]) {
    instructions.value[index].active = !instructions.value[index].active;
  }
};

</script>
<style scoped>
.active {
  opacity: 0.6;
}
.line-through {
  text-decoration: line-through;
}
.numbering {
  width: 2.5rem; /* Equal width and height to ensure the circle shape */
  height: 2.5rem;
}
tr:hover .tick-icon {
  fill: #DB2B39;
}
.strikethrough {
  text-decoration: line-through;
 text-decoration-color: gray;
}
.three-line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media only screen and (max-width: 700px) {
  .ingredients{
    display:block;
  }
}
a:hover img {
  transform: scale(1.05); /* Slight zoom */
  transition: transform 0.3s ease; /* Smooth transition */
}

img {
  transition: transform 0.3s ease; /* Ensure transition is smooth on both hover and normal state */
}
</style>









