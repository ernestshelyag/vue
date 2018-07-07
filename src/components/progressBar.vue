<template lang="pug">
    include ../assets/bemto/bemto.pug

    .progressBar
        .bar(v-bind:style="width")


</template>

<script>
    export default {
        name: "progressBar",
        props: {
            max: Number,
            val: Number
        },
        computed: {
            width() {
                let w = this.val / this.max * 100;
                (w > 100) ? w = 100 : console.log('ass');
                return {
                    width: w + '%'
                }
            }
        }

    }
</script>

<style lang="sass">
    @import "../sass/mixins.sass"
    .progressBar
        +b
        height: 20px
        margin: 0 50px
    .bar
        background: cornflowerblue
        height: 100%
        transition: width .6s

</style>