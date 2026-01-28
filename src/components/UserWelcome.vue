<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  userRank: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <div class="flex items-center gap-2 mb-3">
      <span
        class="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest rounded"
      >
        Dashboard
      </span>
      <span class="text-gray-300">•</span>
      <span class="text-sm font-semibold text-gray-400">{{ userRank }}</span>
    </div>
    <h1 class="text-4xl font-black text-gray-900 tracking-tight mb-1">
      Howdy,
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">{{
        name
      }}</span>
    </h1>
    <p class="text-gray-500 text-sm font-medium">Here's what's happening with your tasks today.</p>
  </div>
</template>
