<template>
    <v-container>
        <h2 class="py-4">Produkte</h2>
        <v-row>
            <v-col
                sm="6"
                lg="4"
                v-for="(product, i) in $store.state.products"
                :key="product.name"
            >
                <VerticalCard :product="product" :i="i" :addToCart="addToCart"/>
            </v-col>
        </v-row>
        <VerticalCard/>
    </v-container>
</template>

<script>
    import VerticalCard from '../cards/VerticalCard.vue'

    export default {
        name: 'ProductDisplay',
        components: {
            VerticalCard
        },
        methods: {
            addToCart(index, quantity = 1) {
                this.$store.commit('addItemToCart', { itemId: index, quantity })
                console.log(this.$store.state.cart)
                var message = this.$store.state.products[index].name + " wurde dem Warenkorb hinzugefügt"
                this.$store.commit('updateSnackbar', { message: message, variant: "success", show: true })
            }
        }
    }
</script>
