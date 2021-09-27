export default {
  getTodos(state, data) {
    state.todos = data;
  },

  addTodo(state, todo) {
    state.todos = [todo, ...state.todos];
  },

  updateTodo(state, todo) {
    const index = state.todos.findIndex((e) => e.id === todo.id);
    state.todos[index] = todo;
  },

  deleteTodo(state, todo) {
    // since any added todo will be having same id=201, so better filter with title
    state.todos = state.todos.filter((e) => {
      const condition = e.id !== todo.id;
      if (!condition) {
        return e.title !== todo.title;
      }
      return condition;
    });
  },
};
