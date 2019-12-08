<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div :key="todo.id" v-for="todo in allTodos" class="todo">{{ todo.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vue";

export default {
  name: "Todos",
  computed: mapGetters(["allTodos"])
};
</script>

<style>
</style>