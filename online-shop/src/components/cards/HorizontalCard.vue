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
            <div class="d-flex flex-column justify-center" style="width:100%">
                <v-card-title class="py-0">
                    {{ product.name }}
                </v-card-title>
                <v-text-field
                    v-model="quantity"
                    hide-details
                    label="Anzahl"
                    class="pa-4"
                    type="number"
                />
                <v-card-subtitle class="pt-0">
                    {{ item.quantity }} &#10005; {{ product.price }} € = {{ total }}
                </v-card-subtitle>
                <v-btn
                    color="error"
                    outlined
                    small
                    class="mx-4"
                    @click="removeItemFromCart(index = i)"
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
            removeItemFromCart: Function,
            i: Number
        },
        data() {
            return {
                numberValue: 1
            }
        },
        computed: {
            product() {
                return this.$store.state.products[this.item.itemId]
            },
            //productName() {
                //return this.item.quantity > 1 ? this.product.name + " (Anzahl: " + this.item.quantity +")" : this.product.name
            //},
            total() {
                return (this.$store.state.cart[this.i].quantity * this.product.price).toFixed(2) + "€"
            },
            quantity: {
                set(value) {
                    this.$store.commit('updateCart', { id: this.i, quantity: value })
                },
                get() {
                    if(this.$store.state.cart[this.i]) {
                        return this.$store.state.cart[this.i].quantity
                    } else {
                        /*this.$destroy();
                        this.$el.parentNode.removeChild(this.$el);*/
                        return 0
                    }
                }
            }
        }
    }
</script>

<style>

</style>