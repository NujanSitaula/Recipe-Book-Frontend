<template>
  <!-- Hero -->
  <div class="overflow-hidden">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
        <!-- Title -->
        <div class="text-center">
          <p class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3">
            Explore, Create, and Share Delicious Recipes
          </p>
          <h1 class="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight">
            Start Your Gastronomic <span class="text-blue-500">Adventure</span>
          </h1>
        </div>
        <!-- End Title -->
        <!-- Avatar Group -->
        <div class="sm:flex sm:justify-center sm:items-center text-center sm:text-start">
          <div class="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
            <!-- Avatar Group -->
            <div class="flex justify-center -space-x-3">
              <img class="inline-block size-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description">
              <img class="inline-block size-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description">
              <img class="inline-block size-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Image Description">
              <img class="inline-block size-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description">
              <span class="inline-flex items-center justify-center size-8 rounded-full ring-2 ring-white bg-gray-800">
              <span class="text-xs font-medium leading-none text-white uppercase">7k+</span>
            </span>
            </div>
            <!-- End Avatar Group -->
          </div>

          <div class="border-t sm:border-t-0 sm:border-s border-gray-200 w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0"></div>

          <div class="pt-5 sm:pt-0 sm:ps-5">
            <div class="text-lg font-semibold text-gray-800">Join Fellow Foodies Today!</div>
            <div class="text-sm text-gray-500">Over 50k Recipes and Counting!</div>
          </div>
        </div>
        <!-- End Avatar Group -->

        <!-- Form -->
        <form>
            <div class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100">
              <div class="flex-[1_0_0%] ">
                <label for="hs-search-article-1" class="block text-sm text-gray-700 font-medium"><span class="sr-only">Search Recipe</span></label>
                <input data-hs-overlay="#hs-scroll-inside-body-modal" ref="searchInput" v-model="inputValue" class="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500" placeholder="Search Recipe">

              </div>
              <div class="flex-[0_0_auto] ">
                <a class="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </a>
              </div>
            </div>
        </form>
        <!-- End Form -->

        <!-- SVG Element -->
        <div class="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-80" aria-hidden="true">
          <svg class="w-52 h-auto" width="717" height="653" viewBox="0 0 717 653" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M170.176 228.357C177.176 230.924 184.932 227.329 187.498 220.329C190.064 213.329 186.47 205.574 179.47 203.007L170.176 228.357ZM98.6819 71.4156L85.9724 66.8638L85.8472 67.2136L85.7413 67.5698L98.6819 71.4156ZM336.169 77.9736L328.106 88.801L328.288 88.9365L328.475 89.0659L336.169 77.9736ZM616.192 128.685C620.658 122.715 619.439 114.254 613.469 109.788L516.183 37.0035C510.213 32.5371 501.753 33.756 497.286 39.726C492.82 45.696 494.039 54.1563 500.009 58.6227L586.485 123.32L521.788 209.797C517.322 215.767 518.541 224.227 524.511 228.694C530.481 233.16 538.941 231.941 543.407 225.971L616.192 128.685ZM174.823 215.682C179.47 203.007 179.475 203.009 179.48 203.011C179.482 203.012 179.486 203.013 179.489 203.014C179.493 203.016 179.496 203.017 179.498 203.018C179.501 203.019 179.498 203.018 179.488 203.014C179.469 203.007 179.425 202.99 179.357 202.964C179.222 202.912 178.991 202.822 178.673 202.694C178.035 202.437 177.047 202.026 175.768 201.456C173.206 200.314 169.498 198.543 165.106 196.099C156.27 191.182 144.942 183.693 134.609 173.352C114.397 153.124 97.7311 122.004 111.623 75.2614L85.7413 67.5698C68.4512 125.748 89.856 166.762 115.51 192.436C128.11 205.047 141.663 213.953 151.976 219.692C157.158 222.575 161.591 224.698 164.777 226.118C166.371 226.828 167.659 227.365 168.578 227.736C169.038 227.921 169.406 228.065 169.675 228.168C169.809 228.22 169.919 228.261 170.002 228.293C170.044 228.309 170.08 228.322 170.109 228.333C170.123 228.338 170.136 228.343 170.147 228.347C170.153 228.349 170.16 228.352 170.163 228.353C170.17 228.355 170.176 228.357 174.823 215.682ZM111.391 75.9674C118.596 55.8511 137.372 33.9214 170.517 28.6833C204.135 23.3705 255.531 34.7533 328.106 88.801L344.233 67.1462C268.876 11.0269 210.14 -4.91361 166.303 2.01428C121.993 9.01681 95.9904 38.8917 85.9724 66.8638L111.391 75.9674ZM328.475 89.0659C398.364 137.549 474.018 153.163 607.307 133.96L603.457 107.236C474.34 125.837 406.316 110.204 343.864 66.8813L328.475 89.0659Z" fill="currentColor" class="fill-gray-800"/>
            <path d="M17.863 238.22C10.4785 237.191 3.6581 242.344 2.62917 249.728C1.60024 257.113 6.75246 263.933 14.137 264.962L17.863 238.22ZM117.548 265.74L119.421 252.371L119.411 252.37L117.548 265.74ZM120.011 466.653L132.605 471.516L132.747 471.147L132.868 470.771L120.011 466.653ZM285.991 553.767C291.813 549.109 292.756 540.613 288.098 534.792L212.193 439.92C207.536 434.098 199.04 433.154 193.218 437.812C187.396 442.47 186.453 450.965 191.111 456.787L258.582 541.118L174.251 608.589C168.429 613.247 167.486 621.742 172.143 627.564C176.801 633.386 185.297 634.329 191.119 629.672L285.991 553.767ZM14.137 264.962L115.685 279.111L119.411 252.37L17.863 238.22L14.137 264.962ZM115.675 279.11C124.838 280.393 137.255 284.582 145.467 291.97C149.386 295.495 152.093 299.505 153.39 304.121C154.673 308.691 154.864 314.873 152.117 323.271L177.779 331.665C181.924 318.993 182.328 307.301 179.383 296.818C176.451 286.381 170.485 278.159 163.524 271.897C149.977 259.71 131.801 254.105 119.421 252.371L115.675 279.11ZM152.117 323.271C138.318 365.454 116.39 433.697 107.154 462.535L132.868 470.771C142.103 441.936 164.009 373.762 177.779 331.665L152.117 323.271ZM107.417 461.79C103.048 473.105 100.107 491.199 107.229 508.197C114.878 526.454 132.585 539.935 162.404 543.488L165.599 516.678C143.043 513.99 135.175 505.027 132.132 497.764C128.562 489.244 129.814 478.743 132.605 471.516L107.417 461.79ZM162.404 543.488C214.816 549.734 260.003 554.859 276.067 556.643L279.047 529.808C263.054 528.032 217.939 522.915 165.599 516.678L162.404 543.488Z" fill="currentColor" class="fill-orange-500"/>
            <path d="M229.298 165.61C225.217 159.371 216.85 157.621 210.61 161.702C204.371 165.783 202.621 174.15 206.702 180.39L229.298 165.61ZM703.921 410.871C711.364 410.433 717.042 404.045 716.605 396.602L709.47 275.311C709.032 267.868 702.643 262.189 695.2 262.627C687.757 263.065 682.079 269.454 682.516 276.897L688.858 384.71L581.045 391.052C573.602 391.49 567.923 397.879 568.361 405.322C568.799 412.765 575.187 418.444 582.63 418.006L703.921 410.871ZM206.702 180.39C239.898 231.14 343.567 329.577 496.595 322.758L495.394 295.785C354.802 302.049 259.09 211.158 229.298 165.61L206.702 180.39ZM496.595 322.758C567.523 319.598 610.272 335.61 637.959 353.957C651.944 363.225 662.493 373.355 671.17 382.695C675.584 387.447 679.351 391.81 683.115 396.047C686.719 400.103 690.432 404.172 694.159 407.484L712.097 387.304C709.691 385.166 706.92 382.189 703.298 378.113C699.837 374.217 695.636 369.362 690.951 364.319C681.43 354.07 669.255 342.306 652.874 331.451C619.829 309.553 571.276 292.404 495.394 295.785L496.595 322.758Z" fill="currentColor" class="fill-cyan-500"/>
          </svg>
        </div>
        <!-- End SVG Element -->

        <!-- SVG Element -->
        <div class="hidden absolute top-2/4 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80" aria-hidden="true">
          <svg class="w-72 h-auto" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" class="fill-orange-500"/>
            <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" class="fill-cyan-500"/>
            <path d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z" fill="currentColor" class="fill-gray-800"/>
          </svg>
        </div>
        <!-- End SVG Element -->
      </div>
    </div>
  </div>
  <!-- End Hero -->
  <div id="hs-scroll-inside-body-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
    <ais-instant-search :search-client="searchClient" index-name="recipes">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-screen-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
    <div class="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
      <ais-configure :query="inputValue" />
    <div class="flex justify-between items-center py-3 px-4 border-b">
      <input ref="searchInput" v-model="inputValue" class="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500" placeholder="Search Recipe">

      <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-scroll-inside-body-modal">
        <span class="sr-only">Close</span>
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
    </div>

    <div class="p-4 overflow-y-auto">
      <ais-hits v-if="showHits">
        <template v-slot:item="{ item }" >
          <div class="group rounded-xl overflow-hidden border shadow-lg shadow-gray-100 mt-10">
            <div class="sm:flex">
              <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
              </div>
              <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  {{ item.name }}
                </h3>
                <p class="mt-3 text-gray-600">
                  {{ item.description }}
                </p>
                <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  <a :href="`/recipe/${item.id}`">Read more</a>
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </p>
              </div>
            </div>
          </div>
        </template>
      </ais-hits>
    </div>
    <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
      <ais-powered-by
      theme="string"
      :class-names="object"
      />
    </div>
  </div>
  </div>
    </ais-instant-search>
  </div>





  <!-- Title -->
  <div class="max-w-2xl text-center mx-auto">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Trending Recipes</h2>
    <p class="mt-1 text-gray-600">These mouthwatering recipes are breaking the internet! </p>
  </div>
  <!-- End Title -->
  <!-- Card Blog -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card -->
      <div v-for="recipe in recipes.data" :key="recipe.id">
        <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
          <div class="h-52 flex justify-center items-center rounded-t-xl overflow-hidden">
            <img src="https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg" alt="Recipe Image" class="w-full h-full object-cover">
          </div>
          <div class="p-4 md:p-6">
            <span class="float-end">
            <img width="30" class="inline mr-1"  src ="https://svgshare.com/i/15vL.svg " title="Vegetarian">
            <img width="30" class="inline" src ="https://svgshare.com/i/15tx.svg" title="Dairy Free">
          
        </span>
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600">
             Time: {{ recipe.prep_time }} Min | Serving: {{ recipe.servings }} | Difficulty: {{ recipe.difficulty }}
        </span>

    
            <h3 class="text-xl font-semibold text-gray-800">
              {{ recipe.name }}
            </h3>
            <p class="mt-3 text-gray-500">
              {{ recipe.description }}
            </p>
          </div>
        
          <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <RouterLink :to="`/recipe/${recipe.id}`" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"> Start Cooking </RouterLink>
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Save Recipe
            </a>
          </div>
        </div>
        <!-- End Card -->
      </div>


      <!-- Card -->
      <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
        <div class="h-52 flex justify-center items-center rounded-t-xl overflow-hidden">
          <img src="https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg" alt="Recipe Image" class="w-full h-full object-cover">
        </div>
        <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600">
             Time: 30 Min | Serving: 2 | Difficulty: Easy
        </span>
          <h3 class="text-xl font-semibold text-gray-800">
            Super Cheese Pasta
          </h3>
          <p class="mt-3 text-gray-500">
            It is a super cheese Pasta.
          </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Start Cooking
          </a>
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Save Recipe
          </a>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
        <div class="h-52 flex justify-center items-center rounded-t-xl overflow-hidden">
          <img src="https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg" alt="Recipe Image" class="w-full h-full object-cover">
        </div>
        <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600">
             Time: 30 Min | Serving: 2 | Difficulty: Easy
        </span>
          <h3 class="text-xl font-semibold text-gray-800">
            Super Cheese Pasta
          </h3>
          <p class="mt-3 text-gray-500">
            It is a super cheese Pasta.
          </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Start Cooking
          </a>
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Save Recipe
          </a>
        </div>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Blog -->

   <!-- Title -->
   <div class="max-w-2xl text-center mx-auto">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">Recipe Categories</h2>
    <p class="mt-1 text-gray-600">These mouthwatering recipes are breaking the internet! </p>
  </div>
  <!-- End Title -->

  <!-- Card Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
    <!-- Card -->
    <div v-for="category in categories.data" :key="category.id">
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition" href="#">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img class="size-[38px] rounded-full" src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description">
            <div class="ms-3">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800">
                {{ category.name }}
              </h3>
            </div>
          </div>
          <div class="ps-3">
            <svg class="flex-shrink-0 size-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </a>
  </div>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition" href="#">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img class="size-[38px] rounded-full" src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description">
            <div class="ms-3">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800">
                Indian
              </h3>
            </div>
          </div>
          <div class="ps-3">
            <svg class="flex-shrink-0 size-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition" href="#">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img class="size-[38px] rounded-full" src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description">
            <div class="ms-3">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800">
                Meditteranean
              </h3>
            </div>
          </div>
          <div class="ps-3">
            <svg class="flex-shrink-0 size-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition" href="#">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img class="size-[38px] rounded-full" src="https://plus.unsplash.com/premium_photo-1664648184173-efaaeccd8548?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description">
            <div class="ms-3">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800">
                Japanese
              </h3>
            </div>
          </div>
          <div class="ps-3">
            <svg class="flex-shrink-0 size-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition" href="#">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img class="size-[38px] rounded-full" src="https://junifoods.com/wp-content/uploads/2023/12/Chicken-momo-restaurant-style-1024x693.jpg" alt="Image Description">
            <div class="ms-3">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800">
                Nepalese
              </h3>
            </div>
          </div>
          <div class="ps-3">
            <svg class="flex-shrink-0 size-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition" href="#">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img class="size-[38px] rounded-full" src="https://images.unsplash.com/photo-1566328386401-b2980125f6c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
            <div class="ms-3">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800">
                Tibetan
              </h3>
            </div>
          </div>
          <div class="ps-3">
            <svg class="flex-shrink-0 size-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition" href="#">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img class="size-[38px] rounded-full" src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description">
            <div class="ms-3">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800">
                Continental
              </h3>
            </div>
          </div>
          <div class="ps-3">
            <svg class="flex-shrink-0 size-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Card Section -->

  <!-- Title -->
  <div class="max-w-2xl text-center mx-auto">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">People's Favorites</h2>
    <p class="mt-1 text-gray-600">These mouthwatering recipes are breaking the internet! </p>
  </div>
  <!-- End Title -->
  <!-- Card Blog -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card -->
      <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
        <div class="h-52 flex justify-center items-center rounded-t-xl overflow-hidden">
          <img src="https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg" alt="Recipe Image" class="w-full h-full object-cover">
        </div>
        <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600">
             Time: 30 Min | Serving: 2 | Difficulty: Easy
        </span>
          <h3 class="text-xl font-semibold text-gray-800">
            Super Cheese Pasta
          </h3>
          <p class="mt-3 text-gray-500">
           It is a super cheese Pasta.
          </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Start Cooking
          </a>
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Save Recipe
          </a>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
        <div class="h-52 flex justify-center items-center rounded-t-xl overflow-hidden">
          <img src="https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg" alt="Recipe Image" class="w-full h-full object-cover">
        </div>
        <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600">
             Time: 30 Min | Serving: 2 | Difficulty: Easy
        </span>
          <h3 class="text-xl font-semibold text-gray-800">
            Super Cheese Pasta
          </h3>
          <p class="mt-3 text-gray-500">
            It is a super cheese Pasta.
          </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Start Cooking
          </a>
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Save Recipe
          </a>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
        <div class="h-52 flex justify-center items-center rounded-t-xl overflow-hidden">
          <img src="https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg" alt="Recipe Image" class="w-full h-full object-cover">
        </div>
        <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600">
             Time: 30 Min | Serving: 2 | Difficulty: Easy
        </span>
          <h3 class="text-xl font-semibold text-gray-800">
            Super Cheese Pasta
          </h3>
          <p class="mt-3 text-gray-500">
            It is a super cheese Pasta.
          </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Start Cooking
          </a>
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Save Recipe
          </a>
        </div>
      </div>
      <!-- End Card -->

       <!-- Card -->
       <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
        <div class="h-52 flex justify-center items-center rounded-t-xl overflow-hidden">
          <img src="https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg" alt="Recipe Image" class="w-full h-full object-cover">
        </div>
        <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600">
             Time: 30 Min | Serving: 2 | Difficulty: Easy
        </span>
          <h3 class="text-xl font-semibold text-gray-800">
            Super Cheese Pasta
          </h3>
          <p class="mt-3 text-gray-500">
            It is a super cheese Pasta.
          </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Start Cooking
          </a>
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Save Recipe
          </a>
        </div>
      </div>
      <!-- End Card -->

       <!-- Card -->
       <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
        <div class="h-52 flex justify-center items-center rounded-t-xl overflow-hidden">
          <img src="https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg" alt="Recipe Image" class="w-full h-full object-cover">
        </div>
        <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600">
             Time: 30 Min | Serving: 2 | Difficulty: Easy
        </span>
          <h3 class="text-xl font-semibold text-gray-800">
            Super Cheese Pasta
          </h3>
          <p class="mt-3 text-gray-500">
            It is a super cheese Pasta.
          </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Start Cooking
          </a>
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Save Recipe
          </a>
        </div>
      </div>
      <!-- End Card -->

       <!-- Card -->
       <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
        <div class="h-52 flex justify-center items-center rounded-t-xl overflow-hidden">
          <img src="https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg" alt="Recipe Image" class="w-full h-full object-cover">
        </div>
        <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600">
             Time: 30 Min | Serving: 2 | Difficulty: Easy
        </span>
          <h3 class="text-xl font-semibold text-gray-800">
            Super Cheese Pasta
          </h3>
          <p class="mt-3 text-gray-500">
            It is a super cheese Pasta.
          </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Start Cooking
          </a>
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Save Recipe
          </a>
        </div>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Card Blog -->
  <div class="max-w-[85rem] sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition py-16 px-10">
      <div class="grid grid-cols-2">
        <div class="grid-cols-6 text-4xl">
          <h1 class="text-2xl font-bold md:text-4xl md:leading-tight">Want to post your own recipe? </h1>
        </div>
        
        <div class="grid-cols-6"> 
  <RouterLink v-if="!isLoggedIn" to="/register"> 
    <button class="py-3 px-4 inline-flex justify-center float-end gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"> 
      Register Now
    </button>
  </RouterLink>
  <RouterLink v-else to="/add-recipe"> 
    <button class="py-3 px-4 inline-flex justify-center float-end gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"> 
      Add Recipe
    </button>
  </RouterLink>
