<template>
  <div class='todo-app'>
    <h1>What's the Plan for Today?</h1>
    <TodoForm/>
    <TodoList/>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList
  },
  setup() {
    
  },
};
</script>

<style >
</style>
