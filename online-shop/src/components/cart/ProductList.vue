<template>
    <div>
        <v-container
            v-if="Object.keys($store.state.cart).length !== 0"
        >
            <v-row
                v-for="(item, i) in $store.state.cart"
                :key="i"
            >
                <HorizontalCard :item="item" :i="i" :removeItemFromCart="removeItemFromCart"/>
            </v-row>
        </v-container>
        <div
            v-else
        >
            Noch keine Produkte im Warenkorb
        </div>
    </div>
</template>

<script>
    import HorizontalCard from "../cards/HorizontalCard.vue"

    export default {
        name: 'Store',
        components: {
            HorizontalCard
        },
        methods: {
            removeItemFromCart(index) {
                this.$store.state.cart.splice(index, 1)
                var message = "Element wurde vom Warenkorb entfernt"
                this.$store.commit('updateSnackbar', { message: message, variant: "error", show: true })
            }
        }
    }
</script>
