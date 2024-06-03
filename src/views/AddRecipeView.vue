<template>
  <div class="overflow-hidden">
    <div class="mt-5 max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8 main-content">
      <div class="main">
        <div class="p-4 bg-white rounded-lg">
          <!-- Stepper -->
          <div data-hs-stepper>
            <!-- Stepper Nav -->
            <ul class="flex flex-row gap-x-2 relative">
              <li v-for="step in steps" :key="step.index" class="flex items-center gap-x-2 shrink basis-0 flex-1 group" :data-hs-stepper-nav-item="{ index: step.index }">
                <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
                  <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200"
                        :class="{'hs-stepper-active:bg-primary-100 hs-stepper-active:text-white': currentStep === step.index,
                                'hs-stepper-success:bg-primary-100 hs-stepper-success:text-white': step.completed,
                                'hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600': step.completed}">
                    <span v-if="!step.completed">{{ step.index }}</span>
                    <svg v-else class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span class="ms-2 text-sm font-medium text-gray-800">{{ step.label }}</span>
                </span>
                <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden"
                     :class="{'hs-stepper-success:bg-primary-100': step.completed, 'hs-stepper-completed:bg-teal-600': step.completed}"></div>
              </li>
            </ul>
            <!-- End Stepper Nav -->

            <!-- Stepper Content -->
            <div class="mt-5 sm:mt-8">
              <!-- Step 1: Recipe Basics -->
              <div v-if="currentStep === 1">
                <div class="h-auto bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                  <div class="rounded-xl shadow p-4 sm:p-7">
                    <form @submit.prevent="handleNext">
                      <div class="sm:col-span-12">
                        <h1 class="text-xl font-semibold text-gray-800">Let's start with the basics</h1>
                      </div>
                      <!-- Section -->
                      <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 px-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                        <!-- Recipe Title -->
                        <div class="sm:col-span-12">
                          <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">
                            Recipe Title
                            <input v-model="formData.title" type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your recipe title here" required>
                            <span v-if="errors.title" class="text-red-500 text-xs">{{ errors.title }}</span>
                          </label>
                        </div>
                        <!-- Description -->
                        <div class="sm:col-span-12">
                          <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">
                            Description
                            <textarea v-model="formData.description" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Give a short description to your recipe" required></textarea>
                            <span v-if="errors.description" class="text-red-500 text-xs">{{ errors.description }}</span>
                          </label>
                        </div>
                        <!-- Image Preview and Upload -->
                        <div class="sm:col-span-12">
                          <div class="grid grid-cols-2">
                            <div class="col-span-1">
                              <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">Preview of your image</label>
                              <div class="h-48 w-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                                <img v-if="imagePreviewUrl" :src="imagePreviewUrl" alt="Image preview" class="h-48 w-48 p-2 object-cover" />
                              </div>
                            </div>
                            <div class="col-span-1">
                              <label class="m-1 text-sm font-medium text-gray-500 mt-2.5">Add image of your recipe</label>
                              <div class="flex items-center justify-start w-64">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                  </div>
                                  <input id="dropzone-file" type="file" class="hidden" @change="handleImageChange" />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Preparation Time -->
                        <div class="sm:col-span-12">
                          <label class="inline-block m-1 text-sm font-medium text-gray-500 mt-2.5">Preparation Time</label>
                          <div class="sm:grid-cols-2 inline-flex">
                            <div class="sm:col-span-1 inline-flex w-full">
                              <input v-model="formData.preparationTime.hours" type="number" min="0" class="mr-2 block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500">
                              <label for="hour" class="inline-block text-sm font-medium text-gray-500 mt-1.5">Hours</label>
                            </div>
                            <div class="sm:col-span-1 mx-10 inline-flex w-full">
                              <input v-model="formData.preparationTime.minutes" type="number" min="0" class="mr-2 block w-full text-gray-900 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500">
                              <label for="minute" class="inline-block text-sm font-medium text-gray-500 mt-1.5">Minutes</label>
                            </div>
                          </div>
                        </div>
                        <!-- Cooking Time -->
                        <div class="col-span-12">
                          <label class="block m-1 text-sm font-medium text-gray-500 mt-2.5">Cooking Time</label>
                          <div class="sm:grid-cols-2 inline-flex">
                            <div class="sm:col-span-1 inline-flex w-full">
                              <input v-model="formData.cookingTime.hours" type="number" min="0" class="mr-2 block w-full p-1 text-gray-900 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500">
                              <label for="hour" class="inline-block text-sm font-medium text-gray-500 mt-1.5">Hours</label>
                            </div>
                            <div class="sm:col-span-1 mx-10 inline-flex w-full">
                              <input v-model="formData.cookingTime.minutes" type="number" min="0" class="mr-2 block w-full p-1 text-gray-900 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500">
                              <label for="minute" class="inline-block text-sm font-medium text-gray-500 mt-1.5">Minutes</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Next Button -->
                      <div class="mt-5 sm:mt-8 flex justify-end gap-2">
                        <button type="submit" class="btn btn-primary mt-4">
                          Next
                          <svg class="w-4 h-4 ms-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <!-- Step 2: Ingredients and Instructions -->
              <div v-else-if="currentStep === 2">
              <form @submit.prevent="handleNext">
                    <div class="p-4 h-auto bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
                      <h3 class="text-gray-500">
                        <div id="hs-wrapper-select-for-copy" class="space-y-3">
                          <!-- Select -->
                          <div v-for="(input, index) in ingredientInputs" :key="index" class="relative">
                            <select v-model="input.selectedIngredientId" :data-hs-select="{
                placeholder: 'Select ingredients...',
                toggleTag: '<button type=\'button\'></button>',
                toggleClasses: 'hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1]',
                dropdownClasses: 'mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto',
                optionClasses: 'py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100',
                optionTemplate: '<div class=\'flex justify-between w-full\'><span data-title></span><span class=\'hidden hs-selected:block\'><svg class=\'flex-shrink-0 size-4 text-blue-600\' xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' fill=\'currentColor\' viewBox=\'0 0 16 16\'><path d=\'M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\'/></svg></span></div>'
              }">
                              <option v-for="ingredient in ingredients" :value="ingredient.id">
                                {{ ingredient.name }}
                              </option>
                            </select>

                            <div class="absolute top-1/2 end-3 -translate-y-1/2">
                              <svg class="flex-shrink-0 size-3.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </div>
                            <input v-model="input.selectedQuantity" type="text" name="quantity" class="mt-2 w-full">
                          </div>
                          <!-- End Select -->
                        </div>

                        <p class="mt-3 text-end">
                          <button @click="addIngredient" type="button" id="hs-copy-select-content" class="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50">
                            <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            Add Option
                          </button>
                        </p>
                      </h3>
                    <!-- Next Button -->
                    <div class="mt-5 sm:mt-8 flex justify-end gap-2">
                      <button type="submit" class="btn btn-primary mt-4">
                        Next
                        <svg class="w-4 h-4 ms-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>
                    </div>
                    </div>
              </form>
              </div>
              <!-- Step 3: Review and Submit -->
              <div v-else-if="currentStep === 3">
                <!-- Review and Submit Form -->
                <p>some content</p>
              </div>
            </div>
            <!-- End Stepper Content -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref, reactive} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const currentStep = ref(1);

