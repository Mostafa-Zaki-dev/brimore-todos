import api from "../core";

const { fetchTodos, addTodo, updateTodo, deleteTodo } = api;

export default {
  async getTodos({ commit }) {
    const apiData = await fetchTodos();
    const appConcernedData = apiData.filter((todo) => todo.id <= 4);
    commit("getTodos", appConcernedData);
  },

  async addTodo({ commit }, todo) {
    const data = await addTodo(todo);
    commit("addTodo", data);
  },

  async updateTodo({ commit }, todo) {
    const data = await updateTodo(todo.id, todo);
    commit("updateTodo", data);
  },

  async deleteTodo({ commit }, todo) {
    try {
      await deleteTodo(todo.id);
    } catch (error) {
      console.log(error.message);
    }
    commit("deleteTodo", todo);
  },
};
