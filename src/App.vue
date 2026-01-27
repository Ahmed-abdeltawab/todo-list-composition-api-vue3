<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sticky Navigation Bar -->
    <Navbar />

    <!-- Page Content -->
    <div class="max-w-4xl mx-auto px-4 py-8">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
