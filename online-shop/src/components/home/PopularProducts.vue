<template>
    <v-container 
        class="mb-12"
    >
        <v-row>
            <v-col
                sm="10"
                offset-sm="1"
                lg="8"
                offset-lg="2"
            >
                <h2>
                    Am Beliebtesten
                    <v-btn
                        to="/store"
                        color="primary"
                        small
                        text
                    >
                        Alle Produkte
                    </v-btn>
                </h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                sm="10"
                offset-sm="1"
                lg="8"
                offset-lg="2"
            >
                <v-row>
                    <v-col
                        sm="6"
                        md="4"
                        v-for="(product, i) in $store.state.products.slice(0, 3)"
                        :key="product.name"
                    >
                        <VerticalCard :product="product" :i="i" :addToCart="addToCart"/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import VerticalCard from '../cards/VerticalCard.vue'

    export default {
        name: 'PopularProducts',
        components: {
            VerticalCard
        },
        methods: {
            addToCart(index, quantity = 1) {
                this.$store.commit('addItemToCart', { itemId: index, quantity })
                console.log(this.$store.state.cart)
                var message = this.$store.state.products[index].name + " wurde dem Warenkorb hinzugefügt"
                this.$store.commit('updateSnackbar', { message: message, show: true })
            }
        }
    }
</script>

<style>

</style>