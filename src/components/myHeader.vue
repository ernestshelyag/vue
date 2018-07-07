<template lang="pug">
    include ../assets/bemto/bemto.pug

    +b.HEADER.header
        +e.H1.title {{ title }}
        +e.cont
            router-link(to="/")
                +e.A.link main
            router-link(to="/testPage")
                +e.A.link test
            router-link(to="/directivi")
                +e.A.link директивы
            router-link(to="/lesson3")
                +e.A.link lesson3
            router-link(to="/les4components")
                +e.A.link les4components
            router-link(to="/artuh")
                +e.A.link artuh




</template>

<script>
export default {
    name: "myHeader",
    data() {
        return {
            title: 'header title'
        }
    },
}
</script>

<style lang="sass">
    @import "../sass/mixins.sass"

    .header
        padding: 0 15px
        display: flex
        justify-content: space-between
        align-items: baseline
        border-bottom: solid 2px #eee
        &__title
            color: red
            margin: 0
        &__link
            font-size: 20px
            margin-left: 20px

</style>