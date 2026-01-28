import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import api from '@/services/api'

export const useTodoStore = defineStore('todo', () => {
  // State
  const todos = ref([])

  // Getters
  const completedCount = computed(() => todos.value.filter((t) => t.completed === true).length)
  const getTaskById = computed(() => {
    return (todoId) => todos.value.find((todo) => todo.id === todoId)
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
    getTodos,
    todos,
    completedCount,
    addTask,
    deleteTask,
    toggleComplete,
    getTaskById,
    updateTask,
  }
})
