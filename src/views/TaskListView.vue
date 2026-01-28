<script setup>
import TaskCard from '@/components/TaskCard.vue'
import UserWelcome from '@/components/UserWelcome.vue'
import StatsCard from '@/components/StatsCard.vue'
import TaskFilter from '@/components/TaskFilter.vue'
import EmptyState from '@/components/EmptyState.vue'
import { useTodoStore } from '@/stores/todoStore'
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const store = useTodoStore()
const userStore = useUserStore()
const { completedCount, filteredTodos, filterStatus } = storeToRefs(store)
const { name, userRank, xp } = storeToRefs(userStore)

onMounted(() => {
  store.getTodos()
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Header -->
    <header class="mb-12 pt-8 pb-4">
      <div
        class="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-gray-100"
      >
        <!-- User Welcome Section -->
        <UserWelcome :name="name" :user-rank="userRank" />

        <!-- Stats Cards -->
        <div class="flex items-center gap-4">
          <StatsCard icon="pi-bolt" label="Current XP" :value="xp" color="indigo" />
          <StatsCard
            icon="pi-check-circle"
            label="Completed"
            :value="completedCount"
            color="emerald"
          />
        </div>
      </div>

      <!-- Task Filter Section -->
      <div class="mt-8">
        <TaskFilter v-model="filterStatus" :task-count="filteredTodos.length" />
      </div>
    </header>

    <!-- Empty State -->
    <EmptyState v-if="!filteredTodos.length" />

    <!-- Task Cards -->
    <div v-else class="grid gap-4">
      <div
        v-for="(task, index) in filteredTodos"
        :key="task.id ?? index"
        class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <TaskCard :task="task" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.min-h-screen {
  background-color: #f8fafc;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
