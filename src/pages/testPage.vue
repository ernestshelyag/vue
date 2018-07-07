<template lang="pug">
    include ../assets/bemto/bemto.pug
    .test
        h1 {{ title }}
        input(type="text" v-model="title")


</template>

<script>
    export default {
        name: "testPage",
        data() {
            return {
                title: 'test title'
            }
        },
    }
</script>

<style lang="sass">
    @import "../sass/mixins.sass"

</style>


