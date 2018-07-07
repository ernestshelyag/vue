<template lang="pug">
    .ass
        h1 вебинар
        h3 cake
        button(
            type="button"
            @click="addLayer"
            ) add layer
        hr
        .block(v-show="showCake")
            .cake
                .layer(
                    v-for="(layer, i) in layers"
                    :class="'layer__' + layer.type "
                    :style="{height: layer.height * 10 + 'px'}"
                    @click="changeHeight(i, 1)"
                    @contextmenu.prevent="changeHeight(i, -1)"
                    ) {{ layer.type }}
            table.table
                tr
                    th type
                    th height
                    th action
                tr(v-for="(layer, i) in layers")
                    td
                        select(v-model="layers[i].type")
                            option(
                                :value="assKey"
                                v-for="(lt, assKey) in layersTypes"

                            ) {{ lt.label }}
                    td
                        input(
                            type="text"
                            v-model.number="layers[i].height"
                            )
                    td
                        button(
                            type="button"
                            @click="deleteLayer(i)"
                            ) X
                    // layer.height
        .piss(v-show="showCake")
            hr
            .sum
                span сумма:
                span {{ price + 'руб' }}

            .tot {{ order }}

            button(
                type="button"
                @click="send"
                ) заказать
        


</template>

<script>
    export default {
        name: "mainPage",
        data() {
            return {
                layers: [
                    {
                        type: 'jam',
                        height: 2
                    },
                    {
                        type: 'biscuit',
                        height: 4
                    }
                ],
                layersTypes: {
                    biscuit: {
                        price1sm: 52,
                        label: 'Biscuit'
                    },
                    beze: {
                        price1sm: 100,
                        label: 'Beze'
                    },
                    jam: {
                        price1sm: 60,
                        label: 'Jam'
                    }
                },
                defaultLayerType: 'biscuit',
                defaultHeight: 4
            }
        },
        computed: {
            price() {
                let sum = 0;
                this.layers.forEach((layer) => {
                    sum += layer.height * this.layersTypes[layer.type].price1sm;
                });
                return sum;
            },
            order() {
                let tot = [];
                this.layers.forEach((item) =>{
                    tot.push(item.type);
                    tot.push(item.height);
                });

                let str = tot.join(' ; ');
                return str
            },
            showCake() {
                return this.layers.length > 0
            }

        },
        methods: {
            addLayer() {
                this.layers.push({
                    type: this.defaultLayerType,
                    height: this.defaultHeight
                });
            },
            changeHeight(i, dh) {
                this.layers[i].height += dh;
            },
            deleteLayer(i) {
                this.layers.splice(i, 1);
            },
            send() {
                let tot = [];
                this.layers.forEach((item) =>{
                    tot.push({
                        type: item.type,
                        height: item.height
                    });

                });

                console.log(tot);
            }
        }
    }

</script>

<style lang="sass" scoped>
    .block
        display: flex
    .cake
        width: 300px
        height: 300px
        border: solid 2px #eee
        padding: 10px
    .table
        flex-grow: 1
        th, td
            border: solid 2px #eee

    .layer
        padding: 10px
        text-align: center
        display: flex
        align-items: center
        justify-content: center
        &__biscuit
            background: #a55444
            color: #fff
        &__beze
            background: bisque
        &__jam
            background: crimson
            color: #fff



</style>





















