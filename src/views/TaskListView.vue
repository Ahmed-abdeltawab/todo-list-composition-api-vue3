<script setup>
import TaskCard from '@/components/TaskCard.vue'
import { useTodoStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const store = useTodoStore()
const { todos, completedCount } = storeToRefs(store)
onMounted(() => {
  store.getTodos()
})
</script>

<template>
  <div>
    <!-- Header with Task Count -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">My Tasks</h1>
      <p class="text-gray-600">
        Total Tasks: <span class="font-semibold text-indigo-600">{{ todos.length }}</span>
      </p>
      <p class="text-gray-600">
        Completed Tasks: <span class="font-semibold text-indigo-600">{{ completedCount }}</span>
      </p>
    </div>

    <!-- Empty State (Hidden by default - remove 'hidden' to see) -->
    <div v-if="!todos.length" class="text-center py-16">
      <div class="text-6xl mb-4">📝</div>
      <h3 class="text-xl font-semibold text-gray-700 mb-2">No tasks yet!</h3>
      <p class="text-gray-500">Start by adding a new task</p>
    </div>

    <!-- Task Cards -->
    <div v-else class="space-y-3">
      <div
        v-for="(task, index) in todos"
        :key="task.id ?? index"
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
      >
        <TaskCard :task="task" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
