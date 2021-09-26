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

  deleteTodo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
};
