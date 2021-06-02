<template>
    <h1>Add Task</h1>
    <input v-model="taskTitle">
    <button v-on:click="$emit('addTask', taskTitle)">Submit</button>
</template>

<script>

export default {
    data: () => ({
        taskTitle: null,
    }),
    emits:{
        addTask: String,
    }
}
</script>
