<template>
    <div id="app">
    <h3>{{title}}</h3>
    <Character 
        v-for="id in ids"
        v-bind:id="id"
    />
    </div>
</template>

<script>
    import Character from './components/Character.vue'
    export default {
        name: 'app',
        data() {
            return {
                title: 'Hello World!',
                ids: [1, 13, 14]
            }
        },
        components: {
            Character
        }
    }
</script>