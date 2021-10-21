<template>
    <v-container>
        <v-card
            outlined
        >
            <v-card-title>
                Details
            </v-card-title>
            <v-card-text>
                <v-text-field label="Name" />
                <v-text-field label="E-Mail" />
                <p>{{ getTotalPrice }}</p>
                <v-btn
                    color="primary"
                    @click="goToCheckout"
                >
                    Bezahlen
                </v-btn>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

    export default {
        name: 'Store',
        components: {

        },
        data() {
            return {
                checkoutForm: null,
                nameRules: [],
                name: "",
                emailRules: [],
                email: "",
            }
        },
        methods: {
            goToCheckout() {
                this.$router.push({ name: "checkout" })
            }
        },
        computed: {
            getTotalPrice() {
                var total = 0
                this.$store.state.cart.forEach(element => {
                    total += element.quantity * this.$store.state.products[element.itemId].price
                });
                return "Gesamt: " + total + "€"
            }
        }
    }
</script>
