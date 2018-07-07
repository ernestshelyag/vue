<template lang="pug">
    .ass
        h1 вебинар
        h3 cake
        button(type="button") add layer
        hr
        .block
            .cake
            table.table
                tr
                    th type
                    th heught
                    th action

        hr




</template>

<script>
    export default {
        name: "mainPage"
    }
</script>

<style lang="sass" scoped>
    .block
        display: flex
    .cake
        width: 300px
        height: 300px
        border: solid 2px #eee
    .table
        flex-grow: 1
        th, td
            border: solid 2px #eee


</style>