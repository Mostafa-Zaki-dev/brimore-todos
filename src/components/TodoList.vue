<template>
    <div v-for="todo in todos" :key='todo.id' :class="todo.completed ? 'todo-row complete' : 'todo-row'" >
      <div>
        {{todo.title}}
        <fai icon="edit" class="edit-icon"/>
      </div>
      <div class="icons">
        <fai icon="check-square"  
        :class="todo.completed ? 'check-icon-complete' : 'check-icon'"
        @click="completeTodo(todo)"
        />

        <fai icon="trash-alt" 
        @click="deleteTodo(todo)"
        class="delete-icon"
         />
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
      store.dispatch('deleteTodo', todo );
    };
    
    function completeTodo(todo){
      const updated = {...todo, completed : !todo.completed}
      store.dispatch('updateTodo', updated)
    };
    
    return {
      todos : computed(() => store.getters.getTodos),
      deleteTodo,
      completeTodo,
    };

  }

}

</script>