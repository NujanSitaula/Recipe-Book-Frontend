<template>
  <div style="margin-top: 100px;">
    <h1>Pusher Test</h1>
    <p>
      Publish an event to channel <code>my-channel</code>
      with event name <code>my-event</code>; it will appear below:
    </p>
    <div>
      <ul>
        <li v-for="(message, index) in messages" :key="index">
          {{message}}
        </li>
      </ul>
    </div>
    <div v-if="showPopup" class="popup">
      {{showPopup}} <!-- Display the message here -->
    </div>
    <div v-else>
      No popup <!-- This will be displayed when showPopup is falsy -->
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
  setup() {
    const messages = ref([]);
    const showPopup = ref('');

    watch(showPopup, (newValue, oldValue) => {
      console.log('showPopup changed from', oldValue, 'to', newValue);
    });

    onMounted(() => {
      // Enable pusher logging - don't include this in production
      Pusher.logToConsole = true;

      const pusher = new Pusher('b5b8a1e03c5d9801ca27', {
        cluster: 'ap2'
      });
      const channel = pusher.subscribe('my-channel');
      channel.bind('my-event', function(data) {
        console.log('Event triggered with data:', data); // Log the event data
        const message = JSON.stringify(data.message);
        messages.value.push(message);
        showPopup.value = message; // Show the message in the popup
        setTimeout(() => {
          showPopup.value = ''; // Hide the popup after 3 seconds
        }, 3000);
      });
    });

    return {
      messages,
      showPopup
    };
  }
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 20px; /* Change this to position the popup from the top */
  right: 20px; /* Change this to position the popup from the right */
  padding: 20px;
  background-color: #f44336;
  color: white;
  z-index: 1000; /* Add this to ensure the popup is above other elements */
}
</style>