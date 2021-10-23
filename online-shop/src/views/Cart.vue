<template>
    <v-container>
        <v-row class="py-5">
            <v-col
                sm="8"
                md="5"
                offset-md="2"
                lg="4"
                offset-lg="3"
            >
                <h3 class="mb-4">Warenkorb</h3>
                <ProductList/>
            </v-col>
            <v-col
                sm="4"
                md="3"
            >
                <CheckoutBox/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import CheckoutBox from '../components/cart/CheckoutBox.vue'
    import ProductList from '../components/cart/ProductList.vue'

    export default {
        name: 'Store',
        components: {
            CheckoutBox,
            ProductList
        },
        created () {
            document.title = "Warenkorb";
        }
    }
</script>
