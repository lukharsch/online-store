<template>
    <v-card
        elevation="6"
    >
        <v-img
            :src="product.image"
            height="200px"
        />
        <v-card-title>
            {{ product.name }}
        </v-card-title>
        <v-card-subtitle>
            {{ product.price }} €
        </v-card-subtitle>
        <v-card-actions>
            <v-btn
                color="success"
                outlined
                @click="addToCart(index = i)"
            >
                <v-icon
                    small
                    left
                >
                    fa-plus
                </v-icon>
                Zum Warenkorb
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "VerticalCard",
        props: {
            product: Object,
            addToCart: Function,
            i: Number
        }
    }
</script>

<style>

</style>