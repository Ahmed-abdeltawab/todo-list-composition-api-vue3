<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center gap-2">
          <div
            class="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200"
          >
            <i class="pi pi-check-square text-white font-bold text-xl"></i>
          </div>
          <span class="text-xl font-black text-gray-900 tracking-tight"
            >Smart<span class="text-indigo-600">Todo</span></span
          >
        </div>

        <div class="flex items-center gap-2 bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
          <RouterLink
            to="/"
            class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2"
            active-class="bg-white text-indigo-600 shadow-md transform scale-105"
            inactive-class="text-gray-500 hover:text-gray-900 hover:bg-white/50"
          >
            <i class="pi pi-list font-bold"></i>
            <span>Dashboard</span>
          </RouterLink>
          <RouterLink
            to="/add"
            class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2"
            active-class="bg-white text-indigo-600 shadow-md transform scale-105"
            inactive-class="text-gray-500 hover:text-gray-900 hover:bg-white/50"
          >
            <i class="pi pi-plus-circle font-bold"></i>
            <span>Add Task</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
