<template>
    <v-container>
        <v-row
            v-for="(item, i) in $store.state.cart"
            :key="i"
        >
            <HorizontalCard :item="item"/>
        </v-row>
    </v-container>
</template>

<script>
    import HorizontalCard from "../cards/HorizontalCard.vue"

    export default {
        name: 'Store',
        components: {
            HorizontalCard
        }
    }
</script>
