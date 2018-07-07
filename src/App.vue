<template>
  <div id="app">
    <my-header/>
    <router-view/>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
export default {
    name: 'App',
    components: {
        myHeader
    }
}
</script>

<style lang="sass">
    @import "./sass/base.sass"
    #app
        font-family: sans-serif

</style>