</div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref, watch } from 'vue';
import axios from 'axios';
import { config } from '../../config.js';
import algoliasearch from 'algoliasearch/lite';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

export default {
  components: { RouterLink },

  beforeRouteEnter(to, from, next) {
    const modal = document.getElementById('hs-scroll-inside-body-modal-backdrop');
    if (modal) {
      modal.classList.add('hidden'); // Assuming 'hidden' class hides the modal
    }
    document.body.style.overflow = '';
    next();
  },
  beforeRouteUpdate(to, from, next) {
    const modal = document.getElementById('hs-scroll-inside-body-modal-backdrop');
    if (modal) {
      modal.classList.add('hidden'); // Assuming 'hidden' class hides the modal
    }
    document.body.style.overflow = '';
    next();
  },

  setup() {
    const isLoggedIn = computed(() => !!localStorage.getItem('access_token'));

    const recipes = reactive({ data: [] });
    axios.defaults.baseURL = config.BASE_URL;

    onMounted(async () => {
      try {
        const response = await axios.get('/recipe');
        if (response.data.status === 'success') {
          recipes.data = response.data.data;
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });

    const categories = reactive({ data: [] });
    axios.defaults.baseURL = config.BASE_URL;

    onMounted(async () => {
      try {
        const response = await axios.get('/category');
        if (response.data.status === 'success') {
          categories.data = response.data.data;
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });

    const searchClient = algoliasearch(
        'ZJWL9BU7M2',
        '951ada48dff719cc6ff886e548112d89'
    );

    const inputValue = ref('');
    const showHits = ref(false);

    // Constants and functions from the provided documentation
    const DELAY_AFTER_ANIMATION = 1000;
    const MIN_ANIMATION_DELAY = 50;
    const MAX_ANIMATION_DELAY = 90;
    const PLACEHOLDERS = [
      'Search: Spicy Chicken Wings Recipe',
      'Search: Extra Cheese Chicken Pasta Recipe',
      'Search: Samosa recipe',
      'Search: How to make a cake',
    ];

    const getRandomDelayBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const setPlaceholder = (inputNode, placeholder) => {
      inputNode.setAttribute("placeholder", placeholder);
    };

    const animateLetters = (currentLetters, remainingLetters, inputNode, onAnimationEnd) => {
      if (!remainingLetters.length) {
        return (
            typeof onAnimationEnd === 'function' &&
            onAnimationEnd(currentLetters.join(''), inputNode)
        );
      }

      currentLetters.push(remainingLetters.shift());

      setTimeout(() => {
        setPlaceholder(inputNode, currentLetters.join(''));
        animateLetters(currentLetters, remainingLetters, inputNode, onAnimationEnd);
      }, getRandomDelayBetween(MIN_ANIMATION_DELAY, MAX_ANIMATION_DELAY));
    };

    const animatePlaceholder = (inputNode, placeholder, onAnimationEnd) => {
      animateLetters([], placeholder.split(''), inputNode, onAnimationEnd);
    };

    const onAnimationEnd = (placeholder, inputNode) => {
      setTimeout(() => {
        let newPlaceholder = '';

        do {
          newPlaceholder =
              PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)];
        } while (placeholder === newPlaceholder);

        animatePlaceholder(inputNode, newPlaceholder, onAnimationEnd);
      }, DELAY_AFTER_ANIMATION);
    };



    // Watching input value
    watch(inputValue, (newValue) => {
      showHits.value = newValue.length >= 1;
    });

    // Animating placeholder on component mount
    const searchInput = ref(null);
    const searchInputNode = ref(null);

    const onComponentMounted = () => {
      searchInput.value
      searchInputNode.value = searchInput.value;
      onAnimationEnd('', searchInputNode.value);
    };

    onMounted(() => {
      onComponentMounted();
    });

    return {
      searchClient,
      inputValue,
      showHits,
      searchInput,
      recipes,
      categories,
      isLoggedIn
    };
  },
};
</script>