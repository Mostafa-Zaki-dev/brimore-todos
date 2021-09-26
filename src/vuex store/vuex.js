import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";

export default createStore({
  state: {
    todos: [],
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
  actions,
  mutations,
});
