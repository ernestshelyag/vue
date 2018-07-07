<template lang="pug">
    include ../assets/bemto/bemto.pug

    .ass
        span components
        h1 сумма {{ sum }}

        hr
        span прогресс бар заполнение чисел
        progressBar(v-bind:val="nums.length" v-bind:max="maxNum")
        hr
        span прогресс бар удачи
        progressBar(v-bind:val="sum" v-bind:max="maxNum * 5")
        hr

        button.btn(v-on:click="showH2 = !showH2") {{ btnText }}
        transition(name='slide')
            h2.ass-shit(v-show="showH2") something
        hr
        button.btn(
            v-on:click="addNumber"
            v-bind:disabled="done"
            ) {{ !done ? 'жми жми' : 'хватит' }}
        ul
            li.item(v-for="num in nums") {{ num }}

</template>

<script>
    import progressBar from '@/components/progressBar'
    export default {
        name: "les4components",

        data() {
            return {
                showH2: true,
                nums: [],
                maxNum: 10,

            }
        },
        components: {
            progressBar
        },
        methods: {
            addNumber () { //addNumber: function () { ...
                if(!this.done) {
                    let rnd = Math.floor(Math.random() * 11) - 5;
                    this.nums.push(rnd)
                }
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
            },
            done() {
                return this.nums.length >= this.maxNum;
            }
        }

    }
</script>

<style lang="sass" scoped>
    @import "../sass/mixins.sass"
    .slide-enter
        opacity: 0
    .slide-enter-active
        transition: opacity .5s
    .slide-leave-active
        transition: opacity .5s
    .slide-leave-to
        opacity: 0
    .ass-shit
        background: #5b82ff
        border: solid 2px blue
        border-radius: 10px
        margin: 10px
        padding: 10px
        color: #fff
        text-transform: uppercase
        letter-spacing: 2px


</style>