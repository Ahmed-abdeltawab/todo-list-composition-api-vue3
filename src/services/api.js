const API_URL = 'http://localhost:3000'

/**
 * API service for handling all HTTP requests
 */
const api = {
  /**
   * Get all todos
   * @returns {Promise<Array>} Array of todos
   */
  async getTodos() {
    try {
      const response = await fetch(`${API_URL}/todos`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching todos:', error)
      throw error
    }
  },

  /**
   * Get a single todo by ID
   * @param {number} id - Todo ID
   * @returns {Promise<Object>} Todo object
   */
  async getTodoById(id) {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`Error fetching todo ${id}:`, error)
      throw error
    }
  },

  /**
   * Create a new todo
   * @param {Object} todo - Todo object
   * @returns {Promise<Object>} Created todo
   */
  async createTodo(todo) {
    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error creating todo:', error)
      throw error
    }
  },

  /**
   * Update a todo
   * @param {number} id - Todo ID
   * @param {Object} todo - Updated todo object
   * @returns {Promise<Object>} Updated todo
   */
  async updateTodo(id, todo) {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`Error updating todo ${id}:`, error)
      throw error
    }
  },

  /**
   * Partially update a todo
   * @param {number} id - Todo ID
   * @param {Object} updates - Partial updates
   * @returns {Promise<Object>} Updated todo
   */
  async patchTodo(id, updates) {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`Error patching todo ${id}:`, error)
      throw error
    }
  },

  /**
   * Delete a todo
   * @param {number} id - Todo ID
   * @returns {Promise<void>}
   */
  async deleteTodo(id) {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error(`Error deleting todo ${id}:`, error)
      throw error
    }
  },
}

export default api
