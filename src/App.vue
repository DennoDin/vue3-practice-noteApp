<template>
  <div class="Input">
    <Input @add-task="addTodo" />
  </div>
  <div class="List">
    <List />
  </div>
</template>

<script>
import Input from "@/components/Input.vue"
import List from "@/components/List.vue"

export default {
  name: 'App',
  components: {
    Input,
    List,
  },
  methods: {
    addTodo(title){
      const taskObject = {
        title,
        isComplete: false,
      }
      this.$store.commit('addTodo', taskObject);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
