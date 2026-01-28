import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useTodoStore } from './todoStore'

export const useUserStore = defineStore('user', () => {
  const name = ref('Ahmed ')
  const xp = ref(0)

  const userRank = computed(() => {
    const todoStore = useTodoStore()
    const completed = todoStore.completedCount
    if (completed > 10) return 'expert🏆'
    if (completed > 5) return 'hardworking⚡'
    return 'beginner🌱'
  })
  function completeTaskBonus() {
    xp.value += 10
  }

  return { name, xp, userRank, completeTaskBonus }
})
