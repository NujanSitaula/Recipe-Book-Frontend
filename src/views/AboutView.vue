<template>
  <div>
    <div v-if="apiData">
      <div v-for="item in apiData.data" :key="item.id">
        <h2>{{ item.branch_name }}</h2>
        <p>Rego Number: {{ item.branch_email }}</p>
        <p>Asset Type: {{ item.branch_phone }}</p>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: null,
    };
  },
  created() {
    fetch('https://smc-laravel-api.test/api/v1/branch', {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + '1|foNHWqu3Zt7Bz7sTUBwSKVUdHnZ9mWxIV8kXUJe4a560c210',
        'Content-Type': 'application/json',
      }
    })
        .then(response => response.json())
        .then(data => {
          this.apiData = data;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  },
};
</script>