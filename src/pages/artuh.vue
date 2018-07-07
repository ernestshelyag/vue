<template lang="pug">
    include ../assets/bemto/bemto.pug
    .ass
        h1 artuh
        progress-bar(v-bind:val="ass" v-bind:max="piss")

</template>

<script>
    import ProgressBar from "../components/progressBar";
    export default {
        name: "artuh",
        components: {ProgressBar},
        data() {
            return {
                ass: 9,
                piss: 10
            }
        }
    }
</script>

<style lang="sass">
    @import "../sass/mixins.sass"

</style>