const steps = [
  {index: 1, label: 'Recipe Basics', completed: false},
  {index: 2, label: 'Ingredients and Instructions', completed: false},
  {index: 3, label: 'Review and Submit', completed: false},
];

const maxSteps = steps.length;
const formData = reactive({
  title: '',
  description: '',
  image: null,
  preparationTime: {hours: 0, minutes: 0},
  cookingTime: {hours: 0, minutes: 0},
  ingredients: [],
  instructions: '',
});

const errors = reactive({
  title: '',
  description: '',
  image: '',
  preparationTime: '',
  cookingTime: '',
  ingredients: '',
  instructions: '',
});

const imagePreviewUrl = ref(null);

function handleNext() {
  if (validateStep()) {
    steps[currentStep.value - 1].completed = true;
    if (currentStep.value < steps.length) {
      currentStep.value++;
    } else {
      handleSubmit();
    }
  }
}

function handleImageChange(event) {
  const file = event.target.files[0];
  if (file) {
    formData.image = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreviewUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function validateStep() {
  let valid = true;
  if (currentStep.value === 1) {
    if (!formData.title) {
      errors.title = 'Recipe title is required.';
      valid = false;
    } else {
      errors.title = '';
    }

    if (!formData.description) {
      errors.description = 'Description is required.';
      valid = false;
    } else {
      errors.description = '';
    }
  }
  return valid;
}

async function handleSubmit() {
  const formDataPayload = new FormData();
  formDataPayload.append('title', formData.title);
  formDataPayload.append('description', formData.description);
  if (formData.image) {
    formDataPayload.append('image', formData.image);
  }
  formDataPayload.append('preparationTime', JSON.stringify(formData.preparationTime));
  formDataPayload.append('cookingTime', JSON.stringify(formData.cookingTime));
  formDataPayload.append('ingredients', JSON.stringify(formData.ingredients));
  formDataPayload.append('instructions', formData.instructions);

  try {
    const response = await fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
      },
      body: formDataPayload,
    });

    if (response.ok) {
      const data = await response.json();
      router.push({name: 'RecipeDetail', params: {id: data.id}});
    } else {
      console.error('Failed to submit recipe.');
    }
  } catch (error) {
    console.error('Error submitting recipe:', error);
  }
}


  const ingredientInputs = ref([{selectedIngredientId: null, selectedQuantity: ''}]);
  const ingredients = ref([
  {id: 1, name: 'Ingredient 1'},
  {id: 2, name: 'Ingredient 2'},
  // Add more ingredients as needed
  ]);

  function addIngredient() {
  ingredientInputs.value.push({selectedIngredientId: null, selectedQuantity: ''});
}

</script>
