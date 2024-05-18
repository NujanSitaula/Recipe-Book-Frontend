<template>
  <!-- Blog Article -->
  <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto" v-if="recipe">
    <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
      <!-- Content -->
      <div class="lg:col-span-2">
        <div class="py-8 lg:pe-8">
          <div class="space-y-5 lg:space-y-8">
            <a  @click="$router.back()" class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline" href="#">
              <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Back to Recipes
            </a>
            <div v-if="isLoading">
              <div role="status" class="max-w-sm animate-pulse">
                <div class="h-10 bg-gray-200 rounded-full w-96 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <span class="sr-only">Loading...</span>
              </div>
              </div>

            <h2 class="text-3xl font-bold lg:text-5xl">{{ recipe.name }}</h2>

            <div class="flex items-center gap-x-5">
              <a class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
                Company News
              </a>
              <p class="text-xs sm:text-sm text-gray-800">January 18, 2023</p>
            </div>
            <!-- Team -->
            <div class="max-w-5xl mx-auto">
              <!-- Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12  border rounded-2xl p-5">
                <!-- Prep Time -->
                <div class="text-center accordion-item">
                  <button class="accordion-btn">
                    <!-- Icon -->
                    <span class="inline-flex justify-center items-center size-[62px] rounded-full bg-blue-100 text-blue-800">
          <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="6" x2="12" y2="12"></line>
            <line x1="12" y1="18" x2="12" y2="18"></line>
          </svg>
        </span>
                    <!-- End Icon -->
                    <div class="mt-2 sm:mt-4">
                      <h3 class="font-medium text-gray-800">
                        10 Min
                      </h3>
                      <p class="text-sm text-gray-600">
                        Prep Time
                      </p>
                    </div>
                  </button>
                  <div class="accordion-content">
                    <!-- Content Here -->
                  </div>
                </div>
                <!-- End Prep Time -->
                <!-- Cook Time -->
                <div class="text-center accordion-item">
                  <button class="accordion-btn">
                    <!-- Icon -->
                    <span class="inline-flex justify-center items-center size-[62px] rounded-full bg-blue-100 text-blue-800">
          <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="6" x2="12" y2="12"></line>
            <line x1="12" y1="18" x2="12" y2="18"></line>
          </svg>
        </span>
                    <!-- End Icon -->
                    <div class="mt-2 sm:mt-4">
                      <h3 class="font-medium text-gray-800">
                        30 Min
                      </h3>
                      <p class="text-sm text-gray-600">
                        Cook Time
                      </p>
                    </div>
                  </button>
                  <div class="accordion-content">
                    <!-- Content Here -->
                  </div>
                </div>
                <!-- End Cook Time -->
                <!-- Ingredients -->
                <div class="text-center accordion-item">
                  <button class="accordion-btn">
                    <!-- Icon -->
                    <span class="inline-flex justify-center items-center size-[62px] rounded-full bg-blue-100 text-blue-800">
          <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="16"></line>
          </svg>
        </span>
                    <!-- End Icon -->
                    <div class="mt-2 sm:mt-4">
                      <h3 class="font-medium text-gray-800">
                        20 Approx
                      </h3>
                      <p class="text-sm text-gray-600">
                        Ingredients
                      </p>
                    </div>
                  </button>
                  <div class="accordion-content">
                    <!-- Content Here -->
                  </div>
                </div>
                <!-- End Ingredients -->
                <!-- Servings -->
                <div class="text-center accordion-item">
                  <button class="accordion-btn">
                    <!-- Icon -->
                    <span class="inline-flex justify-center items-center size-[62px] rounded-full bg-blue-100 text-blue-800">
          <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </span>
                    <!-- End Icon -->
                    <div class="mt-2 sm:mt-4">
                      <h3 class="font-medium text-gray-800">
                        2 Person
                      </h3>
                      <p class="text-sm text-gray-600">
                        Servings
                      </p>
                    </div>
                  </button>
                  <div class="accordion-content">
                    <!-- Content Here -->
                  </div>
                </div>
                <!-- End Servings -->
                <!-- Difficulty -->
                <div class="text-center accordion-item">
                  <button class="accordion-btn">
                    <!-- Icon -->
                    <span class="inline-flex justify-center items-center size-[62px] rounded-full bg-blue-100 text-blue-800">
          <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </span>
                    <!-- End Icon -->
                    <div class="mt-2 sm:mt-4">
                      <h3 class="font-medium text-gray-800">
                        Hard
                      </h3>
                      <p class="text-sm text-gray-600">
                        Difficulty
                      </p>
                    </div>
                  </button>
                  <div class="accordion-content">
                    <!-- Content Here -->
                  </div>
                </div>
                <!-- End Difficulty -->
              </div>
              <!-- End Grid -->
            </div>
            <!-- End Team -->



            <p class="text-lg text-gray-800">At preline, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow.</p>

            <p class="text-lg text-gray-800">We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.</p>

            <div class="text-center">
              <div class="grid lg:grid-cols-2 gap-3">
                <div class="grid grid-cols-2 lg:grid-cols-1 gap-3">
                  <figure class="relative w-full h-60">
                    <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
                  </figure>
                  <figure class="relative w-full h-60">
                    <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
                  </figure>
                </div>
                <figure class="relative w-full h-72 sm:h-96 lg:h-full">
                  <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="Image Description">
                </figure>
              </div>

              <span class="mt-3 block text-sm text-center text-gray-500">
              Working process
            </span>
            </div>

            <p class="text-lg text-gray-800">As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.</p>

            <p class="text-lg text-gray-800">That's why we are excited to share that we now have a <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">free version of Preline</a>, which will allow individual designers, startups and other small teams a chance to create a culture of openness early on.</p>

            <blockquote class="text-center p-4 sm:px-7">
              <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal">
                To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
              </p>
              <p class="mt-5 text-gray-800">
                Nicole Grazioso
              </p>
            </blockquote>

            <figure>
              <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203454-488ab18f7eda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
              <figcaption class="mt-3 text-sm text-center text-gray-500">
                A man and a woman looking at a cell phone.
              </figcaption>
            </figure>

            <div class="space-y-3">
              <h3 class="text-2xl font-semibold">Bringing the culture of sharing to everyone</h3>

              <p class="text-lg text-gray-800">We know the power of sharing is real, and we want to create an opportunity for everyone to try Preline and explore how transformative open communication can be. Now you can have a team of one or two designers and unlimited spectators (think PMs, management, marketing, etc.) share work and explore the design process earlier.</p>
            </div>

            <ul class="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
              <li class="ps-2">Preline allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on," <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">said</a> Stewart Scott-Curran, Intercom's Director of Brand Design.</li>
              <li class="ps-2">Preline opened a new way of sharing. It's a persistent way for everyone to see and absorb each other's work," said David Scott, Creative Director at <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">Eventbrite</a>.</li>
            </ul>

            <p class="text-lg text-gray-800">Small teams and individual designers need a space where they can watch the design process unfold, both for themselves and for the people they work with – no matter if it's a fellow designer, product manager, developer or client. Preline allows you to invite more people into the process, creating a central place for conversation around design. As those teams grow, transparency and collaboration becomes integrated in how they communicate and work together.</p>

            <div class="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
              <!-- Badges/Tags -->
              <div>
                <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
                  Plan
                </a>
                <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
                  Web development
                </a>
                <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
                  Free
                </a>
                <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
                  Team
                </a>
              </div>
              <!-- End Badges/Tags -->

              <div class="flex justify-end items-center gap-x-1.5">
                <!-- Button -->
                <div class="hs-tooltip inline-block">
                  <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800">
                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    875
                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm" role="tooltip">
                    Like
                  </span>
                  </button>
                </div>
                <!-- Button -->

                <div class="block h-3 border-e border-gray-300 mx-3"></div>

                <!-- Button -->
                <div class="hs-tooltip inline-block">
                  <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800">
                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                    16
                    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm" role="tooltip">
                    Comment
                  </span>
                  </button>
                </div>
                <!-- Button -->

                <div class="block h-3 border-e border-gray-300 mx-3"></div>

                <!-- Button -->
                <div class="hs-dropdown relative inline-flex">
                  <button type="button" id="blog-article-share-dropdown" class="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800">
                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                    Share
                  </button>
                  <div class="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2" aria-labelledby="blog-article-share-dropdown">
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
                      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                      Copy link
                    </a>
                    <div class="border-t border-gray-600 my-2"></div>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
                      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                      Share on Twitter
                    </a>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
                      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                      Share on Facebook
                    </a>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
                      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                      Share on LinkedIn
                    </a>
                  </div>
                </div>
                <!-- Button -->
              </div>
            </div>
          </div>
        </div>
        <!-- Comment Section Starts -->
        <section class="bg-white antialiased">
          <div class="max-w-2xl px-4">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg lg:text-2xl font-bold text-gray-900">Discussion ({{ comments.length }})</h2>
            </div>
            <form class="mb-6">
              <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea id="comment" rows="6"
                          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                          placeholder="Write a comment..." required></textarea>
              </div>
              <button type="submit"
                      class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                Post comment
              </button>
            </form>
            <div v-for="comment in comments" :key="comment.id">
            <article class="p-6 text-base bg-white rounded-lg">
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold"><img
                      class="mr-2 w-6 h-6 rounded-full"
                      :src="comment.user.image"
                      alt="Michael Gough">{{ comment.user.firstName  }} {{ comment.user.lastName }}</p>
                  <p class="text-sm text-gray-600"><time datetime="2022-02-08"
                                                         title="February 8th, 2022">{{ comment.created_at }}</time></p>
                </div>
                <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                        type="button">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                  </svg>
                  <span class="sr-only">Comment settings</span>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdownComment1"
                     class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow">
                  <ul class="py-1 text-sm text-gray-700"
                      aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                      <a href="#"
                         class="block py-2 px-4 hover:bg-gray-100">Edit</a>
                    </li>
                    <li>
                      <a href="#"
                         class="block py-2 px-4 hover:bg-gray-100">Remove</a>
                    </li>
                    <li>
                      <a href="#"
                         class="block py-2 px-4 hover:bg-gray-100">Report</a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p class="text-gray-500">{{ comment.comment }}</p>
              <div class="flex items-center mt-4 space-x-4">
                <button type="button"
                        class="flex items-center text-sm text-gray-500 hover:underline font-medium">
                  <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                  </svg>
                  Reply
                </button>
              </div>
            </article>
              <div v-for="reply in comment.replies" :key="reply.id">
            <article class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg">
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold"><img
                      class="mr-2 w-6 h-6 rounded-full"
                      :src="reply.user.image"
                      alt="Jese Leos">{{ reply.user.firstName }} {{ reply.user.lastName }}</p>
                  <p class="text-sm text-gray-600"><time datetime="2022-02-12"
                                                         title="February 12th, 2022">{{ reply.created_at }}</time></p>
                </div>
                <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                        type="button">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                  </svg>
                  <span class="sr-only">Comment settings</span>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdownComment2"
                     class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow">
                  <ul class="py-1 text-sm text-gray-700"
                      aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                      <a href="#"
                         class="block py-2 px-4 hover:bg-gray-100">Edit</a>
                    </li>
                    <li>
                      <a href="#"
                         class="block py-2 px-4 hover:bg-gray-100">Remove</a>
                    </li>
                    <li>
                      <a href="#"
                         class="block py-2 px-4 hover:bg-gray-100">Report</a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p class="text-gray-500">{{ reply.reply }}</p>
              <div class="flex items-center mt-4 space-x-4">
                <button type="button"
                        class="flex items-center text-sm text-gray-500 hover:underline font-medium">
                  <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                  </svg>
                  Reply
                </button>
              </div>
            </article>
              </div>
            <hr>
            </div>
          </div>
        </section>

        <!-- Comment Section Ends -->
      </div>
      <!-- End Content -->

      <!-- Sidebar -->
      <div class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent">
        <div class="sticky top-0 start-0 py-8 lg:ps-8">
          <!-- Avatar Media -->
          <div class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8">
            <a class="block flex-shrink-0" href="#">
              <img class="size-10 rounded-full" :src="recipe.user.image" alt="Image Description">
            </a>

            <a class="group grow block" href="">
              <h5 class="group-hover:text-gray-600 text-sm font-semibold text-gray-800">
                {{ recipe.user.firstName }} {{ recipe.user.lastName }}
              </h5>
              <p class="text-sm text-gray-500">
                UI/UX enthusiast
              </p>
            </a>

            <div class="grow">
              <div class="flex justify-end">
                <button type="button" class="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
                  Follow
                </button>
              </div>
            </div>
          </div>
          <!-- End Avatar Media -->

          <div class="space-y-6">
            <!-- Media -->
            <a class="group flex items-center gap-x-6" href="#">
              <div class="grow">
              <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                5 Reasons to Not start a UX Designer Career in 2022/2023
              </span>
              </div>

              <div class="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description">
              </div>
            </a>
            <!-- End Media -->

            <!-- Media -->
            <a class="group flex items-center gap-x-6" href="#">
              <div class="grow">
              <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                If your UX Portfolio has this 20% Well Done, it Will Give You an 80% Result
              </span>
              </div>

              <div class="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description">
              </div>
            </a>
            <!-- End Media -->

            <!-- Media -->
            <a class="group flex items-center gap-x-6" href="#">
              <div class="grow">
              <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                7 Principles of Icon Design
              </span>
              </div>

              <div class="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description">
              </div>
            </a>
            <!-- End Media -->
          </div>
        </div>
      </div>
      <!-- End Sidebar -->
    </div>
  </div>
  <!-- End Blog Article -->

</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import {config} from "../../config.js";

const route = useRoute();
const recipe = ref(null);
const isLoading = ref(false); // Add this line
const comments = ref(null);
axios.defaults.baseURL = config.BASE_URL;

onMounted(async () => {
  isLoading.value = true; // Set isLoading to true when data fetching starts
  try {
    const response = await axios.get(`/comment/${route.params.id}`); // Replace '/comments' with your actual API endpoint
    if (response.data.status === 'success') {
      comments.value = response.data.data;
    }
  } catch (error) {
    console.error('Error:', error);
  }
  try {
    const response = await axios.get(`/recipe/${route.params.id}`);
    if (response.data.status === 'success') {
      recipe.value = response.data.data;
      console.log(recipe.value);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    isLoading.value = false; // Set isLoading to false when data fetching is completed
  }
});

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const btn = item.querySelector('.accordion-btn');
  const content = item.querySelector('.accordion-content');

  btn.addEventListener('click', () => {
    // Toggle active class on button
    btn.classList.toggle('active');

    // Toggle accordion content visibility
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

</script>
