<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [Number, String],
    required: true,
  },
  color: {
    type: String,
    default: 'indigo',
    validator: (value) => ['indigo', 'emerald', 'blue', 'purple'].includes(value),
  },
})
</script>

<template>
  <div
    class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 transition-all hover:shadow-md"
  >
    <div
      :class="[
        'w-10 h-10 rounded-xl flex items-center justify-center',
        `bg-${color}-50 text-${color}-600`,
      ]"
    >
      <i :class="['pi', icon, 'font-bold']"></i>
    </div>
    <div>
      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
        {{ label }}
      </p>
      <p class="text-xl font-black text-gray-900 leading-none">{{ value }}</p>
    </div>
  </div>
</template>
