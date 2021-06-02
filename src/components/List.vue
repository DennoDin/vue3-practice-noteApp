<template>
    {{todos}}
</template>

<script>

export default {
    computed: {
        todos() {
            return this.$store.state.todos;
        }
    }
}
</script>
