<template>
  <div class="algolia-search">
    <ais-instant-search :search-client="searchClient" index-name="recipes">
      <ais-configure :query="inputValue" />
      <ais-search-box v-model="inputValue" />
      <ais-hits v-if="showHits">
        <template v-slot:item="{ item }">
          <RouterLink :to="`/recipe/${item.id}`"><h2>{{ item.name }}</h2></RouterLink>
        </template>
      </ais-hits>
    </ais-instant-search>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import { ref, watch } from 'vue';
import 'instantsearch.css/themes/algolia-min.css';
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
      showHits.value = newValue.length >= 3;
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
