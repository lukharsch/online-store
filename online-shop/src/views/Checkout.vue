<template>
    <v-container>
        <v-row>
            <v-col
                sm="6"
                offset-sm="3"
            >
                <v-stepper
                    v-model="step"
                    alt-labels
                >
                    <v-stepper-header>
                        <v-stepper-step
                            step="1"
                            :complete="step > 1"
                        >
                            Kontakt
                        </v-stepper-step>
                        <v-divider/>
                        <v-stepper-step
                            step="2"
                            :complete="step > 2"
                        >
                            Adresse
                        </v-stepper-step>
                        <v-divider/>
                        <v-stepper-step 
                            step="3"
                            :complete="step > 3"
                        >
                            Fazit
                        </v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <ContactInfo
                            :data="data"
                            :rules="rules"
                            :next="next"
                        />
                        <ShippingInfo
                            :data="data"
                            :rules="rules"
                            :next="next"
                            :previous="previous"
                        />
                        <Review
                            :data="data"
                            :submitOrder="submitOrder"
                            :previous="previous"
                        />
                    </v-stepper-items>
                </v-stepper>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ContactInfo from '../components/checkout/ContactInfo.vue'
    import Review from '../components/checkout/Review.vue'
    import ShippingInfo from '../components/checkout/ShippingInfo.vue'

    export default {
        name: 'Checkout',
        components: {
            ContactInfo,
            Review,
            ShippingInfo
        },
        data() {
            return {
                step: 1,
                checkoutForm: false,
                data: {
                    Name: "",
                    Mail: "",
                    Telefonnummer: "",
                    Straße: "",
                    PLZ: "",
                    Stadt: "",
                    Land: ""
                },
                rules: {
                    required: value => !!value || "Pflichtfeld",
                    zip: value => value.length == 5 || "PLZ muss aus 5 Ziffern bestehen",
                    email: value => {
                        const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
                        return pattern.test(value) || "Falsches E-Mail-Format"
                    },
                    phone: value => {
                        const pattern = /\d{10}/
                        return pattern.test(value) || "Falsches Nummern-Format"
                    }
                }
            }
        },
        methods: {
            next(){
                this.step += 1
            },
            previous(){
                this.step -= 1
            },
            submitOrder(){
                this.$router.push({ name: "ThankYou" })
            }
        },
        created () {
            document.title = "Checkout";
        }
    }
</script>
