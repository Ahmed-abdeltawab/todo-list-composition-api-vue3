import { ref } from 'vue'
import data from '@/data/data.json'

const todos = ref(
  (data.todos || []).map((t, idx) => ({
    id: t.id ?? idx,
    text: t.todo ?? 'Untitled task',
    completed: !!t.completed,
    createdAt: t.createdAt ?? '',
  })),
)
const useTodos = () => {
  const deleteTask = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }
  const toggleComplete = (id) => {
    const task = todos.value.find((t) => t.id === id)
    if (task) {
      task.completed = !task.completed
    }
  }
  const addTask = (task) => {
    console.log(task)
    todos.value.push(task)
  }
  return { todos, toggleComplete, deleteTask, addTask }
}

export default useTodos
