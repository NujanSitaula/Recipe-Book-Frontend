<template>
  <div class="container mx-auto mt-10">
    <div class="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <h1 class="text-2xl font-bold">Instructions</h1>
      <div>
        <div
            v-for="(instruction, index) in instructions"
            :key="index"
            :class="['instruction flex items-center p-4 bg-gray-100 rounded-lg cursor-pointer mt-2', { active: instruction.active }]"
            @click="toggleActive(index)"
        >
          <div class="numbering flex items-center justify-center w-10 h-10 rounded-full bg-primary-200 text-white font-bold mr-4">
            {{ index + 1 }}
          </div>
          <div class="w-10/12">
<!--            <span class="font-semibold" :class="{ 'line-through': instruction.active }">{{ instruction.title }}</span>-->
            <p>{{ instruction ? instruction.charAt(0).toUpperCase() + instruction.slice(1) : '' }}</p>
          </div>
        </div>
      </div>

      <ol class="mt-4">
        <li class="my-4 text-lg flex gap-x-2" v-for="(instruction, index) in instructions" :key="index">
          <p class="text-primary-100">{{ index + 1 }}. </p>
          <p>{{ instruction ? instruction.charAt(0).toUpperCase() + instruction.slice(1) : '' }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {

      methods: {
        toggleActive(index) {
          this.instructions[index].active = !this.instructions[index].active;
        }
      }
    };
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
</style>
