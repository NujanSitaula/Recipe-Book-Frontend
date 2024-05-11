<template>
  <form>
    <ais-instant-search :search-client="searchClient" index-name="recipes">
      <ais-configure :query="inputValue" />
    <div class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100">
      <div class="flex-[1_0_0%] ">
        <label for="hs-search-article-1" class="block text-sm text-gray-700 font-medium"><span class="sr-only">Search Recipe</span></label>
        <input v-model="inputValue" class="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500" placeholder="Search Recipe">
      </div>
      <div class="flex-[0_0_auto] ">
        <a class="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </a>
      </div>
    </div>
      <!-- Card -->
      <ais-hits v-if="showHits">
      <template  v-slot:item="{ item }">
        <div class="group rounded-xl overflow-hidden border shadow-lg shadow-gray-100 mt-10">
        <div class="sm:flex">
          <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
            <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
          </div>

          <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
             <h2>{{ item.name }}</h2>
            </h3>
            <p class="mt-3 text-gray-600">
              {{ item.description }}
            </p>
            <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
              <RouterLink :to="`/recipe/${item.id}`">Read more</RouterLink>
              <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
          </div>
        </div>
        </div>
      </template>
      <!-- End Card -->
      </ais-hits>
    </ais-instant-search>
  </form>
  <div class="algolia-search">


  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import { ref, watch } from 'vue';
// import 'instantsearch.css/themes/algolia-min.css';
import {RouterLink} from "vue-router";

export default {
  components: {RouterLink},
  setup() {
    const searchClient = algoliasearch(
        'ZJWL9BU7M2',
        '951ada48dff719cc6ff886e548112d89'
    );

    const inputValue = ref('');
    const showHits = ref(false);

    watch(inputValue, (newValue) => {
      showHits.value = newValue.length >= 1;
    });

    return {
      searchClient,
      inputValue,
      showHits
    };
  },
};
</script>

<style scoped>
/* Scoped styles to only affect this component */
.algolia-search {
  /* Your custom styles here */
  font-family: sans-serif;
  padding: 1em;
}
</style>
