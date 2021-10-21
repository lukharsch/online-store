<template>
    <v-card
        elevation="6"
        min-width="100%"
        class="mb-5 pa-4"
    >
        <div class="d-flex">
            <div>
                <v-img
                    :src="product.image"
                    width="120px"
                    height="120px"
                />
            </div>
            <div class="d-flex flex-column justify-center">
                <v-card-title>
                    {{ productName }}
                </v-card-title>
                <v-card-subtitle>
                    {{ item.quantity }} &#10005; {{ product.price }} € = {{ total }}
                </v-card-subtitle>
                <v-btn
                    color="error"
                    outlined
                    small
                    class="mx-4"
                >
                    <v-icon
                        small
                        left
                    >
                        fa-minus
                    </v-icon>
                    Entfernen
                </v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "HorizontalCard",
        props: {
            item: Object,
            updateCart: Function,
            btnAction: String,
            i: Number
        },
        computed: {
            product() {
                console.log("hi")
                console.log(this.item.itemId)
                return this.$store.state.products[this.item.itemId]
            },
            productName() {
                return this.item.quantity > 1 ? this.product.name + " (Anzahl: " + this.item.quantity +")" : this.product.name
            },
            total() {
                return this.item.quantity * this.product.price + "€"
            }
        }
    }
</script>

<style>

</style>