export default {
  getTodos(state, data) {
    state.todos = data;
  },

  addTodo(state, todo) {
    state.todos = [todo, ...state.todos];
  },

  updateTodo(state, todo) {
    const index = state.todos.findIndex((e) => e.id === todo.id);
    state.todos[index].title = todo.title;
  },

  deleteTodo(state, todo) {
    // since any posted todo will be having same id so better filter with title
    state.todos = state.todos.filter((e) => e.title !== todo.title);
  },
};
