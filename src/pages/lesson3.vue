<template lang="pug">
    include ../assets/bemto/bemto.pug
    .ass
        h1 сумма {{ sum }}
        button.btn(v-on:click="showH2 = !showH2") {{ btnText }}
        h2(v-show="showH2") press
        hr
        button.btn(v-on:click="addNumber") жми жми
        ul
            li.item(v-for="num in nums") {{ num }}

</template>

<script>
    export default {
        name: "lesson3",
        data() {
            return {
                showH2: true,
                nums: []
            }
        },
        methods: {
            addNumber () { //addNumber: function () { ...
                let rnd = Math.floor(Math.random() * 11) - 5;
                this.nums.push(rnd)
            }

        },
        computed: {
            sum() {
                let sum = 0;
                for(let i = 0; i < this.nums.length; i++) {
                    sum += this.nums[i];
                }
                return sum;
            },
            btnText() {
                return this.showH2 ? 'hide' : 'show'
            }
        }
    }
</script>

<style lang="sass">
    @import "../sass/mixins.sass"

</style>