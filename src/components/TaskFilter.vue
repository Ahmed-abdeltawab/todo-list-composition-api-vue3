<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  taskCount: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['update:modelValue'])

const statusFilters = ['all', 'completed', 'pending']

const updateFilter = (status) => {
  emit('update:modelValue', status)
}
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
    <div class="flex items-baseline gap-2">
      <h2 class="text-2xl font-bold text-gray-900">Task List</h2>
      <span class="text-gray-400 font-bold text-sm bg-gray-100 px-2 py-0.5 rounded-full">
        {{ taskCount }}
      </span>
    </div>

    <div class="inline-flex p-1 bg-gray-100/80 rounded-xl backdrop-blur-sm">
      <button
        v-for="status in statusFilters"
        :key="status"
        @click="updateFilter(status)"
        :class="[
          'px-6 py-2 text-xs font-bold rounded-lg transition-all duration-300 capitalize tracking-wide',
          modelValue === status
            ? 'bg-white text-indigo-600 shadow-sm transform scale-105'
            : 'text-gray-500 hover:text-gray-900 hover:bg-white/40',
        ]"
      >
        {{ status }}
      </button>
    </div>
  </div>
</template>
