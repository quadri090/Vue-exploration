<script>
  export default {
    data () {
      return {
        newTodo: '',
        todos: [
          { id: id++, text: 'Learn HTML' },
          { id: id++, text: 'Learn JavaScript' },
          { id: id++, text: 'Learn Vue' }
        ]
      }
    },

    methods: {
      addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
      },
      removeTodo(todo) {
        this.todos = this.todos.filter((t) => t !== todo)
      }
    }
  }
</script>

<template>
  <div class="mt-6">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo">
      <button>Add Todo</button>    
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </div>
</template>