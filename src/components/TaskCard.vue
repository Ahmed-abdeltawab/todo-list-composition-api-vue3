<script setup>
import { useRouter } from 'vue-router'

const { task } = defineProps(['task'])
defineEmits(['toggle', 'delete'])
const router = useRouter()
</script>
<template>
  <div v-tooltip="'created At :' + task.createdAt" class="flex items-center gap-4">
    <!-- Custom Checkbox -->
    <template v-if="task.completed">
      <button
        @click="$emit('toggle')"
        class="flex-shrink-0 w-6 h-6 rounded-md border-2 bg-indigo-600 border-indigo-600 flex items-center justify-center transition-all"
      >
        <i class="pi pi-check text-white text-sm" aria-hidden="true"></i>
      </button>
    </template>
    <template v-else>
      <button
        @click="$emit('toggle', task.id)"
        class="flex-shrink-0 w-6 h-6 rounded-md border-2 border-gray-300 hover:border-indigo-600 flex items-center justify-center transition-all"
      ></button>
    </template>

    <!-- Task Text -->
    <span
      class="flex-1 text-gray-800 transition-all"
      :class="task.completed ? 'line-through text-gray-400' : ''"
    >
      {{ task.text }}
    </span>

    <button
      class="flex-shrink-0 text-gray-400 hover:text-green-600 transition-colors p-2 rounded-lg hover:bg-red-50"
      @click="router.push({ name: 'TaskDetails', params: { id: task.id } })"
    >
      <i class="pi pi-eye text-xl" aria-hidden="true"></i>
    </button>
    <button
      class="flex-shrink-0 text-gray-400 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-red-50"
      @click="$emit('delete', task.id)"
      aria-label="Delete task"
    >
      <i class="pi pi-trash text-xl" aria-hidden="true"></i>
    </button>
  </div>
</template>
