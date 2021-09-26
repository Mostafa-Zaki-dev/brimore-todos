<template>
  <div v-for="todo in todos" :key='todo.id' :class="todo.completed ? 'todo-row complete' : 'todo-row'" >
    <div>
      {{todo.title}}
    </div>
    <div class="icons">
      <a-button @click="deleteTodo(todo)" class="delete-icon">X</a-button>
    </div>
  </div>

</template>

<script>
import { computed,onMounted } from 'vue'
import { useStore } from 'vuex'


export default {

  setup(){

    const store = useStore();
    onMounted(()=> {
      store.dispatch('getTodos');
    });

    function deleteTodo(todo){
      // console.log('todo: ', todo);
      store.dispatch('deleteTodo', todo );
    };
    
    return {
      todos : computed(() => store.getters.getTodos),
      deleteTodo,
    };

  }

}

</script>