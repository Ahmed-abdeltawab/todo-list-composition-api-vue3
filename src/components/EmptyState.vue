<script setup>
defineProps({
  icon: {
    type: String,
    default: '📝',
  },
  title: {
    type: String,
    default: 'No tasks yet!',
  },
  message: {
    type: String,
    default: 'Start by adding a new task',
  },
})
</script>

<template>
  <div class="text-center py-16">
    <div class="text-6xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-semibold text-gray-700 mb-2">{{ title }}</h3>
    <p class="text-gray-500">{{ message }}</p>
  </div>
</template>
