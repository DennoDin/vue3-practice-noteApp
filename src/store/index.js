import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
    completedTasks: 0,
  },
  mutations: { // For synchronus state modifications
    addTodo(state, task){
      state.todos.push(task)
    },
    toggleStatus(state, taskIndex){
      state.todos[taskIndex] = !state.todos[taskIndex];
    },
    deleteTodo(state, taskIndex){
      state.todos = state.todos.slice(0, taskIndex).concat(state.todos.slice(taskIndex + 1))
    }
  },
  actions: { // For asynchronus state modifications. Call mutations inside.
  },
  modules: {
  }
})
