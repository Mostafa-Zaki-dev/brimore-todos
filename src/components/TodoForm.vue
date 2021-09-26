<template>
 <a-form @submit.prevent="handleSubmit" class='todo-form'>
   <a-form-item >
    <input class='todo-input' 
      placeholder='  Add New Todo'
      v-model="title"
     />
    <a-button html-type="submit"  class='todo-button'>
      Add Todo
    </a-button>
    <p class= 'error'  v-if='err'> {{err}}</p>
   </a-form-item>
 </a-form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const title = ref('');
    const err = ref('');
    const store = useStore();
    // const todo = {
    //   title: title.value,
    //   userId: 11,
    //   completed: false,
    // };

    // function addTodo(){
    //   console.log('todo: ', todo)
      
    // };

   function handleSubmit(){
     console.log('title : ',title.value)
     const todo = {
        title: title.value,
        userId: 1,
        completed: false,
     };
     if(title.value.length < 5){
       err.value = '5 characters or more required!';
       return ;
     }
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
