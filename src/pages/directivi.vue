<template lang="pug">
    include ../assets/bemto/bemto.pug

    .directivi
        h1 directivi
        button.btn(
            v-on:click="showH2 = !showH2"
            v-bind:title="showH2 ? 'hide' : 'show'"
            ) жми давай
        h2(v-show="showH2") test
        hr
        button.btn(v-on:click="nums.push(Math.random())") жми жми
        ul
            li.item(v-for="num in nums") {{ num }}



</template>

<script>
    export default {
        name: "directivi",
        data() {
            return {
                showH2: true,
                nums: [1,2,3, 'ass']
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../sass/mixins.sass"

    .directivi
        color: blue
    .btn
        background: #eee
</style>