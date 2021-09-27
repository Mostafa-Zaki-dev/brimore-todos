<template>
    <div v-if="update.id">
      <TodoForm :update="update" :updateTodo="updateTodo"/>
    </div>
    <div v-else  v-for="todo in todos" :key='todo.id' :class="todo.completed ? 'todo-row complete' : 'todo-row'" >
      <div>
        {{todo.title}}
        <fai icon="edit" class="edit-icon" @click="updateIcon(todo)"/>
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
import { computed,onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import TodoForm from './TodoForm.vue'


export default {
  components:{
    TodoForm,
  },
  setup(){

    const store = useStore();
    const update = ref({});

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
    
    function updateIcon(todo){
      update.value = {...todo};
    };

    function updateTodo(todo){
      store.dispatch('updateTodo', todo);
      update.value= '';
    };

    return {
      todos : computed(() => store.getters.getTodos),
      deleteTodo,
      completeTodo,
      updateIcon,
      update,
      updateTodo, 
    };

  }

}

</script>