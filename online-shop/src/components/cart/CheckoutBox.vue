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
                <p>Gesamt: {{ this.$store.getters.totalAmountCart }}€</p>
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
                this.$router.push({ name: "Checkout" })
            }
        },
        computed: {
            
        }
    }
</script>
