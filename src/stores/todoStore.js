import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import api from '@/services/api'
import { useUserStore } from './userStore'

export const useTodoStore = defineStore('todo', () => {
  // State
  const todos = ref([])
  const filterStatus = ref('all') // all , completed , pending

  // Getters
  const completedCount = computed(() => todos.value.filter((t) => t.completed === true).length)
  const getTaskById = computed(() => {
    return (todoId) => todos.value.find((todo) => todo.id === todoId)
  })
  const filteredTodos = computed(() => {
    let result = todos.value
    if (filterStatus.value === 'completed') {
      result = result.filter((t) => t.completed)
    } else if (filterStatus.value === 'pending') {
      result = result.filter((t) => !t.completed)
    }
    console.log(result)
    return result
  })
  // Actions
  const getTodos = async () => {
    try {
      const data = await api.getTodos()
      todos.value = data
    } catch (error) {
      console.error('Failed to fetch todos:', error)
    }
  }
  const addTask = async (task) => {
    try {
      const newTodo = await api.createTodo(task)
      todos.value.unshift(newTodo)
      return newTodo
    } catch (error) {
      console.error('Failed to add task:', error)
      throw error
    }
  }

  const deleteTask = async (id) => {
    try {
      await api.deleteTodo(id)
      todos.value = todos.value.filter((t) => t.id !== id)
    } catch (error) {
      console.error('Failed to delete task:', error)
      throw error
    }
  }

  const toggleComplete = async (id) => {
    const task = todos.value.find((t) => t.id === id)
    if (task) {
      try {
        const updatedTodo = await api.patchTodo(id, { completed: !task.completed })
        task.completed = updatedTodo.completed
        if (task.completed) {
          const userStore = useUserStore()
          userStore.completeTaskBonus()
        }
      } catch (error) {
        console.error('Failed to toggle task:', error)
        throw error
      }
    }
  }

  const updateTask = async (id, newText) => {
    const task = todos.value.find((t) => t.id === id)
    if (task) {
      try {
        const updatedTodo = await api.patchTodo(id, { todo: newText })
        task.todo = updatedTodo.todo
      } catch (error) {
        console.error('Failed to update task:', error)
        throw error
      }
    }
  }
  return {
    todos,
    filterStatus,
    completedCount,
    filteredTodos,
    getTaskById,
    getTodos,
    addTask,
    deleteTask,
    toggleComplete,
    updateTask,
  }
})
