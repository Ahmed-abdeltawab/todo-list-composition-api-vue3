<script setup>
import useTaskDetails from '@/composables/useTaskDetails'

const { task, isEditing, editText, startEdit, saveEdit, cancelEdit, handleToggle, handleDelete } =
  useTaskDetails()
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <!-- Not Found State -->
    <div v-if="!task" class="text-center py-16">
      <div class="text-6xl mb-4">🔍</div>
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Task Not Found</h2>
      <p class="text-gray-600 mb-6">The task you're looking for doesn't exist.</p>
      <RouterLink
        to="/"
        class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all"
      >
        ← Back to Tasks
      </RouterLink>
    </div>

    <!-- Task Details Card -->
    <div v-else class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-8">
        <RouterLink
          to="/"
          class="inline-flex items-center text-indigo-100 hover:text-white font-medium mb-4 transition-colors"
        >
          <i class="pi pi-arrow-left mr-2"></i>
          Back to Tasks
        </RouterLink>
        <h1 class="text-3xl font-bold text-white">Task Details</h1>
      </div>

      <!-- Content -->
      <div class="p-8">
        <!-- Status Badge -->
        <div class="mb-6">
          <span
            class="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold"
            :class="
              task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            "
          >
            <i class="pi mr-2" :class="task.completed ? 'pi-check-circle' : 'pi-clock'"></i>
            {{ task.completed ? 'Completed' : 'In Progress' }}
          </span>
        </div>

        <!-- Task Text - View Mode -->
        <div v-if="!isEditing" class="mb-8">
          <h2 class="text-sm font-medium text-gray-500 uppercase mb-2">Description</h2>
          <p
            class="text-2xl text-gray-800 leading-relaxed"
            :class="task.completed ? 'line-through text-gray-400' : ''"
          >
            {{ task.text }}
          </p>
        </div>

        <!-- Task Text - Edit Mode -->
        <div v-else class="mb-8">
          <h2 class="text-sm font-medium text-gray-500 uppercase mb-2">Edit Description</h2>
          <textarea
            v-model="editText"
            class="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
            rows="4"
            placeholder="Task description..."
          ></textarea>
        </div>

        <!-- Metadata -->
        <div class="mb-8 p-4 bg-gray-50 rounded-lg">
          <h2 class="text-sm font-medium text-gray-500 uppercase mb-3">Details</h2>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Task ID:</span>
              <span class="font-mono text-gray-800">{{ task.id }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Status:</span>
              <span
                class="font-semibold"
                :class="task.completed ? 'text-green-600' : 'text-yellow-600'"
              >
                {{ task.completed ? 'Complete' : 'Pending' }}
              </span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-3">
          <!-- Edit Mode Buttons -->
          <template v-if="isEditing">
            <button
              @click="saveEdit"
              class="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
            >
              <i class="pi pi-check"></i>
              Save Changes
            </button>
            <button
              @click="cancelEdit"
              class="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <i class="pi pi-times"></i>
              Cancel
            </button>
          </template>

          <!-- View Mode Buttons -->
          <template v-else>
            <button
              @click="handleToggle"
              class="flex-1 px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
              :class="
                task.completed
                  ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              "
            >
              <i class="pi" :class="task.completed ? 'pi-replay' : 'pi-check'"></i>
              {{ task.completed ? 'Mark Incomplete' : 'Mark Complete' }}
            </button>
            <button
              @click="startEdit"
              class="flex-1 bg-blue-100 text-blue-700 px-6 py-3 rounded-xl font-medium hover:bg-blue-200 transition-all flex items-center justify-center gap-2"
            >
              <i class="pi pi-pencil"></i>
              Edit Task
            </button>
            <button
              @click="handleDelete"
              class="flex-1 bg-red-100 text-red-700 px-6 py-3 rounded-xl font-medium hover:bg-red-200 transition-all flex items-center justify-center gap-2"
            >
              <i class="pi pi-trash"></i>
              Delete
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
