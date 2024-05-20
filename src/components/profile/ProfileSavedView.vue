<template>

</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      tempImageUrl: ''
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.tempImageUrl = URL.createObjectURL(file);
      }
    },
    submitForm() {
      // Handle form submission logic
    }
  }
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
