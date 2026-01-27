import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useTodos from './useTodos'

export default function useTaskDetails() {
  const { todos, toggleComplete, deleteTask } = useTodos()
  const route = useRoute()
  const router = useRouter()

  // Computed properties
  const taskId = computed(() => Number(route.params.id))
  const task = computed(() => todos.value.find((t) => t.id === taskId.value))

  // Edit state
  const isEditing = ref(false)
  const editText = ref('')

  // Edit operations
  const startEdit = () => {
    if (task.value) {
      editText.value = task.value.text
      isEditing.value = true
    }
  }

  const saveEdit = () => {
    if (task.value && editText.value.trim()) {
      task.value.text = editText.value.trim()
      isEditing.value = false
    }
  }

  const cancelEdit = () => {
    isEditing.value = false
    editText.value = ''
  }

  // Task operations
  const handleDelete = () => {
    if (task.value && confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.value.id)
      router.push('/')
    }
  }

  const handleToggle = () => {
    if (task.value) {
      toggleComplete(task.value.id)
    }
  }

  return {
    // State
    task,
    isEditing,
    editText,

    // Edit actions
    startEdit,
    saveEdit,
    cancelEdit,

    // Task actions
    handleToggle,
    handleDelete,
  }
}
