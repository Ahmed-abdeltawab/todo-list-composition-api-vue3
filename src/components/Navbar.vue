<template>
  <nav class="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="text-xl font-bold text-indigo-600">Smart Todo</div>
        <div class="flex gap-6">
          <RouterLink
            to="/"
            class="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            active-class="text-indigo-600 border-b-2 border-indigo-600"
          >
            My Tasks
          </RouterLink>
          <RouterLink
            to="/add"
            class="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            active-class="text-indigo-600 border-b-2 border-indigo-600"
          >
            Add New Task
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
