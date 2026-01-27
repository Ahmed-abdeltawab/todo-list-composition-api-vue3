import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import data from '@/data/data.json'
export const useTodoStore = defineStore('todo', () => {
  // State
  const todos = ref(
    (data.todos || []).map((t, idx) => ({
      id: t.id ?? idx,
      text: t.todo ?? 'Untitled task',
      completed: !!t.completed,
      createdAt: t.createdAt ?? '',
    })),
  )
  //Getters
  const completedCount = computed(() => todos.value.filter((t) => t.completed === true).length)
  const getTaskById = computed(() => {
    return (todoId) => todos.value.find((todo) => todo.id === todoId)
  })
  //Actions
  const addTask = (task) => {
    todos.value.unshift(task)
  }
  const deleteTask = (id) => {
    todos.value = todos.value.filter((t) => t.id !== id)
  }
  const toggleComplete = (id) => {
    const task = todos.value.find((t) => t.id === id)
    if (task) {
      task.completed = !task.completed
    }
  }
  const updateTask = (id, newText) => {
    const task = todos.value.find((t) => t.id === id)
    if (task) task.text = newText
  }
  return { todos, completedCount, addTask, deleteTask, toggleComplete, getTaskById, updateTask }
})
