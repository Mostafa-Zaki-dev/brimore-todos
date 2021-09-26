import api from "../core";

const { fetchTodos, addTodo, updateTodo, deleteTodo } = api;

export default {
  async getTodos({ commit }) {
    const apiData = await fetchTodos();
    const appConcernedData = apiData.filter((todo) => todo.userId === 11);
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

  async deleteTodo({ commit }, id) {
    const data = await deleteTodo(id);
    commit("deleteTodo", id);
  },
};
