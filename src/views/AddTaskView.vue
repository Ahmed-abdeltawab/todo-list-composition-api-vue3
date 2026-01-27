<script setup>
import useTodos from '@/composables/useTodos'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { addTask } = useTodos()
const vFocus = {
  mounted: (el) => el.focus(),
}
const router = useRouter()
const descInput = ref('')
const handleSubmit = () => {
  if (!descInput.value || !descInput.value.trim()) {
    alert('Please enter a task description')
    return
  }

  addTask({
    id: Date.now(),
    completed: false,
    text: descInput.value.trim(),
  })

  router.push('/')
}
</script>

<template>
  <div class="flex items-center justify-center min-h-[60vh]">
    <div class="w-full max-w-lg">
      <!-- Card -->
      <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Add New Task</h2>

        <!-- Form -->
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <!-- Text Input -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"> Task Description </label>
            <input
              v-focus
              v-model="descInput"
              type="text"
              placeholder="What needs to be done?"
              class="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          <!-- Buttons -->
          <div class="flex gap-3">
            <!-- Save Button - Normal State -->
            <button
              type="submit"
              
              class="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95"
            >
              Save Task
            </button>
          </div>

          <!-- Cancel Link -->
          <div class="text-center">
            <RouterLink
              to="/"
              class="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              ← Go Back
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
