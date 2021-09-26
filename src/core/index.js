import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";

export default {
  async fetchTodos() {
    const { data } = await axios.get(url);
    return data;
  },
  async addTodo(todo) {
    const { data } = await axios.post(url, todo);
    // return new todo body with its assigned id
    return data;
  },
  async updateTodo(id, todo) {
    const { data } = await axios.put(`${url}/${id}`, todo);
    // return new todo body with id
    return data;
  },
  async deleteTodo(id) {
    const { data } = await axios.put(`${url}/${id}`);
    // return {id: id}
    return data;
  },
};
