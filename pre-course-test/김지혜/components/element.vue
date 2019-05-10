<template>
    <div>
        <p>hello vue</p>
        <p v-show="number"> {{number}} </p>
        <button v-on:click="$emit('genNumber')">RandomNumber</button>
    </div>
</template>

<script>


    export default {
        name: "elementForInject",
        props: ['number'],
        methods: {
            genNumber: () => {
                this.number = Math.ceil(Math.random() * 100);
            }
        }
    }
</script>

<style scoped>
</style>