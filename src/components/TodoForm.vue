<template>
  
  <a-form @submit.prevent="handleSubmit" class='todo-form'>
    <a-form-item >
      <input :class="update ? 'todo-input edit': 'todo-input'"
        :placeholder="update ? `   ${update.title}  -click to update-` : '  Add New Todo'"
        v-model="title"
        :autofocus="update ? true : false"
      />
      <a-button html-type="submit"  :class="update ? 'todo-button edit': 'todo-button'">
        {{update ? 'Update Todo' : 'Add Todo'}}
      </a-button>
      <p class= 'error'  v-if='err'> {{err}}</p>
    </a-form-item>
  </a-form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  props:['update', 'updateTodo'],
  setup({update, updateTodo}) {
    const title = ref('');
    const err = ref('');
    const store = useStore();

   function handleSubmit(){
     const todo = {
        title: title.value,
        userId: 1,
        completed: false,
     };
     if(title.value.length < 5){
       err.value = '5 characters or more required!';
       return ;
     };

     if (update){
       const todo = {...update, title: title.value, completed: false};
       updateTodo(todo)
       return;
     };
     store.dispatch('addTodo', todo)
     title.value = '';
   };

    return {
      handleSubmit,
      title,
      err
    };
  }
}
</script>
